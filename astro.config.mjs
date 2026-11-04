// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/config/site.ts';

export default defineConfig({
	site: site.siteUrl,
	trailingSlash: 'always',
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'hover',
	},
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => !page.includes('/404'),
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	image: {
		layout: 'none',
	},
});
