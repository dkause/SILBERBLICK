import { defineCollection, z } from 'astro:content';

const photos = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    stage_name: z.string().optional(),
    genre: z.string(),
    category: z.string(),
    slug: z.string().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  photos,
};