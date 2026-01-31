import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://TU_USUARIO.github.io',
  base: '/galanbarbers',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    })
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
