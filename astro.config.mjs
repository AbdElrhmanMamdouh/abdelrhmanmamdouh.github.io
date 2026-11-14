// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// User site (<username>.github.io): set `site`, no `base`.
// If the GitHub account is renamed (plan decision 9.7), change this one line.
export default defineConfig({
  site: 'https://abdelrhmanmamdouh.github.io',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
});
