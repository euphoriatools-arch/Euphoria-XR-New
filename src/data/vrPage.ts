export type VrInsight = {
	index: string;
	title: string;
	body: string;
	source: string;
};

export type VrIndustry = {
	title: string;
	body: string;
	href?: string;
};

export type VrUseCase = {
	title: string;
	body: string;
	href: string;
	meta: string;
	image: 'vr' | 'ai' | 'ar' | 'city' | 'lab' | 'cosmos' | 'abstract' | 'ridge';
	imageAlt: string;
};

export type VrProcessStep = {
	title: string;
	body: string;
};

export const vrPageExtras = {
	servicesTitle: 'VR Development Services.',
	servicesLead:
		'EuphoriaXR provides custom VR development services for training, simulations, 360° video, and live events. We define the experience, develop immersive content, test hardware compatibility, and support deployment. We build solutions around your business goals, users, and real-world operating requirements.',
	insights: {
		label: 'Industry Insights',
		headline: 'Why Are Businesses Investing in Virtual Reality?',
		body: 'Virtual reality is moving beyond entertainment into workforce training, product visualization, and enterprise simulations. Industry research points to growing commercial applications, while studies on immersive learning highlight opportunities to improve training efficiency, engagement, and costs at scale.',
		items: [
			{
				index: '01',
				title: '27.5% Annual Market Growth',
				body: 'The global virtual reality market is projected to grow at a 27.5% CAGR from 2026 to 2033, reflecting expanding applications across industries.',
				source: 'Source: Grand View Research, 2026',
			},
			{
				index: '02',
				title: '56.9% Commercial Market Share',
				body: 'Commercial applications accounted for 56.9% of global VR market revenue in 2025, spanning product demonstrations, virtual showrooms, retail experiences, and other business applications.',
				source: 'Source: Grand View Research, 2026',
			},
			{
				index: '03',
				title: 'Up to 4× Faster Training',
				body: 'PwC found that employees completed VR soft-skills training up to four times faster than classroom training, or three times faster when headset onboarding was included.',
				source: 'Source: PwC VR Training Study, 2020',
			},
			{
				index: '04',
				title: '52% Lower Training Costs at Scale',
				body: "PwC's cost model estimated that VR soft-skills training could cost 52% less than classroom instruction when delivered to 3,000 learners.",
				source: 'Source: PwC VR Training Study, 2020',
			},
		] satisfies VrInsight[],
	},
	industriesLead:
		'Virtual reality helps organizations train teams, visualize environments, and engage customers through immersive experiences tailored to real industry challenges and specific business objectives.',
	industries: [
		{
			title: 'VR for Education',
			body: 'We develop immersive learning environments that help students explore complex subjects, practice skills, and engage with interactive educational content.',
			href: '/ar-vr-training-education/',
		},
		{
			title: 'VR for Healthcare',
			body: 'Our VR solutions support medical training, anatomy visualization, clinical simulations, and procedural learning within controlled virtual environments.',
			href: '/ar-vr-medical-healthcare/',
		},
		{
			title: 'VR for Advertising',
			body: 'We create immersive VR campaigns, interactive brand experiences, and product demonstrations that encourage audience engagement and participation.',
			href: '/ar-vr-media-and-marketing/',
		},
		{
			title: 'VR for Retail',
			body: 'We develop virtual showrooms, interactive product demonstrations, and shopping experiences that help customers explore products before purchasing.',
			href: '/ar-vr-fashion-retail/',
		},
		{
			title: 'VR for Government',
			body: 'Our team creates VR simulations for safety training, emergency response, operational planning, and scenario-based learning across government organizations.',
			href: '/ar-vr-development-solutions-for-government-agencies/',
		},
		{
			title: 'VR for Manufacturing',
			body: 'We build VR training simulations for equipment operation, workplace safety, assembly procedures, and industrial process visualization.',
		},
		{
			title: 'VR for Real Estate',
			body: 'We develop immersive property tours and architectural walkthroughs that help buyers explore spaces and visualize developments before construction.',
		},
		{
			title: 'VR for Tourism',
			body: 'Our immersive VR experiences let audiences explore destinations, cultural attractions, and hospitality environments through virtual tours and interactive storytelling.',
		},
		{
			title: 'VR for Creative Agencies',
			body: 'We partner with creative agencies to develop immersive brand activations, interactive VR campaigns, and custom experiences for clients.',
			href: '/ar-vr-development-solutions-for-creative-agencies/',
		},
	] satisfies VrIndustry[],
	useCases: {
		label: 'VR Development Use Cases',
		headline: 'VR Development Use Cases',
		lead: 'Explore how EuphoriaXR develops virtual reality experiences for real training, learning, and brand engagement needs. These four projects show different approaches to immersive development: interactive medical visualization, aviation training, gamified product experiences, and 360° educational content. Each application combines purposeful design with appropriate technology, helping users explore complex subjects, practice relevant tasks, or engage with content in a more intuitive way through VR headsets and immersive environments across different industries.',
		items: [
			{
				title: 'Inner Voyage VR: Medical Training',
				body: 'Inner Voyage VR uses an interactive Meta Quest 3 heart simulation to help medical learners explore cardiac anatomy and physiological changes. Guided learning scenarios make complex concepts easier to examine in an immersive environment designed for medical education and visualization.',
				href: '/vr-medical-training-and-heart-simulations/',
				meta: 'Medical training · VR',
				image: 'cosmos',
				imageAlt: 'Immersive medical VR training visualization',
			},
			{
				title: 'ICAO: VR Aircraft Training',
				body: 'Developed for ICAO, this immersive VR aircraft training application lets aviation professionals explore cabin components, visualize proposed modifications, and practice procedures in virtual environments. Interactive simulations support a more engaging way to understand aircraft systems and specific technical training scenarios.',
				href: 'https://euphoriaxr.com/work/virtual-reality-app-for-icao-aircraft-training/',
				meta: 'Aircraft training · VR',
				image: 'vr',
				imageAlt: 'Virtual reality aircraft cabin training experience',
			},
			{
				title: 'Total Parco: VR Brand Experience',
				body: "EuphoriaXR created a gamified virtual reality experience for Total Parco's Quartz Robo launch. Interactive challenges, immersive 3D environments, and product-focused activities invite participants to explore the brand in a hands-on format designed to support event engagement, active participation, and storytelling.",
				href: 'https://euphoriaxr.com/work/total-parco-virtual-reality-experience/',
				meta: 'Brand experience · VR',
				image: 'abstract',
				imageAlt: 'Gamified VR brand experience for an event activation',
			},
			{
				title: 'KSU Stanford: VR Learning Experience',
				body: 'The KSU Stanford VR learning experience combines immersive 360° educational videos with multilingual subtitles and interactive navigation. Learners can explore filmed sessions, move through content, and engage with professional development material in a more accessible, self-directed immersive virtual learning environment.',
				href: '/360-vr-training-experience-stanford-ksu/',
				meta: 'Learning experience · 360° VR',
				image: 'lab',
				imageAlt: '360 degree VR educational learning experience',
			},
		] satisfies VrUseCase[],
	},
	processTitle: "What's Our Process?",
	processLead: 'Our VR development process guides each project from discovery through final deployment.',
	processCta: { href: '/about/', label: 'Learn More About EuphoriaXR' },
	process: [
		{
			title: 'Project Discovery',
			body: 'We identify your objectives, target users, and core VR use cases. Our team reviews the required headsets, existing assets, and technical constraints before defining the project scope and delivery plan.',
		},
		{
			title: 'VR Experience Design and Prototyping',
			body: 'We map the experience, define navigation and interactions, and create early prototypes to test essential features. This gives your team a clear view of the user journey before full-scale 3D production and development begin.',
		},
		{
			title: 'VR Development',
			body: 'Our team develops immersive environments, 3D assets, and VR application functionality based on the approved design. We implement interactions, integrate required content, and refine the experience for its target hardware. Development stays focused on usability, performance, and the technical requirements established during planning.',
		},
		{
			title: 'VR Testing and Optimization',
			body: 'We test the application on target VR headsets, checking interaction accuracy, navigation, performance, and user comfort. Feedback guides refinements before we prepare the final build for deployment and use.',
		},
		{
			title: 'Deployment Support',
			body: 'We prepare the finished VR application for launch, including device configuration, distribution, user guidance, final installation checks, and project handover where required. After deployment, we can support updates, troubleshooting, and content changes as your needs evolve.',
		},
	] satisfies VrProcessStep[],
	clientsLead:
		'From training rooms to events, EuphoriaXR builds VR apps for real people, real devices, and real settings, not demos made to impress on screen.',
	talkSub: 'Partner with EuphoriaXR on virtual reality development.',
};

export const vrServiceSlug = 'services/virtual-reality-development-company';
