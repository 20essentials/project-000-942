// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ['en', 'es', 'it'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true
    }
  },

  output: 'server',

  adapter: vercel()
});
