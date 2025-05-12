import mysql from 'mysql2/promise';
import type { RowDataPacket } from 'mysql2/promise';
import { loadEnv } from 'vite';

interface BillRow extends RowDataPacket {
  bill_number: string;
  title: string;
  summary: string;
  tags: string;
  sponsor: string;
  vote_summary: string;
  status: string;
  chamber: string;
  date: string;
}

export interface Bill {
  bill_id: number;
  state_id: number;
  session_id: number;
  body_id: number;
  current_body_id: number;
  bill_type_id: number;
  bill_number: string;
  status_id: number;
  status_date: string | null;
  title: string;
  description: string;
  pending_committee_id: number;
  legiscan_url: string;
  state_url: string;
  change_hash: string;
  updated: string;
  created: string;
}

export async function getBillDetails(billNumber: string): Promise<BillRow[]> {
  const env = loadEnv('', process.cwd(), '');
  
  const connection = await mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    port: env.DB_PORT ? Number(env.DB_PORT) : 3306,
  });

  try {
    const [rows] = await connection.execute<BillRow[]>(
      `
      SELECT b.bill_number, b.title, 
             COALESCE(bt.gpt_summary, b.description) as summary,
             b.status_id as status,
             CASE b.body_id 
               WHEN 1 THEN 'House'
               WHEN 2 THEN 'Senate'
             END as chamber,
             b.status_date as date,
             b.legiscan_url,
             bt.gpt_tags as tags
      FROM ls_bill b
      LEFT JOIN ls_bill_text bt ON b.bill_id = bt.bill_id AND bt.bill_text_type_id = 1
      WHERE b.bill_number = ?
      `,
      [billNumber.toUpperCase()]
    );
    return rows;
  } finally {
    await connection.end();
  }
}

export async function getAllBills(): Promise<Bill[]> {
  const env = loadEnv('', process.cwd(), '');

  const connection = await mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    port: env.DB_PORT ? Number(env.DB_PORT) : 3306,
  });

  try {
    const [rows] = await connection.execute<RowDataPacket[]>(
      `SELECT * FROM ls_bill`
    );
    return rows as Bill[];
  } finally {
    await connection.end();
  }
} 