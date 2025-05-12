  import { defineCollection, z } from 'astro:content';

  const bills = defineCollection({
    schema: z.object({
      title: z.string(),
      bill_number: z.string(),
      date: z.string(),
      status: z.string(),
      chamber: z.enum(['House', 'Senate']),
      sponsor: z.string().optional(),
      vote_summary: z.string().optional(),
      summary_short: z.string().optional(),
      summary: z.string().optional(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().optional(),
    }),
  });

  export const collections = {
    'bill-breakdowns': bills,
  };
