export type AboutService = {
	href?: string;
	label: string;
	summary: string;
};

export const aboutIntro = {
	eyebrow: 'ABOUT / STUDIO / XR',
	headlineBefore: 'We turn immersive ideas into ',
	headlineAccent: 'practical',
	headlineAfter: ' digital experiences.',
	body: 'Founded in 2016, EuphoriaXR is an award-winning XR development studio trusted by Fortune 500 companies, global brands, and growing businesses. We combine AR, VR, AI, and 3D expertise to deliver immersive experiences for training, marketing, and visualization, guiding projects from strategy and design to deployment and ongoing support.',
};

export const aboutCounters = [
	{ value: '2016', label: 'Founded' },
	{ value: '10+', label: 'Years of XR expertise' },
	{ value: '300+', label: 'Projects delivered' },
];

export const aboutServices: AboutService[] = [
	{
		href: '/services/virtual-reality-development-company/',
		label: 'Virtual Reality (VR) Development',
		summary:
			'We create VR applications for training, simulations, and experiences, designed around users, performance requirements, and headsets.',
	},
	{
		href: '/services/augmented-reality-development-company/',
		label: 'Augmented Reality (AR) Development',
		summary:
			'Our team builds enterprise AR experiences for visualization, guided workflows, product interaction, and contextual digital information.',
	},
	{
		href: '/services/mixed-reality-development-company/',
		label: 'Mixed Reality (MR) Development',
		summary:
			'We develop mixed reality experiences connecting interactive digital content with physical spaces, using appropriate tracking and spatial interfaces.',
	},
	{
		label: 'Smart Glasses App Development',
		summary:
			'We create applications for smart eyewear that support tasks, hands-free information access, remote collaboration, and workplace productivity.',
	},
	{
		label: 'AI Glasses App Development',
		summary:
			'We design AI-enabled eyewear applications incorporating contextual information, computer vision, and assistance features for real-world tasks and environments.',
	},
	{
		label: 'Digital Twin Development',
		summary:
			'We develop interactive digital representations of physical assets and spaces to support visualization, operational insights, and scenario planning.',
	},
	{
		label: 'Apple Vision Pro App Development',
		summary:
			'We design spatial applications for Apple Vision Pro, combining immersive visualization, natural interactions, and structured information experiences.',
	},
	{
		href: '/services/virtual-reality-development-company/',
		label: 'Meta Quest App Development',
		summary:
			'Our developers create Meta Quest experiences for workplace training, guided learning, interactive presentations, and virtual environments tailored to hardware requirements.',
	},
	{
		label: 'Samsung Galaxy XR App Development',
		summary:
			'We plan immersive Android XR applications for compatible Samsung devices, focusing on spatial interactions, visual performance, and practical use cases.',
	},
	{
		href: '/virtual-reality-training/',
		label: 'VR Training & Simulation Development',
		summary:
			'We develop immersive VR training simulations for employee onboarding, workplace safety, equipment operations, and practical skills development.',
	},
	{
		label: 'Spatial Product Design',
		summary:
			'We design spatial interfaces, navigation systems, and interactive user journeys that make immersive applications intuitive.',
	},
	{
		label: 'XR Software Engineering',
		summary:
			'We engineer XR applications with interactions, backend connectivity, integration planning, and performance-conscious architectures.',
	},
	{
		href: '/product-configurator/',
		label: '3D Content Creation',
		summary:
			'Our artists create 3D models, textures, environments, and animations for applications across VR and AR platforms.',
	},
	{
		href: '/contact/',
		label: 'AR/VR App Maintenance & Support',
		summary:
			'We provide post-launch support for immersive applications, including fixes, compatibility checks, content improvements, and platform updates.',
	},
];
