import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dakshverma11.github.io',
  output: 'static',
  build: {
    assets: '_assets',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
