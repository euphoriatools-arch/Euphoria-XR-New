export type ProcessStep = {
	title: string;
	body: string;
	image: string;
	alt: string;
};

export const processIntro = {
	title: 'Our Development Process',
	body: 'From initial strategy to post-launch support, we combine creative thinking and technical expertise to turn complex ideas into practical immersive solutions.',
};

export const processSteps: ProcessStep[] = [
	{
		title: 'Discovery & Experience Mapping',
		body: 'We begin by understanding your business goals, audience, and technical requirements. Through AR and VR project planning, we define the experience, identify practical use cases, and map the user journey. This creates a clear project direction before any major design, production, or development work begins.',
		image: '/process/experience-mapping.webp',
		alt: 'Experience mapping for an immersive AR VR concept',
	},
	{
		title: 'Storyboarding & User Journey Design',
		body: 'Our creative team turns the concept into detailed visual storyboards that show key scenes, interactions, and user pathways. Using immersive experience design principles, we establish how people will navigate the application and engage with its content, helping stakeholders confidently review the experience before production starts.',
		image: '/process/storyboarding.webp',
		alt: 'Storyboarding an AR VR experience flow',
	},
	{
		title: 'Interactive Prototyping',
		body: 'We create interactive prototypes to test core features, navigation, and usability before full development. XR prototyping helps stakeholders experience early concepts, share actionable feedback, and validate early technical feasibility. This reduces uncertainty, exposes potential challenges, and gives the development team a more reliable starting point.',
		image: '/process/prototyping.webp',
		alt: 'Prototyping immersive interactions in VR',
	},
	{
		title: 'Design & Development',
		body: 'Our designers, 3D artists, and engineers build the approved concept into a working application. With virtual reality development, responsive interfaces, and real-time 3D assets, we create intuitive interactions while prioritizing visual quality, technical performance, and consistent reliability across the devices and platforms your project requires.',
		image: '/process/design-development.webp',
		alt: 'Design and development of a 3D immersive scene',
	},
	{
		title: 'Testing & Performance Optimization',
		body: 'We evaluate interactions, performance, usability, and device compatibility throughout every stage of production. AR application testing helps us identify tracking issues, optimize 3D assets, and refine the overall user experience. We address technical problems before launch so the application performs consistently in its intended environment.',
		image: '/process/testing-optimization.webp',
		alt: 'Testing and optimizing an AR VR build',
	},
	{
		title: 'Deployment & Team Training',
		body: 'We prepare the finished application for release, configure supported devices, and guide your internal team through essential operating workflows. Enterprise XR deployment includes practical setup and handover support, helping users adopt the solution confidently and ensuring the experience supports everyday business operations from day one.',
		image: '/process/deployment-training.webp',
		alt: 'Deployment and training for an immersive solution',
	},
	{
		title: 'Maintenance & Ongoing Support',
		body: 'After a successful launch, we help keep your application reliable, secure, and compatible with evolving platforms. AR/VR app maintenance can include technical troubleshooting, software updates, performance reviews, and ongoing improvements. Our support helps extend the useful life of your solution as your business needs change.',
		image: '/process/maintenance-support.webp',
		alt: 'Maintenance and support for XR systems',
	},
];
