// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import icon from 'astro-icon';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    icon(),
  ],
});