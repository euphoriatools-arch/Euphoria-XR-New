/**
 * Extended Reality (XR) service page content from editorial handoff.
 * Slug / public URL: set when confirmed — do not register in services/nav until then.
 */
export const extendedRealityServiceSlug = 'services/extended-reality-development';

export const extendedRealityPage = {
	heroEyebrow: 'Custom AR / VR / MR / WebXR',
	heroLines: ['Extended Reality (XR)', 'Development Company'] as const,
	summary:
		'Build immersive digital experiences that connect people, products and environments. Euphoria XR develops custom extended reality solutions for businesses, from interactive applications to enterprise training and engaging customer experiences.',
	heroCtas: [
		{ href: '/contact/', label: 'Discuss Your XR Project' },
		{ href: '/portfolio/', label: 'Explore Our Work' },
	] as const,
	credibility: {
		eyebrow: 'Introduction',
		headline: 'Connect the Physical and Digital Worlds',
		body: 'Extended reality (XR) is the umbrella term for AR, VR and mixed reality. It enables people to interact with digital content in real-world, simulated or blended environments.',
		bodyExact:
			'At Euphoria XR, we combine immersive experience design, 3D content and application development to help businesses translate ideas into practical digital products. We align each solution with the intended users, business goals and target platforms.',
		counters: [
			{ value: '10+', label: 'Years in AR, VR, MR and Spatial Computing' },
			{ value: '300+', label: 'Successful projects launched' },
			{ value: '50+', label: 'Headsets, platforms and devices supported' },
			{ value: '100%', label: 'Client satisfaction focus' },
		],
	},
	services: {
		title: 'Our Extended Reality Development Services',
		lead: 'Explore custom XR capabilities designed around your business goals, technical requirements and user experience.',
		items: [
			{
				title: 'Augmented Reality Development',
				body: 'Bring interactive digital content into the physical world. We design AR applications for product visualization, mobile experiences, brand activations and guided tasks, with platform selection based on your audience.',
			},
			{
				title: 'Virtual Reality Development',
				body: 'Create immersive virtual environments for training, simulations, entertainment and customer experiences. We build interactions and 3D assets around the purpose of the experience.',
			},
			{
				title: 'Mixed Reality Development',
				body: 'Combine spatially aware digital objects with physical environments. We design mixed reality experiences for interactive visualization, guided workflows and collaborative scenarios.',
			},
			{
				title: 'WebXR Development',
				body: 'Deliver immersive experiences through compatible web browsers. WebAR and WebVR can reduce app-install friction and extend access to interactive campaigns, demonstrations and virtual tours.',
			},
			{
				title: 'Custom XR Application Development',
				body: 'Develop tailored XR software around your requirements, including user journeys, interaction design, device compatibility, 3D content and application integrations.',
			},
			{
				title: 'Enterprise XR Development',
				body: 'Design XR solutions for business workflows, training programs and distributed teams. We consider integration, deployment, usability and ongoing content needs during planning.',
			},
			{
				title: '3D Content & Immersive Experience Design',
				body: 'Create interactive environments, 3D models, animations and spatial interfaces that make complex products, scenarios and information easier to explore.',
			},
			{
				title: 'AI-Powered XR Development',
				body: 'Explore AI-enabled interactions, intelligent assistants and adaptive virtual experiences. We select appropriate AI capabilities based on the use case, available data and privacy requirements.',
			},
		],
	},
	solutions: {
		eyebrow: 'Business Solutions',
		title: 'Enterprise XR Solutions for Real-World Applications',
		lead: 'Make immersive technology useful across customer journeys, operational workflows and learning environments. Explore the use cases that align with your organization.',
		items: [
			{
				icon: 'training' as const,
				title: 'XR Training & Simulation',
				body: 'Rehearse procedures, equipment operation and decision-making through repeatable, interactive scenarios.',
			},
			{
				icon: 'visualization' as const,
				title: 'XR Product Visualization',
				body: 'Present products in 3D and let users explore features, configurations and scale before making decisions.',
			},
			{
				icon: 'assistance' as const,
				title: 'XR Remote Assistance',
				body: 'Explore visual guidance and contextual instructions for maintenance, technical support and remote collaboration.',
			},
			{
				icon: 'showroom' as const,
				title: 'Virtual Showrooms & Tours',
				body: 'Give customers interactive access to products, properties and exhibition spaces across compatible devices.',
			},
			{
				icon: 'gaming' as const,
				title: 'XR Gaming & Entertainment',
				body: 'Create immersive games, interactive narratives and engaging digital experiences.',
			},
			{
				icon: 'collaboration' as const,
				title: 'XR Collaboration Solutions',
				body: 'Explore shared virtual spaces for design reviews, distributed teamwork and visual communication.',
			},
			{
				icon: 'brand' as const,
				title: 'Immersive Brand Experiences',
				body: 'Build interactive campaigns and experiential activations that invite audiences to participate.',
			},
			{
				icon: 'twins' as const,
				title: 'XR-Enabled Digital Twins',
				body: 'Use immersive interfaces to explore digital representations of physical assets. Live data and simulation integration depend on project scope.',
			},
		],
	},
	comparison: {
		eyebrow: 'Technology Comparison',
		title: 'AR vs. VR vs. MR: Which XR Technology Is Right for Your Business?',
		lead: 'Choose a technology based on where users interact, what they need to see and the level of immersion required.',
		headers: ['Feature', 'Augmented Reality', 'Virtual Reality', 'Mixed Reality'] as const,
		rows: [
			{
				feature: 'Environment',
				ar: 'Physical world with digital overlays',
				vr: 'Fully simulated environment',
				mr: 'Physical and digitally blended environment',
			},
			{
				feature: 'Interaction',
				ar: 'Digital information or objects overlaid on reality',
				vr: 'Immersive interaction with virtual objects',
				mr: 'Spatially anchored digital content and real-world interaction',
			},
			{
				feature: 'Typical devices',
				ar: 'Compatible phones, tablets and AR glasses',
				vr: 'VR headsets',
				mr: 'Compatible mixed reality headsets',
			},
			{
				feature: 'Business use',
				ar: 'Product visualization, guidance, campaigns',
				vr: 'Training, simulation, virtual tours',
				mr: 'Spatial design, guided workflows, collaboration',
			},
		],
	},
	midCta: {
		title: 'Turn Your XR Idea Into an Immersive Experience',
		body: 'Share your business objective and we can explore the technology, scope and development approach that best fits your project.',
		href: '/contact/',
		label: 'Schedule a Consultation',
	},
	industries: {
		eyebrow: 'Industries',
		title: 'Industries We Serve With Extended Reality Solutions',
		lead: 'XR can support learning, visualization and interactive experiences across sectors. The right approach depends on each industry’s users, requirements and environment.',
		items: [
			{ icon: 'healthcare' as const, title: 'Healthcare & Medical', body: 'Medical visualization, procedural education and simulation-based learning.' },
			{ icon: 'manufacturing' as const, title: 'Manufacturing & Industrial', body: 'Equipment familiarization, safety practice and operational visualization.' },
			{ icon: 'retail' as const, title: 'E-commerce & Retail', body: 'Interactive product previews, virtual showrooms and shopping experiences.' },
			{ icon: 'education' as const, title: 'Education & Training', body: 'Experiential learning, virtual classrooms and interactive demonstrations.' },
			{ icon: 'realestate' as const, title: 'Real Estate & Architecture', body: 'Property walkthroughs, architectural visualization and design reviews.' },
			{ icon: 'automotive' as const, title: 'Automotive', body: 'Virtual vehicle exploration, design visualization and training scenarios.' },
			{ icon: 'gaming' as const, title: 'Gaming & Entertainment', body: 'Immersive worlds, interactive narratives and gameplay.' },
			{ icon: 'marketing' as const, title: 'Marketing & Advertising', body: 'Branded AR filters, virtual activations and interactive campaigns.' },
			{ icon: 'travel' as const, title: 'Travel & Hospitality', body: 'Virtual destination previews and immersive property tours.' },
			{ icon: 'logistics' as const, title: 'Logistics & Warehousing', body: 'Potential applications include onboarding, workflows and equipment practice.' },
			{ icon: 'engineering' as const, title: 'Engineering & Construction', body: 'Potential applications include spatial planning and collaborative model reviews.' },
			{ icon: 'enterprise' as const, title: 'Enterprise & Corporate', body: 'Employee orientation, skills development and interactive presentations.' },
		],
	},
	process: {
		eyebrow: 'Development Process',
		title: 'Our Extended Reality Development Process',
		lead: 'A structured approach from initial discovery to launch keeps the project aligned with business goals and practical technical requirements.',
		steps: [
			{
				title: 'Discovery & XR Strategy',
				body: 'Define the business objective, audience, success criteria and technical feasibility.',
				icon: '/stack/vision-pro/process/01-discovery.png',
			},
			{
				title: 'Concept & Experience Design',
				body: 'Map user journeys, storyboards, spatial interactions and content requirements.',
				icon: '/stack/vision-pro/process/02-strategy.png',
			},
			{
				title: 'Prototyping & Validation',
				body: 'Build an interactive prototype to test the concept, comfort and core functionality.',
				icon: '/stack/vision-pro/process/03-spatial-ux.png',
			},
			{
				title: 'XR Application Development',
				body: 'Develop the application, 3D assets, interaction logic and agreed integrations.',
				icon: '/stack/vision-pro/process/04-prototyping.png',
			},
			{
				title: 'Testing & Optimization',
				body: 'Check usability, performance, tracking, device compatibility and stability.',
				icon: '/stack/vision-pro/process/05-testing.png',
			},
			{
				title: 'Deployment & Launch',
				body: 'Prepare builds, documentation and deployment to agreed devices or platforms.',
				icon: '/stack/vision-pro/process/06-deployment.png',
			},
			{
				title: 'Maintenance & Support',
				body: 'Plan updates, fixes, content changes and technical support under the agreed scope.',
				icon: '/stack/vision-pro/process/07-maintenance.png',
			},
		],
		cta: { href: '/contact/', label: 'Discuss Your XR Project' },
	},
	stack: {
		eyebrow: 'Technology Stack',
		title: 'Technologies and Platforms We Use',
		lead: 'We select tools based on performance, interaction, compatibility and deployment requirements.',
		groups: [
			{
				name: 'Development engines',
				body: 'Unity · Unreal Engine',
				icons: ['/stack/galaxy-xr/unity.png', '/stack/galaxy-xr/unreal.png'],
			},
			{
				name: 'XR standards & frameworks',
				body: 'OpenXR · WebXR · ARKit · ARCore',
				icons: [
					'/stack/galaxy-xr/openxr.png',
					'/stack/galaxy-xr/webxr.png',
					'/stack/vision-pro/arkit.png',
					'/stack/galaxy-xr/arcore.png',
				],
			},
			{
				name: '3D & web technologies',
				body: '3ds Max · Three.js',
				icons: ['/stack/galaxy-xr/blender.png', '/stack/galaxy-xr/webxr.png'],
			},
			{
				name: 'Device ecosystems',
				body: 'Meta Quest · HTC VIVE · Pico',
				icons: ['/stack/galaxy-xr/meta-xr.png', '/stack/galaxy-xr/openxr.png'],
			},
		],
	},
	work: {
		eyebrow: 'Portfolio',
		title: 'Explore Our Extended Reality Development Projects',
		lead: 'Examples of Euphoria XR’s published work across medical education, workplace safety and immersive brand engagement.',
		items: [
			{
				title: 'Inner Voyage VR Heart Simulation',
				meta: 'Healthcare XR',
				body: 'Immersive heart visualization for medical learning and training.',
				image: 'lab' as const,
				href: '/portfolio/',
			},
			{
				title: 'VR 360 Interactive Safety Training',
				meta: 'Enterprise XR',
				body: 'Interactive virtual reality training designed around workplace safety scenarios.',
				image: 'vr' as const,
				href: '/portfolio/',
			},
			{
				title: 'Total PARCO VR Experience',
				meta: 'Brand Experience',
				body: 'A branded virtual environment that brings interactive 3D experiences to event activations.',
				image: 'ridge' as const,
				href: '/portfolio/',
			},
		],
	},
	why: {
		eyebrow: 'Why Euphoria XR',
		title: 'Why Choose Euphoria XR as Your XR Development Partner?',
		lead: 'A practical XR partner balances immersive design, technical feasibility and collaborative delivery.',
		items: [
			{
				label: '01 / Design',
				title: 'Experience-Led Design',
				body: 'We start with the audience, interaction requirements and the purpose of the immersive experience.',
			},
			{
				label: '02 / Technology',
				title: 'Custom Technical Solutions',
				body: 'We combine immersive design and development across relevant technologies and target platforms.',
			},
			{
				label: '03 / Delivery',
				title: 'Practical Development Approach',
				body: 'We consider feasibility, performance, usability and deployment throughout the project.',
			},
			{
				label: '04 / Partnership',
				title: 'Collaborative Delivery',
				body: 'We work with stakeholders from concept planning to agreed launch and support activities.',
			},
		],
	},
	engagement: {
		eyebrow: 'Project Engagement',
		title: 'Hire Extended Reality Developers for Your Next Project',
		lead: 'Discuss your requirements, timelines and technical needs with our team to determine a suitable project engagement.',
		items: [
			{
				label: 'Ongoing',
				title: 'Dedicated XR Team',
				body: 'For ongoing development needs.',
			},
			{
				label: 'Scoped',
				title: 'Project-Based Development',
				body: 'For a defined project scope.',
			},
			{
				label: 'Targeted',
				title: 'Flexible Technical Support',
				body: 'For targeted development needs.',
			},
		],
		cta: { href: '/contact/', label: 'Talk to Our Team' },
	},
	related: {
		title: 'Explore Related Immersive Development Services',
		items: [
			{
				href: '/services/augmented-reality-development-company/',
				label: 'Augmented Reality Development',
				body: 'Interactive digital content for the physical world.',
			},
			{
				href: '/services/virtual-reality-development-company/',
				label: 'Virtual Reality Development',
				body: 'Immersive environments for training, simulation and entertainment.',
			},
			{
				href: '/services/apple-vision-pro-development/',
				label: 'Apple Vision Pro Development',
				body: 'Spatial computing and native visionOS experiences.',
			},
			{
				href: '/services/meta-quest-development/',
				label: 'Meta Quest Development',
				body: 'Standalone VR, gaming and mixed reality applications.',
			},
		],
	},
	faqs: {
		eyebrow: 'Answers',
		title: 'Answers to Your XR Development Questions',
		lead: 'Practical answers for businesses evaluating extended reality development.',
		items: [
			{
				question: 'What is extended reality (XR) development?',
				answer:
					'XR development is the design and engineering of immersive applications that use augmented reality, virtual reality or mixed reality to connect people with digital environments and experiences.',
			},
			{
				question: 'What is the difference between AR, VR, MR and XR?',
				answer:
					'XR is the umbrella term. AR adds digital content to real surroundings, VR creates a fully virtual environment, and MR allows digital elements to interact with the physical environment.',
			},
			{
				question: 'What does an XR development company do?',
				answer:
					'An XR development company designs and builds immersive software, 3D assets, interaction systems and device-specific applications, with testing and deployment based on project requirements.',
			},
			{
				question: 'How much does XR development cost?',
				answer:
					'The cost depends on application complexity, 3D content, target devices, integrations, testing and deployment. A defined project scope is needed for a reliable estimate.',
			},
			{
				question: 'How long does XR application development take?',
				answer:
					'Timelines vary according to the experience, technical requirements, asset production, platform support and validation. A prototype generally has a smaller scope than a production-ready solution.',
			},
			{
				question: 'Which industries use extended reality solutions?',
				answer:
					'XR is used in healthcare education, manufacturing, retail, real estate, aviation, entertainment and workforce training, among other sectors.',
			},
			{
				question: 'Can XR applications integrate with existing systems?',
				answer:
					'Yes, when appropriate interfaces are available. Integrations may include APIs, learning management systems, content platforms or operational data, subject to feasibility and security requirements.',
			},
			{
				question: 'Which devices and platforms do you support?',
				answer:
					'The platform is selected during discovery. Options may include compatible mobile devices, browsers and headsets such as Meta Quest, HTC VIVE or other OpenXR-compatible devices.',
			},
			{
				question: 'Can you build AI-powered XR applications?',
				answer:
					'AI can enhance immersive experiences with intelligent interactions, contextual assistance and adaptive content. The appropriate implementation depends on requirements, data and evaluation.',
			},
			{
				question: 'Do you provide post-launch support?',
				answer:
					'Maintenance, updates and technical support can be included in the agreed project scope. Discuss your requirements during discovery.',
			},
		],
	},
	talk: {
		title: 'Let’s Build Your Next Extended Reality Experience',
		sub: 'Tell us what you want to create. From early-stage ideas to established enterprise projects, we can explore the right immersive experience, platforms and development scope for your business.',
		note: 'DISCOVERY · DESIGN · DEVELOPMENT',
	},
	/** Ready for services.ts once the public slug is confirmed. */
	pageMeta: {
		h1: 'Extended Reality (XR) Development Company',
		title: 'Extended Reality (XR) Development Company | Euphoria XR',
		description:
			"Build immersive digital experiences with Euphoria XR's extended reality development services, including custom AR, VR, MR, WebXR and enterprise XR solutions.",
		navLabel: 'Extended Reality development',
		serviceType: 'Extended Reality development',
		keywords: {
			primary: 'extended reality (xr) development company',
			secondary: [
				'xr development services',
				'custom xr application development',
				'enterprise xr solutions',
			],
		},
	},
};

export function isExtendedRealityPage(slug: string) {
	return Boolean(extendedRealityServiceSlug) && slug === extendedRealityServiceSlug;
}
