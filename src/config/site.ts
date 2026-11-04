/**
 * Single source of truth for brand, contact, and default SEO.
 * Components must read from this file. Do not hardcode these values elsewhere.
 *
 * TODO: Confirm the production domain, phone, postal address, founding year,
 * Twitter handle, and real LinkedIn / Instagram profile URLs before launch.
 */
export const site = {
	siteName: 'EuphoriaXR',
	siteUrl: 'https://euphoriaxr.com',
	defaultTitle: 'EuphoriaXR | Studio for AR, VR, and AI Experiences',
	defaultDescription:
		'EuphoriaXR is a creative technology studio building AR, VR, AI, WebXR, and 3D experiences for training, brands, products, and public teams worldwide.',
	defaultOgImage: '/og-default.jpg',
	twitterHandle: '@euphoriaxr',
	email: 'hello@euphoriaxr.com',
	phone: '',
	address: {
		streetAddress: '',
		addressLocality: '',
		addressRegion: '',
		postalCode: '',
		addressCountry: '',
	},
	social: {
		linkedin: 'https://www.linkedin.com/',
		instagram: 'https://www.instagram.com/',
	},
	foundingYear: null as number | null,
	copyrightStartYear: 2016,
	legalName: 'EuphoriaXR LLC',
	locale: 'en_US',
	language: 'en',
	themeColor: '#f8f8f6',
	/**
	 * Contact form delivery.
	 * `endpoint` is posted by the contact form (JSON from the browser, or a normal form post without JavaScript).
	 * The built-in route at src/pages/api/contact.ts validates every submission.
	 * On a static host that route is not executed. Point `endpoint` at Formspree, HubSpot, or your own function,
	 * or add an Astro adapter and set `export const prerender = false` in that route. See README.
	 */
	form: {
		endpoint: '/api/contact',
	},
} as const;

export type SiteConfig = typeof site;
