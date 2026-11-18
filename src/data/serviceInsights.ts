import type { MarketingPage } from './types';
import { vrPageExtras, vrServiceSlug } from './vrPage';

export type InsightCard = {
	kind: 'stat' | 'copy';
	text: string;
	index?: string;
};

export type IndustryInsightItem = {
	index: string;
	title: string;
	body: string;
	source: string;
};

export type ServiceInsight = {
	label: string;
	headline: string;
	body: string;
	/** Legacy masonry cards (optional). */
	columns?: [InsightCard, InsightCard][];
	/** Numbered industry insight items with sources. */
	items?: IndustryInsightItem[];
};

const insightsBySlug: Record<string, ServiceInsight> = {
	[vrServiceSlug]: {
		label: vrPageExtras.insights.label,
		headline: vrPageExtras.insights.headline,
		body: vrPageExtras.insights.body,
		items: vrPageExtras.insights.items,
	},
};

export function serviceInsightFor(page: MarketingPage): ServiceInsight | null {
	return insightsBySlug[page.slug] ?? null;
}
