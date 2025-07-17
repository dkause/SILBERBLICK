# SILBERBLICK - dreary-disk

This is the Astro-based portfolio website for the photographer Daniel Kause (SILBERBLICK).

## Content Structure

This project uses Astro's [Content Collections](https://docs.astro.build/en/guides/content-collections/) to manage the portfolio images and their associated metadata.

### `fotos` Collection

All portfolio images are managed as individual Markdown files in the `src/fotos/` directory. Each file contains frontmatter that defines its properties according to the schema below.

**Schema (`src/content/config.ts`):**

```typescript
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const fotos = defineCollection({
  loader: glob ({pattern: "src/fotos/**/*.md"}),
  schema: ({ image }) => z.object({
    // The display name of the photograph.
    name: z.string(),

    // An array of keywords for filtering and SEO.
    tags: z.array(z.string()),

    // The main image file and its alt text.
    image: z.object({
      src: image(),
      alt: z.string(),
    }),

    // The main category for the image (e.g., "architektur", "portrait").
    // This is REQUIRED and used for generating URL paths.
    category: z.string(),

    // If true, this image is prioritized as the hero image on a series detail page.
    isHero: z.boolean().optional(),

    // If this image is part of a series, this name groups it with others.
    seriesName: z.string().optional(),
  }),
});

export const collections = { fotos };
```
