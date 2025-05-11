import { defineCollection, z } from 'astro:content';

const bills = defineCollection({
  schema: z.object({
    title: z.string(),
    bill_number: z.string(),
    date: z.string(),
    status: z.string(),
    chamber: z.enum(['House', 'Senate']),
    draft: z.boolean(),
  }),
});

export const collections = {
  'bill-breakdowns': bills,
};
