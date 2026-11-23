import type { Faq } from './types';

export const heroSlides = [
	{
		eyebrow: 'AR / VR / AI / WebXR / 3D',
		lines: [
			[{ text: 'Where Creative, Innovative Ideas' }],
			[{ text: 'Inspire Real and Virtual Worlds' }],
		],
		body: 'EuphoriaXR combines creative design, 3D production, and advanced technology to build custom AR, VR, and AI experiences for global brands and enterprises.',
		cta: 'Talk to an XR Expert',
		href: '/contact/',
	},
	{
		eyebrow: 'Virtual reality / Training / Simulation',
		lines: [
			[{ text: 'Make learning' }],
			[{ text: 'feel ' }, { text: 'real.', accent: true }],
		],
		body: 'From immersive training to interactive simulations, we turn complex ideas into experiences people can explore, remember, and use.',
		cta: 'Explore our capabilities',
		href: '#capabilities',
	},
	{
		eyebrow: 'Spatial computing / AI / Digital worlds',
		lines: [
			[{ text: 'Beyond the screen.' }],
			[{ text: 'Into possibility.', accent: true }],
		],
		body: 'We combine creative thinking and emerging technology to help ambitious teams build the next generation of digital experiences.',
		cta: 'Build with us',
		href: '/contact/',
	},
];

// TODO: Replace these illustrative projects with verified EuphoriaXR case studies.
export const featuredWork = [
	{
		meta: 'Brand experience · VR',
		title: 'The Next Horizon',
		body: 'An immersive brand experience for a global technology company.',
		detail:
			'An immersive brand experience built to invite audiences into a new world. Replace this concept entry with a verified EuphoriaXR case study, including the brief, role, technology, and outcome.',
		image: 'cosmos' as const,
		alt: 'Surreal cosmic landscape used as a stand-in for a VR brand experience',
	},
	{
		meta: 'Interactive installation · AI',
		title: 'Human + AI',
		body: 'An interactive installation exploring the future of human potential.',
		detail:
			'An interactive installation exploring how emerging intelligence can create new ways to connect with information, people, and spaces. Placeholder concept content until a verified case study is available.',
		image: 'ai' as const,
		alt: 'Abstract artificial intelligence visual used as a stand-in project image',
	},
	{
		meta: 'AR experience · Culture',
		title: 'Ancient Worlds',
		body: 'An AR experience bringing history to life through interactive storytelling.',
		detail:
			'An augmented-reality concept that layers stories and context over cultural places. Replace this illustrative description with the real project details before launch.',
		image: 'ar' as const,
		alt: 'Historic architecture used as a stand-in for a cultural AR experience',
	},
];

export const capabilities = [
	{ icon: '⌗', title: 'AR', body: 'Augmented reality experiences that bring digital content into the real world.', href: '/services/augmented-reality-development-company/' },
	{ icon: '⌑', title: 'VR', body: 'Fully immersive worlds for training, education, and engagement.', href: '/services/virtual-reality-development-company/' },
	{ icon: '◈', title: 'MR', body: 'Mixed reality apps that anchor digital systems inside physical spaces.', href: '/services/mixed-reality-development-company/' },
	{ icon: '✳', title: 'AI', body: 'Intelligent experiences that adapt, respond, and stay inside a clear job.', href: '/ai-development-company/' },
	{ icon: '◎', title: 'WebXR', body: 'Immersive experiences that run in the browser, including AR QR codes.', href: '/webar-development/' },
	{ icon: '◇', title: '3D', body: 'Photorealistic and stylized 3D for products, brands, and environments.', href: '/product-configurator/' },
];

export const homeProcess = [
	{ title: 'Discover', body: 'We write the user, the job, and the constraint before we pick a tool.' },
	{ title: 'Design', body: 'A prototype you can hold, wear, or click, reviewed against the real context.' },
	{ title: 'Build', body: 'Production in the devices and channels you will actually ship.' },
	{ title: 'Launch', body: 'Measurement, a handover, and the first revision while the work is live.' },
];

// TODO: Replace illustrative scenarios with verified client testimonials and names.
export const testimonials = [
	{
		title: 'A training lead',
		body: 'They needed welders to practice a procedure before anyone booked a live booth. The useful part was a score the instructor already recognized.',
	},
	{
		title: 'A brand producer',
		body: 'The poster had five seconds. The scan had to open in the browser and still show the film if the phone could not run the scene.',
	},
	{
		title: 'A product team',
		body: 'The chatbot was allowed to answer from the help center and had to stop, with the transcript, when the question was new.',
	},
];

export const clientReviewsIntro =
	'See how businesses use our AR and VR development expertise to improve training, explain complex products, and create engaging experiences.';

