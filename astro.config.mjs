// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://silberblick.berlin',
  integrations: [sitemap()],
  image: {
    formats: ['webp', 'jpg'],
    quality: 85,
  },
});
