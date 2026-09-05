import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.doktor-sentek.de',
  srcDir: './src',
  publicDir: './static',
  integrations: [sitemap()],
});
