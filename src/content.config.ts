import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const byLocale = (text: string): Record<string, unknown>[] =>
  Object.entries(JSON.parse(text) as Record<string, Record<string, unknown>[]>).flatMap(([locale, rows]) =>
    rows.map((row) => ({ ...row, id: `${locale}-${row.id}`, locale })),
  );

const portals = defineCollection({
  loader: file('src/data/portals.json', { parser: byLocale }),
  schema: z.object({ locale: z.enum(['en', 'pt-br']), kind: z.enum(['solo', 'raid']), rank: z.enum(['E', 'D', 'C', 'B', 'A', 'S']), rooms: z.number().nullable(), name: z.string(), hook: z.string(), scene: z.string().nullable(), boss: z.string().nullable(), image: z.string() }),
});
const items = defineCollection({
  loader: file('src/data/items.json', { parser: byLocale }),
  schema: z.object({ locale: z.enum(['en', 'pt-br']), slot: z.enum(['weapon', 'armor', 'accessory']), name: z.string(), description: z.string(), image: z.string() }),
});

export const collections = { portals, items };
