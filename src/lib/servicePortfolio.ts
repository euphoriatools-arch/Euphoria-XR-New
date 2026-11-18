import type { CategorySlug } from '../content/categories';
import type { MarketingPage } from '../data/types';
import { sortProjects, type ProjectEntry } from './portfolio';

/** Map a marketing/service page to the closest portfolio category. */
export function portfolioCategoryForPage(page: MarketingPage): CategorySlug | null {
	const slug = page.slug.toLowerCase();

	if (
		slug.includes('virtual-reality') ||
		slug.includes('vr-simulator') ||
		slug.includes('vr-training') ||
		slug.includes('ar-vr-training') ||
		slug.includes('ar-vr-medical') ||
		slug.includes('ar-vr-development-solutions-for-government')
	) {
		return 'virtual-reality';
	}

	if (
		slug.includes('augmented-reality') ||
		slug.includes('webar') ||
		slug.includes('branded-ar') ||
		slug.includes('product-configurator') ||
		slug.includes('ar-vr-fashion') ||
		slug.includes('ar-vr-media')
	) {
		return 'augmented-reality';
	}

	if (
		slug.includes('ai-') ||
		slug.includes('artificial-intelligence') ||
		slug.includes('machine-learning') ||
		slug.endsWith('ai-development-company') ||
		slug.includes('ai-chatbot') ||
		slug.includes('ai-software') ||
		slug.includes('ai-integration') ||
		slug.includes('ai-agent')
	) {
		return 'artificial-intelligence';
	}

	if (slug.includes('nft') || slug.includes('blockchain') || slug.includes('metaverse')) {
		return 'blockchain';
	}

	if (slug.includes('360')) {
		return '360-videography';
	}

	return null;
}

export function caseStudiesForPage(page: MarketingPage, projects: ProjectEntry[], limit = 12): ProjectEntry[] {
	const category = portfolioCategoryForPage(page);
	const pool = category ? projects.filter((project) => project.data.category === category) : projects;
	const sorted = sortProjects(pool);
	if (sorted.length >= 3) return sorted.slice(0, limit);
	return sortProjects(projects).slice(0, limit);
}
