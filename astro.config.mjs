// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // ✅ add this

export default defineConfig({
  output: 'server',
  adapter: vercel(), // ✅ add this
});
