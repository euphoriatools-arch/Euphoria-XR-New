export type Block = { title: string; body: string };

export type Faq = { question: string; answer: string };

export type ImageKey = 'vr' | 'ai' | 'ar' | 'city' | 'lab' | 'cosmos' | 'abstract';

export type MarketingPage = {
	slug: string;
	kind: 'service' | 'industry';
	h1: string;
	title: string;
	description: string;
	summary: string;
	navLabel: string;
	eyebrow: string;
	serviceType: string;
	image: ImageKey;
	intro: string[];
	benefits: Block[];
	process: Block[];
	useCases: Block[];
	deliverables: Block[];
	faqs: Faq[];
	related: string[];
	keywords: { primary: string; secondary: string[] };
};
