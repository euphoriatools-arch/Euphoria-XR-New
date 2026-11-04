import type { Faq } from './types';

export const heroSlides = [
	{
		eyebrow: 'AR / VR / AI / WebXR / 3D',
		lines: [[{ text: 'We turn' }], [{ text: 'ideas into' }], [{ text: 'immersive', accent: true }], [{ text: 'experiences.', accent: true }]],
		body: 'EuphoriaXR is a creative technology studio, building immersive experiences that blur the line between the physical and digital worlds.',
		cta: 'Explore our work',
		href: '#work',
	},
	{
		eyebrow: 'Virtual reality / Training / Simulation',
		lines: [[{ text: 'Make learning' }], [{ text: 'feel ' }, { text: 'real.', accent: true }]],
		body: 'From immersive training to interactive simulations, we turn complex ideas into experiences people can explore, remember, and use.',
		cta: 'Explore our capabilities',
		href: '#capabilities',
	},
	{
		eyebrow: 'Spatial computing / AI / Digital worlds',
		lines: [[{ text: 'Beyond the' }], [{ text: 'screen. Into' }], [{ text: 'possibility.', accent: true }]],
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
	{ icon: '✳', title: 'AI', body: 'Intelligent experiences that adapt, respond, and stay inside a clear job.', href: '/ai-development-company/' },
	{ icon: '◎', title: 'WebXR', body: 'Immersive experiences that run in the browser, including AR QR codes.', href: '/webar-development/' },
	{ icon: '◇', title: '3D', body: 'Photorealistic and stylized 3D for products, brands, and environments.', href: '/product-configurator/' },
	{ icon: '◉', title: 'Interactive', body: 'Touch, gesture, spatial, and conversation interfaces people can use.', href: '/ai-chatbot-development-services/' },
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

export const homeFaqs: Faq[] = [
	{
		question: 'What does EuphoriaXR build?',
		answer: 'AR, VR, AI, WebXR, and 3D experiences. Typical work includes training simulations, campaign WebAR, product configurators, chatbots, and agents that sit inside a product you already run.',
	},
	{
		question: 'Do you work with agencies or only direct clients?',
		answer: 'Both. Creative teams hire us as an immersive agency partner when they need a build studio. Product and training teams hire us directly.',
	},
	{
		question: 'Can a project start with a prototype?',
		answer: 'Yes. We would rather put a phone or a headset in the room than extend a slide. The prototype is scoped to answer one question, then we plan the production release.',
	},
	{
		question: 'Where do AI and immersive work meet?',
		answer: 'When an experience has to answer, adapt, or score. A training sim can record a procedure. A WebAR scene can explain a product from approved sources. We do not add a model unless it has a job.',
	},
	{
		question: 'How do we start?',
		answer: 'Use the contact form and name the service you have in mind. If you are unsure, say so. We will reply with the lightest credible way to begin.',
	},
];
