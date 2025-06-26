import { defineCollection, z } from 'astro:content'

const imageObject = z.object({
  src: z.string(),
  alt: z.string(),
})

const photos = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.string(), 
    slug: z.string().optional(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
    })),
  }),
})

export const collections = {
  photos,
}
