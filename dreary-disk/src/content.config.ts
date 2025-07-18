// 1. Import Utilities
import { defineCollection, z } from "astro:content";
// 2. Import GLOB-Loader
import { glob } from "astro/loaders";
// 3. define foto-collection
const fotos = defineCollection({
  loader: glob ({pattern: "src/fotos/**/*.md"}),
  schema: ({ image }) => z.object({
    name: z.string(),
    tags: z.array(z.string()),
    image: z.object({
      src: image(),
      alt: z.string(),
    }),
    // NEUE FELDER HINZUFÜGEN
    category: z.string(),
    isHero: z.boolean().optional(),
    seriesName: z.string().optional(),
  }),
})
// 4. export foto-collection
export const collections = { fotos }
