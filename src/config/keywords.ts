import { marketingPages } from '../data/pages';
import { pagePath } from '../lib/urls';

/**
 * Keyword map for the site.
 * To retarget a phrase, edit the `keywords` field on the matching page in
 * src/data/services.ts or src/data/industries.ts. Do not add a second URL
 * for a variation of a keyword that already has a page.
 */
export type KeywordEntry = {
	keyword: string;
	path: string;
	role: 'primary' | 'secondary';
};

export const keywordMap: KeywordEntry[] = marketingPages.flatMap((page) => {
	const path = pagePath(page.slug);
	return [
		{ keyword: page.keywords.primary, path, role: 'primary' as const },
		...page.keywords.secondary.map((keyword) => ({
			keyword,
			path,
			role: 'secondary' as const,
		})),
	];
});
