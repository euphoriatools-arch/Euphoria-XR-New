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
	// Live EuphoriaXR service URLs not yet ported into this Astro scratch.
	// Keep the real paths in the footer and land on the closest existing page.
	redirects: {
		'/services/blockchain-development-company': '/services/nft-makers-metaverse-development-company/',
		'/ar-vr-rental-services-and-solutions-for-events': '/contact/',
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
