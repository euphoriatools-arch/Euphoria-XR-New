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
		'/ai-chatbot-development-services': '/services/ai-chatbot-development-services/',
		'/ai-software-development': '/services/ai-software-development/',
		'/ai-integration-services': '/services/ai-integration-services/',
		'/ai-agent-development-company': '/services/ai-agent-development-company/',
		'/artificial-intelligence-company-and-consulting-services':
			'/services/artificial-intelligence-company-and-consulting-services/',
		'/ai-development-company': '/services/ai-development-company/',
		'/webar-development': '/services/webar-development/',
		'/webar-business-card': '/services/webar-business-card/',
		'/product-configurator': '/services/product-configurator/',
		'/virtual-reality-training': '/services/virtual-reality-training/',
		'/vr-simulators': '/services/vr-simulators/',
		'/digital-twin-development': '/services/digital-twin-development/',
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
