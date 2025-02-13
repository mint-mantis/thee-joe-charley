import { defineConfig } from 'astro/config';
import bookshop from '@bookshop/astro-bookshop';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [
    bookshop(),
    react(), 
    tailwind(), 
    sitemap()]
});