export const clientReviews = [
	{
		quote:
			"Our traditional training methods weren't connecting with our workforce, especially across different locations. EuphoriaXR developed a VR training experience that made learning more engaging and practical for our teams. It helped improve knowledge retention, reduce mistakes, and simplify the challenge of delivering consistent training across sites. Their approach gave us a more effective way to help employees learn and perform with confidence across our organization.",
		name: 'Anthony Phills',
		role: 'CEO, Unbreakable',
		photo: '/reviews/anthony-phills.webp',
		photoAlt: 'Anthony Phills',
		logo: '/reviews/unbreakable.webp',
		logoAlt: 'Unbreakable',
	},
	{
		quote:
			'Static images made it difficult for customers to understand our product and its features. EuphoriaXR helped us replace that confusion with an interactive augmented reality experience. Customers could explore the product in real time and see how everything worked. The result was clearer product demonstrations, stronger engagement, and better conversions. Their team made a complex product much easier to explain and experience for our customers.',
		name: 'Don Reyke',
		role: 'Founder & CEO, Dexio Protocol',
		photo: '/reviews/don-reyke.webp',
		photoAlt: 'Don Reyke',
		logo: '/reviews/dexi-logo.webp',
		logoAlt: 'Dexio Protocol',
	},
	{
		quote:
			'We needed a safer way to train employees on complex operational systems without exposing them to real-world risks. EuphoriaXR built an immersive simulation that allowed our teams to practice in a controlled environment. It helped build confidence, reduce training costs, and support more consistent performance across different locations. The experience gave our employees practical preparation before stepping into real operational situations with greater confidence.',
		name: 'Sierra Cook',
		role: 'Marketing Director, Harbinger',
		photo: '/reviews/sierra-cook.webp',
		photoAlt: 'Sierra Cook',
		logo: '/reviews/harbinger-logo.webp',
		logoAlt: 'Harbinger',
	},
	{
		quote:
			"Our digital experiences weren't creating the kind of customer engagement we wanted. Working with EuphoriaXR changed that. Their team developed an immersive XR solution that made our interactions more engaging and memorable. They understood what we wanted to communicate and translated it into an experience that felt polished, practical, and scalable. It helped us strengthen our brand presence in a competitive market. That mattered enormously.",
		name: 'Trevor Simms',
		role: 'CEO, Poke',
		photo: '/reviews/trevor-simms.webp',
		photoAlt: 'Trevor Simms',
		logo: '/reviews/poke-logo.webp',
		logoAlt: 'Poke',
	},
];

export const homeFaqs: Faq[] = [
	{
		question: 'What AR, VR, and AI development services does EuphoriaXR offer?',
		answer:
			'EuphoriaXR develops custom augmented reality, virtual reality, AI, WebAR, and spatial computing solutions. Our capabilities include immersive training, interactive product visualization, 3D configurators, virtual simulations, and branded experiences for businesses across industries.',
	},
	{
		question: 'Why choose EuphoriaXR as your AR & VR development company?',
		answer:
			'Founded in 2016, EuphoriaXR combines creative design, 3D production, and software engineering to deliver custom immersive experiences. We work with enterprises, agencies, and brands, supporting projects from initial concept through development, deployment, and ongoing maintenance.',
	},
	{
		question: 'How much does AR and VR application development cost?',
		answer:
			'AR and VR development costs depend on project complexity, custom 3D content, target devices, integrations, and interactive features. A browser-based AR campaign and an enterprise VR training simulation have different requirements. We provide tailored estimates after reviewing your project scope.',
	},
	{
		question: 'How long does it take to develop an AR or VR application?',
		answer:
			'A focused AR or VR prototype may take several weeks, while complex enterprise applications can require several months. Timelines depend on design requirements, content production, integrations, and testing. We establish project milestones based on the agreed scope.',
	},
	{
		question: 'Can we start with an AR or VR prototype before full development?',
		answer:
			'Yes. We can develop a proof of concept or interactive XR prototype to test key features, validate technical feasibility, and gather stakeholder feedback. This helps identify potential challenges and refine the experience before investing in full-scale development.',
	},
	{
		question: 'Which devices and platforms do your AR and VR applications support?',
		answer:
			'We develop experiences for Meta Quest, Apple Vision Pro, HTC Vive, Pico, mobile devices, and compatible web browsers. Our WebAR development services also enable selected AR experiences without a dedicated app download. Platform recommendations depend on your users and technical requirements.',
	},
	{
		question: 'Can you integrate AR, VR, and AI solutions with existing enterprise systems?',
		answer:
			'Yes. Custom immersive applications can integrate with learning management systems, CRM platforms, databases, analytics tools, and enterprise APIs. We assess integration requirements during project planning to ensure the solution works with your existing technology infrastructure.',
	},
	{
		question: 'Who owns the source code and 3D assets after development?',
		answer:
			'Ownership of custom source code, 3D assets, designs, and project deliverables is established in the development agreement. We clarify licensing, intellectual property rights, and handover requirements before production, including any limitations involving third-party technologies.',
	},
	{
		question: 'Does EuphoriaXR provide AR and VR maintenance after launch?',
		answer:
			'Yes. Our post-launch support can include software updates, troubleshooting, performance optimization, device compatibility testing, and feature improvements. Maintenance requirements are defined according to the application, deployment environment, and ongoing business needs.',
	},
	{
		question: 'How do we start an AR or VR development project with EuphoriaXR?',
		answer:
			'Book a project consultation to discuss your idea, business objectives, target audience, and technical requirements. Our team will review your needs, explore suitable technologies, and outline possible development approaches and next steps.',
	},
];
