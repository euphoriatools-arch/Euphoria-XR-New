import { site } from '../config/site';
import { absoluteUrl } from './urls';

export type JsonLd = Record<string, unknown>;

function profileUrls(): string[] {
	return Object.values(site.social).filter((url) => {
		try {
			const parsed = new URL(url);
			return parsed.pathname !== '/' && parsed.pathname !== '';
		} catch {
			return false;
		}
	});
}

function postalAddress(): JsonLd | undefined {
	const address = site.address;
	if (!address.streetAddress || !address.addressLocality || !address.addressCountry) return undefined;
	return {
		'@type': 'PostalAddress',
		streetAddress: address.streetAddress,
		addressLocality: address.addressLocality,
		addressRegion: address.addressRegion,
		postalCode: address.postalCode,
		addressCountry: address.addressCountry,
	};
}

export function organizationSchema(): JsonLd {
	const sameAs = profileUrls();
	const address = postalAddress();
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': absoluteUrl('/#organization'),
		name: site.siteName,
		url: absoluteUrl('/'),
		logo: absoluteUrl('/brand/logo.png'),
		email: site.email,
		telephone: site.phone,
		foundingDate: site.foundingYear ? String(site.foundingYear) : undefined,
		address,
		sameAs: sameAs.length > 0 ? sameAs : undefined,
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'customer support',
			email: site.email,
			telephone: site.phone,
			availableLanguage: 'English',
		},
	};
}

export function websiteSchema(): JsonLd {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': absoluteUrl('/#website'),
		name: site.siteName,
		url: absoluteUrl('/'),
		inLanguage: 'en-US',
		publisher: { '@id': absoluteUrl('/#organization') },
	};
}

export function breadcrumbSchema(crumbs: { name: string; href: string }[]): JsonLd {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: crumbs.map((crumb, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: crumb.name,
			item: absoluteUrl(crumb.href),
		})),
	};
}

export function serviceSchema(input: {
	name: string;
	description: string;
	serviceType: string;
	url: string;
}): JsonLd {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: input.name,
		description: input.description,
		serviceType: input.serviceType,
		url: input.url,
		areaServed: 'Worldwide',
		provider: {
			'@type': 'Organization',
			name: site.siteName,
			url: absoluteUrl('/'),
		},
	};
}

export function collectionSchema(input: { name: string; description: string; url: string }): JsonLd {
	return {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: input.name,
		description: input.description,
		url: input.url,
		isPartOf: { '@id': absoluteUrl('/#website') },
	};
}

export function blogPostingSchema(input: {
	headline: string;
	description: string;
	url: string;
	image: string;
	datePublished: string;
	dateModified: string;
	author: string;
}): JsonLd {
	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: input.headline,
		description: input.description,
		url: input.url,
		image: input.image,
		datePublished: input.datePublished,
		dateModified: input.dateModified,
		author: { '@type': 'Person', name: input.author },
		publisher: {
			'@type': 'Organization',
			name: site.siteName,
			logo: { '@type': 'ImageObject', url: absoluteUrl('/brand/logo.png') },
		},
		mainEntityOfPage: input.url,
	};
}

export function creativeWorkSchema(input: {
	name: string;
	description: string;
	url: string;
	image: string;
	dateCreated: string;
	about: string;
}): JsonLd {
	return {
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		name: input.name,
		description: input.description,
		url: input.url,
		image: input.image,
		dateCreated: input.dateCreated,
		about: input.about,
		creator: {
			'@type': 'Organization',
			'@id': absoluteUrl('/#organization'),
			name: site.siteName,
		},
	};
}

export function faqSchema(faqs: { question: string; answer: string }[]): JsonLd | undefined {
	if (faqs.length === 0) return undefined;
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer,
			},
		})),
	};
}
