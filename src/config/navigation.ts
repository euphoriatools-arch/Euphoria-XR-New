import { industryPages } from '../data/industries';
import { servicePages } from '../data/services';
import type { ImageKey, MarketingPage } from '../data/types';

export type NavLink = {
	href: string;
	label: string;
	description: string;
};

export type NavGroup = {
	title: string;
	links: NavLink[];
};

type GroupDef = { title: string; slugs: string[] };

const serviceGroupDefs: GroupDef[] = [
	{
		title: 'AI Solutions',
		slugs: [
			'ai-chatbot-development-services',
			'ai-software-development',
			'ai-integration-services',
			'ai-agent-development-company',
			'artificial-intelligence-company-and-consulting-services',
			'ai-development-company',
		],
	},
	{
		title: 'AR/VR and WebAR',
		slugs: [
			'webar-development',
			'virtual-reality-training',
			'vr-simulators',
			'services/augmented-reality-development-company',
			'services/virtual-reality-development-company',
		],
	},
	{
		title: 'Metaverse and NFT',
		slugs: ['services/nft-makers-metaverse-development-company'],
	},
	{
		title: 'Branded Experiences',
		slugs: ['webar-business-card', 'product-configurator', 'services/branded-ar-filters'],
	},
];

const industryGroupDefs: GroupDef[] = [
	{ title: 'Education and Training', slugs: ['ar-vr-training-education'] },
	{ title: 'Healthcare', slugs: ['ar-vr-medical-healthcare'] },
	{ title: 'Media and Marketing', slugs: ['ar-vr-media-and-marketing'] },
	{ title: 'Retail and Fashion', slugs: ['ar-vr-fashion-retail'] },
	{ title: 'Government', slugs: ['ar-vr-development-solutions-for-government-agencies'] },
	{ title: 'Creative Agencies', slugs: ['ar-vr-development-solutions-for-creative-agencies'] },
];

function linkFor(slug: string, pages: MarketingPage[]): NavLink {
	const page = pages.find((item) => item.slug === slug);
	if (!page) throw new Error(`navigation.ts references an unknown page: ${slug}`);
	return {
		href: `/${page.slug}/`,
		label: page.navLabel,
		description: page.summary,
	};
}

function groupsFrom(defs: GroupDef[], pages: MarketingPage[]): NavGroup[] {
	const used = new Set<string>();
	const groups = defs.map((group) => ({
		title: group.title,
		links: group.slugs.map((slug) => {
			if (used.has(slug)) throw new Error(`navigation.ts lists ${slug} twice`);
			used.add(slug);
			return linkFor(slug, pages);
		}),
	}));
	for (const page of pages) {
		if (!used.has(page.slug)) {
			throw new Error(`Add ${page.slug} to a group in src/config/navigation.ts`);
		}
	}
	return groups;
}

export const navigation = {
	services: groupsFrom(serviceGroupDefs, servicePages),
	industries: groupsFrom(industryGroupDefs, industryPages),
	company: [
		{
			href: '/about/',
			label: 'About',
			description: 'The studio behind the AR, VR, and AI work.',
		},
		{
			href: '/portfolio/',
			label: 'Case studies',
			description: 'Sample AR, VR, 360, blockchain, and AI projects.',
		},
		{
			href: '/contact/',
			label: 'Contact',
			description: 'Tell us what the experience has to do.',
		},
	] satisfies NavLink[],
	blog: {
		href: '/exr-blogs/',
		label: 'Blog',
	},
	cta: {
		href: '/contact/',
		label: 'Get in touch',
	},
	drawerCta: {
		href: '/contact/',
		label: 'Contact',
	},
	feature: {
		href: '/contact/',
		kicker: 'Start a project',
		title: 'Start a conversation',
		description: 'Tell us the audience, the constraint, and the date you have in mind.',
		cta: 'Contact',
		image: 'lab' as ImageKey,
		imageAlt: 'Engineer assembling equipment in a technology workshop',
	},
};
