/**
 * Single source of truth for brand, contact, and default SEO.
 * Components must read from this file. Do not hardcode these values elsewhere.
 */
export const site = {
	siteName: 'EuphoriaXR',
	siteUrl: 'https://euphoriaxr.com',
	defaultTitle: 'EuphoriaXR | Studio for AR, VR, and AI Experiences',
	defaultDescription:
		'EuphoriaXR is a creative technology studio building AR, VR, AI, WebXR, and 3D experiences for training, brands, products, and public teams worldwide.',
	defaultOgImage: '/og-default.jpg',
	twitterHandle: '@euphoriaxr',
	email: 'contact@euphoriaxr.com',
	phone: '+1 731 236 0132',
	address: {
		streetAddress: '1550 Cypress Creek Rd',
		addressLocality: 'Cedar Park',
		addressRegion: 'TX',
		postalCode: '78613',
		addressCountry: 'US',
	},
	offices: [
		{
			id: 'usa',
			title: 'USA',
			region: 'USA',
			phone: '+1 731 236 0132',
			address: '1550 Cypress Creek Rd, Cedar Park, TX 78613, United States',
			flag: '🇺🇸',
			hq: true,
			mapQuery: '1550 Cypress Creek Rd, Cedar Park, TX 78613, United States',
			image: 'city',
		},
		{
			id: 'ksa',
			title: 'Saudi Arabia',
			region: 'KSA',
			phone: '+966 50 645 4316',
			address: 'Al Kitab King Abdul Aziz, Riyadh 12233, Saudi Arabia',
			flag: '🇸🇦',
			hq: false,
			mapQuery: 'Al Kitab King Abdul Aziz, Riyadh 12233, Saudi Arabia',
			image: 'ridge',
		},
		{
			id: 'uk',
			title: 'UK',
			region: 'UK',
			phone: '+44 7424669203',
			address: '112 Watford High Street, WD17 2BW, United Kingdom',
			flag: '🇬🇧',
			hq: false,
			mapQuery: '112 Watford High Street, WD17 2BW, United Kingdom',
			image: 'ar',
		},
	],
	social: {
		facebook: 'https://www.facebook.com/euphoriapklife',
		linkedin: 'https://www.linkedin.com/company/euphoriaxr',
		instagram: 'https://www.instagram.com/euphoriapklife/',
		x: 'https://x.com/euphoriaxr',
		youtube: 'https://www.youtube.com/channel/UCPSKm-H-0RaaeTF1dv1I9tQ',
	},
	foundingYear: 2016 as number | null,
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

export function formatAddress(parts = site.address) {
	return `${parts.streetAddress}, ${parts.addressLocality}, ${parts.addressRegion} ${parts.postalCode}, United States`;
}
