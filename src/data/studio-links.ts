export type StudioLink = {
	href: string;
	label: string;
};

export type StudioGroup = {
	title: string;
	links: StudioLink[];
};

/** Crawlable service and industry links. Labels are the visible anchor text. */
export const studioGroups: StudioGroup[] = [
	{
		title: 'Artificial intelligence',
		links: [
			{ href: '/services/ai-chatbot-development-services/', label: 'AI chatbot development services' },
			{ href: '/services/ai-software-development/', label: 'AI software development' },
			{ href: '/services/ai-development-company/', label: 'AI development company' },
			{ href: '/services/artificial-intelligence-company-and-consulting-services/', label: 'Machine learning development services' },
			{ href: '/services/ai-integration-services/', label: 'AI integration services' },
			{ href: '/services/ai-agent-development-company/', label: 'AI agent development' },
		],
	},
	{
		title: 'AR and VR development',
		links: [
			{ href: '/services/extended-reality-development/', label: 'Extended reality development company' },
			{ href: '/services/digital-twin-development/', label: 'Digital twin development company' },
			{ href: '/services/augmented-reality-development-company/', label: 'Augmented reality development company' },
			{ href: '/services/virtual-reality-development-company/', label: 'Virtual reality development company' },
			{ href: '/services/mixed-reality-development-company/', label: 'Mixed reality development company' },
			{ href: '/services/apple-vision-pro-development/', label: 'Apple Vision Pro development company' },
			{ href: '/services/meta-quest-development/', label: 'Meta Quest development company' },
			{ href: '/services/samsung-galaxy-xr-development/', label: 'Samsung Galaxy XR development company' },
			{ href: '/services/nft-makers-metaverse-development-company/', label: 'NFT marketplace & metaverse development' },
		],
	},

	{
		title: 'WebAR and branded experiences',
		links: [
			{ href: '/services/webar-development/', label: 'WebAR development' },
			{ href: '/services/webar-business-card/', label: 'AR business card' },
			{ href: '/services/product-configurator/', label: '3D product configurator' },
			{ href: '/services/branded-ar-filters/', label: 'Branded AR filters' },
		],
	},
	{
		title: 'Training and simulation',
		links: [
			{ href: '/ar-vr-training-education/', label: 'VR for education / AR & VR training' },
			{ href: '/services/virtual-reality-training/', label: 'VR training simulation' },
			{ href: '/services/vr-simulators/', label: 'VR simulators' },
		],
	},
	{
		title: 'Healthcare and government',
		links: [
			{ href: '/ar-vr-medical-healthcare/', label: 'VR medical training' },
			{ href: '/ar-vr-development-solutions-for-government-agencies/', label: 'VR military & government training' },
		],
	},
	{
		title: 'Retail, media, and agencies',
		links: [
			{ href: '/ar-vr-fashion-retail/', label: 'Virtual try-on' },
			{ href: '/ar-vr-media-and-marketing/', label: 'AR in advertising' },
			{ href: '/ar-vr-development-solutions-for-creative-agencies/', label: 'Immersive agency solutions' },
		],
	},
];

export const platformSlugs = [
	'services/webar-development',
	'services/virtual-reality-training',
	'services/product-configurator',
	'services/branded-ar-filters',
] as const;
