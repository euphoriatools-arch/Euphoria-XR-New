import { industryPages } from './industries';
import { servicePages } from './services';
import type { MarketingPage } from './types';

export const marketingPages: MarketingPage[] = [...servicePages, ...industryPages];

const bySlug = new Map(marketingPages.map((page) => [page.slug, page]));

function pageText(page: MarketingPage): string {
	const blocks = [...page.benefits, ...page.process, ...page.useCases, ...page.deliverables];
	return [
		page.h1,
		page.intro.join(' '),
		blocks.map((block) => `${block.title} ${block.body}`).join(' '),
		page.faqs.map((faq) => `${faq.question} ${faq.answer}`).join(' '),
	]
		.join(' ')
		.toLowerCase();
}

const seoErrors: string[] = [];
for (const page of marketingPages) {
	if (page.title.length < 50 || page.title.length > 60) {
		seoErrors.push(`Title length ${page.title.length} for /${page.slug}/: ${page.title}`);
	}
	if (page.description.length < 140 || page.description.length > 160) {
		seoErrors.push(`Description length ${page.description.length} for /${page.slug}/: ${page.description}`);
	}
	if (!page.h1.toLowerCase().includes(page.keywords.primary)) {
		seoErrors.push(`H1 missing primary keyword "${page.keywords.primary}" on /${page.slug}/`);
	}
	if (page.faqs.length < 3 || page.faqs.length > 15) {
		seoErrors.push(`FAQ count ${page.faqs.length} on /${page.slug}/`);
	}
	if (page.related.length < 3) {
		seoErrors.push(`Need 3 related links on /${page.slug}/`);
	}
	const text = pageText(page);
	for (const keyword of page.keywords.secondary) {
		if (!text.includes(keyword)) {
			seoErrors.push(`Missing secondary keyword "${keyword}" on /${page.slug}/`);
		}
	}
	for (const slug of page.related) {
		if (slug === page.slug || !bySlug.has(slug)) {
			seoErrors.push(`Bad related slug "${slug}" on /${page.slug}/`);
		}
	}
}
if (seoErrors.length > 0) {
	throw new Error(seoErrors.join('\n'));
}

export function getMarketingPage(slug: string): MarketingPage | undefined {
	return bySlug.get(slug);
}

export function relatedLinks(page: MarketingPage) {
	return page.related.map((slug) => {
		const related = bySlug.get(slug);
		if (!related) throw new Error(`Missing related page ${slug}`);
		return {
			href: `/${related.slug}/`,
			label: related.navLabel,
			description: related.summary,
		};
	});
}
