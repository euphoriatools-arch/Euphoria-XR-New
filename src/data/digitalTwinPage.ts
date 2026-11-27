export const digitalTwinServiceSlug = 'services/digital-twin-development';

export const digitalTwinPage = {
	heroEyebrow: 'Connected Assets / Simulation / Data',
	heroLines: ['Digital Twin', 'Development Company'] as const,
	summary:
		'Connect physical assets, operational data and virtual models to explore scenarios, understand performance and make informed decisions.',
	heroCta: { href: '/contact/', label: 'Discuss Your Digital Twin Project' },
	heroImage: '/digital-twin/hero.webp',
	capabilities: {
		eyebrow: 'Capabilities',
		items: [
			{ label: '3D Modeling', icon: '/digital-twin/icons/box.png' },
			{ label: 'Data Integration', icon: '/digital-twin/icons/data.png' },
			{ label: 'Simulation', icon: '/digital-twin/icons/gear.png' },
			{ label: 'Visualization', icon: '/digital-twin/icons/eye.png' },
		],
	},
	credibility: {
		eyebrow: 'What is a Digital Twin?',
		headline: 'A virtual representation with a real-world connection.',
		body: 'A digital twin connects a digital representation of a physical asset, system or process to relevant real-world data. Unlike a static 3D model, it can be updated to reflect changing conditions at a frequency suited to the use case.',
		bodyExact:
			'Euphoria XR brings immersive visualization experience to the development of connected digital experiences.',
		image: '/digital-twin/illustrations/physical-digital.png',
		counters: [
			{ value: '10+', label: 'Years in immersive 3D and XR delivery' },
			{ value: '300+', label: 'Successful projects launched' },
			{ value: '50+', label: 'Platforms and devices supported' },
			{ value: '100%', label: 'Client satisfaction focus' },
		],
	},
	services: {
		title: 'Digital Twin Development Services',
		lead: 'Plan the right mix of modeling, data integration, simulation and user interfaces around your business needs.',
		items: [
			{
				title: 'Digital Twin Consulting',
				body: 'Define the decisions your twin should support. Assess available data, asset scope, update frequency, technical feasibility and the roadmap from prototype to deployment.',
			},
			{
				title: 'Custom Digital Twin Development',
				body: 'Design a tailored software representation of assets, facilities or processes. Align the data model, visualization and workflows with the intended use case.',
			},
			{
				title: '3D Digital Twin Modeling',
				body: 'Translate CAD, BIM, scans or other asset references into interactive digital models. Optimize geometry and level of detail for the devices and decisions involved.',
			},
			{
				title: 'IoT & Data Integration',
				body: 'Plan connections to available sensors, APIs and operational systems. Map data to the twin, define refresh rates and handle missing or unreliable signals.',
			},
			{
				title: 'Digital Twin Simulation',
				body: 'Explore what-if scenarios with models of equipment, environments or processes. Validate assumptions against relevant operational or engineering data.',
			},
			{
				title: 'Analytics & Condition Monitoring',
				body: 'Design visual dashboards for asset status, trends and alerts. Predictive features depend on sufficient historical data and validated analytical models.',
			},
			{
				title: 'XR-Enabled Digital Twin Interfaces',
				body: 'Make complex assets easier to explore through web, desktop or immersive AR/VR experiences. Match spatial interactions to user roles and tasks.',
			},
			{
				title: 'Deployment & Lifecycle Support',
				body: 'Plan testing, access control, model updates and ongoing maintenance. Define an operating approach for keeping the twin useful as its real counterpart changes.',
			},
		],
	},
	architecture: {
		eyebrow: 'Architecture',
		title: 'How a Digital Twin Works',
		lead: 'A connected digital twin combines the right data, model fidelity and user interfaces. The architecture is illustrative and scoped per project.',
		note: 'Synchronization, validation and governance. Update frequency and fidelity depend on the business decision. Operational write-back requires separately designed safeguards and authorization.',
		steps: [
			{
				title: 'Physical system',
				body: 'Assets, equipment, facilities',
				icon: '/digital-twin/icons/box.png',
			},
			{
				title: 'Data connection',
				body: 'Sensors, APIs, records',
				icon: '/digital-twin/icons/link.png',
			},
			{
				title: 'Twin model',
				body: 'Identity, state, relationships',
				icon: '/digital-twin/icons/data.png',
			},
			{
				title: 'Insights & action',
				body: 'Dashboards, scenarios, XR',
				icon: '/digital-twin/icons/chart.png',
			},
		],
	},
	types: {
		eyebrow: 'Types of Digital Twins',
		title: 'Choose the right scope for your assets.',
		items: [
			{
				title: 'Component Twin',
				body: 'Represents an individual part, such as a motor or valve, to understand its condition and behavior.',
				icon: '/digital-twin/icons/bolt.png',
			},
			{
				title: 'Asset Twin',
				body: 'Combines relevant information about a complete machine, vehicle or piece of equipment.',
				icon: '/digital-twin/icons/asset.png',
			},
			{
				title: 'System Twin',
				body: 'Connects multiple assets to explore interactions within a production line, building or larger system.',
				icon: '/digital-twin/icons/link.png',
			},
			{
				title: 'Process Twin',
				body: 'Represents a workflow or operational process to test changes in scheduling, flow or resource use.',
				icon: '/digital-twin/icons/gear.png',
			},
		],
	},
	solutions: {
		eyebrow: 'Enterprise Solutions',
		title: 'Digital Twin Solutions for Real-World Operations',
		lead: 'Focus on decisions and measurable outcomes rather than just visual models. Bring asset context and operational information into a navigable experience.',
		items: [
			{
				title: 'Asset Monitoring',
				body: 'Bring condition, state and history into a single interface. Flag unusual readings and help operators investigate changes.',
				icon: '/digital-twin/icons/eye.png',
			},
			{
				title: 'Predictive Maintenance',
				body: 'Evaluate condition-based maintenance models using historical and live data. Validate accuracy before relying on alerts for critical decisions.',
				icon: '/digital-twin/icons/chart.png',
			},
			{
				title: 'Operational Simulation',
				body: 'Compare alternative layouts, schedules or operating assumptions virtually before committing to a real-world change.',
				icon: '/digital-twin/icons/gear.png',
			},
			{
				title: 'Facility Visualization',
				body: 'Explore equipment locations, building layouts and operational information in an interactive spatial interface.',
				icon: '/digital-twin/icons/building.png',
			},
			{
				title: 'Product Design & Validation',
				body: 'Compare engineering concepts and test modeled behavior against defined requirements before physical implementation.',
				icon: '/digital-twin/icons/check.png',
			},
			{
				title: 'Workforce Training',
				body: 'Use a representative 3D environment to help teams learn procedures, recognize equipment and practice simulated workflows.',
				icon: '/digital-twin/icons/users.png',
			},
		],
	},
	industries: {
		eyebrow: 'Industries',
		title: 'Industry-Specific Digital Twin Solutions',
		lead: 'Explore relevant use cases across asset-intensive operations, infrastructure, product engineering and complex environments.',
		items: [
			{
				title: 'Manufacturing & Industrial',
				body: 'Model production lines and equipment. Evaluate bottlenecks, maintenance plans and process changes.',
				icon: '/digital-twin/icons/factory.png',
				image: '/digital-twin/industries/factory.webp',
			},
			{
				title: 'Architecture & Real Estate',
				body: 'Connect facility or BIM information with operational context for building management and design reviews.',
				icon: '/digital-twin/icons/building.png',
				image: '/digital-twin/industries/facility.webp',
			},
			{
				title: 'Logistics & Warehousing',
				body: 'Represent material flow, layouts and asset movement to compare alternative scenarios and identify constraints.',
				icon: '/digital-twin/icons/box.png',
				image: '/digital-twin/industries/logistics.png',
			},
			{
				title: 'Energy & Utilities',
				body: 'Visualize asset condition and network relationships. Evaluate monitoring and maintenance opportunities where data permits.',
				icon: '/digital-twin/icons/bolt.png',
				image: '/digital-twin/industries/energy.webp',
			},
			{
				title: 'Automotive & Mobility',
				body: 'Represent vehicle subsystems, manufacturing equipment or service workflows for engineering and training.',
				icon: '/digital-twin/icons/car.png',
				image: '/digital-twin/industries/mobility.webp',
			},
			{
				title: 'Healthcare Facilities',
				body: 'Explore building operations, equipment locations and training scenarios while protecting sensitive information.',
				icon: '/digital-twin/icons/heart.png',
				image: '/digital-twin/industries/healthcare.webp',
			},
		],
	},
	process: {
		eyebrow: 'Development Process',
		title: 'Our Digital Twin Development Process',
		lead: 'Start with a decision and validated scope, then extend the twin as the business case and data maturity justify it.',
		steps: [
			{
				num: '01',
				title: 'Discovery & Feasibility',
				body: 'Define use case, KPIs, data access and target fidelity.',
				icon: '/digital-twin/icons/eye.png',
			},
			{
				num: '02',
				title: 'Model & Architecture',
				body: 'Map assets, relationships, data sources and interfaces.',
				icon: '/digital-twin/icons/code.png',
			},
			{
				num: '03',
				title: 'Prototype',
				body: 'Build a visual proof of concept and review with users.',
				icon: '/digital-twin/icons/box.png',
			},
			{
				num: '04',
				title: 'Integrate & Develop',
				body: 'Connect data and implement agreed behaviors and UI.',
				icon: '/digital-twin/icons/link.png',
			},
			{
				num: '05',
				title: 'Validate & Optimize',
				body: 'Test model accuracy, data quality, performance and usability.',
				icon: '/digital-twin/icons/shield.png',
			},
			{
				num: '06',
				title: 'Deploy & Maintain',
				body: 'Release the twin and define updates, monitoring and ownership.',
				icon: '/digital-twin/icons/cloud.png',
			},
		],
		cta: { href: '/contact/', label: 'Discuss Your Digital Twin Project' },
	},
	stack: {
		eyebrow: 'Technology & Platforms',
		title: 'Technology selected around your requirements',
		lead: 'Examples are candidate technologies, not claims of certification or existing integration. Confirm final selection during technical discovery.',
		groups: [
			{
				name: '3D & immersive visualization',
				body: 'Unity, Unreal Engine, WebXR',
				icon: '/digital-twin/icons/box.png',
			},
			{
				name: 'Asset inputs & data formats',
				body: 'CAD, BIM, IFC, 3D scans',
				icon: '/digital-twin/icons/building.png',
			},
			{
				name: 'Integration & connectivity',
				body: 'REST APIs, MQTT, OPC UA',
				icon: '/digital-twin/icons/link.png',
			},
			{
				name: 'Data, analytics & hosting',
				body: 'Time-series storage, edge/cloud, simulation models',
				icon: '/digital-twin/icons/cloud.png',
			},
		],
	},
	work: {
		eyebrow: 'Selected Work',
		title: 'Immersive Experience for Digital Twin Projects',
		lead: 'These published simulation and visualization projects demonstrate related expertise; they are not represented as connected digital twin implementations.',
		items: [
			{
				title: 'Inner Voyage VR Heart Simulation',
				meta: 'Healthcare · Simulation',
				body: 'Medical learning and training through immersive visualization. Relevant capability: 3D experience design and simulation interfaces.',
				image: 'lab' as const,
				href: '/portfolio/',
			},
			{
				title: 'VR 360 Interactive Safety Training',
				meta: 'Enterprise · Training',
				body: 'Interactive workplace safety experience. Relevant capability: scenario-based training and intuitive user interactions.',
				image: 'vr' as const,
				href: '/portfolio/',
			},
			{
				title: 'KSU Stanford VR Learning',
				meta: 'Education · Learning',
				body: 'Immersive learning with 360 video training. Relevant capability: designing accessible learning experiences and digital environments.',
				image: 'ridge' as const,
				href: '/portfolio/',
			},
		],
	},
	why: {
		eyebrow: 'Why Euphoria XR',
		title: 'A Partner Focused on Practical Outcomes',
		lead: 'Connect immersive design with technical discovery, validation and project-specific integration planning.',
		items: [
			{
				title: 'Outcome-Led Strategy',
				body: 'Start with the decision or workflow that matters, then agree the success criteria and minimum useful model.',
				icon: '/digital-twin/icons/chart.png',
			},
			{
				title: 'Immersive Visualization',
				body: 'Draw on our established 3D, AR and VR experience to make complex information easier to navigate.',
				icon: '/digital-twin/icons/eye.png',
			},
			{
				title: 'Fit-for-Purpose Architecture',
				body: 'Assess existing software, data quality and deployment needs before selecting technology or integrations.',
				icon: '/digital-twin/icons/bolt.png',
			},
			{
				title: 'Security & Data Governance',
				body: 'Plan least-privilege access, network boundaries, data ownership, logging and safe handling of sensitive information.',
				icon: '/digital-twin/icons/shield.png',
			},
			{
				title: 'Validation & Model Fidelity',
				body: 'Compare model behavior with observed data and clarify limitations, uncertainty and refresh frequency.',
				icon: '/digital-twin/icons/check.png',
			},
			{
				title: 'Lifecycle Planning',
				body: 'Define ownership of models, assets, software and data mappings so the solution can evolve with operations.',
				icon: '/digital-twin/icons/cloud.png',
			},
		],
	},
	engagement: {
		eyebrow: 'Engagement',
		title: 'Start with the right scope.',
		lead: 'Choose a starting point that matches your data readiness and business decision.',
		items: [
			{
				label: '01',
				title: 'Discovery workshop',
				body: 'Assess use case, data readiness and scope.',
			},
			{
				label: '02',
				title: 'Proof of concept',
				body: 'Validate a focused digital model and workflow.',
			},
			{
				label: '03',
				title: 'Production project',
				body: 'Agree integrations, validation and deployment.',
			},
		],
		cta: { href: '/contact/', label: 'Discuss Your Digital Twin Project' },
	},
	related: {
		title: 'Explore Related Immersive Development Services',
		items: [
			{
				href: '/services/extended-reality-development/',
				label: 'Extended Reality Development',
				body: 'Custom AR, VR, MR and WebXR solutions across platforms.',
			},
			{
				href: '/services/apple-vision-pro-development/',
				label: 'Apple Vision Pro Development',
				body: 'Spatial computing and native visionOS experiences.',
			},
			{
				href: '/services/ai-development-company/',
				label: 'AI Development',
				body: 'Intelligent systems that support analytics and adaptive experiences.',
			},
			{
				href: '/services/augmented-reality-development-company/',
				label: 'Augmented Reality Development',
				body: 'Interactive digital content for the physical world.',
			},
		],
	},
	faqs: {
		eyebrow: 'Answers',
		title: 'Digital Twin Development FAQs',
		lead: 'Direct answers to common technical and commercial questions.',
		items: [
			{
				question: 'What is digital twin development?',
				answer:
					'It is the process of designing a digital model of a real-world asset, system or process and connecting it to relevant data so its state can be maintained at a suitable refresh rate.',
			},
			{
				question: 'What is the difference between a digital twin and a 3D model?',
				answer:
					'A 3D model primarily represents geometry. A digital twin also connects to real-world information and updates to reflect relevant changes in the represented entity.',
			},
			{
				question: 'What types of digital twins can businesses build?',
				answer:
					'Common scopes include components, individual assets, connected systems and processes. The right scope depends on the decision and available data.',
			},
			{
				question: 'How much does digital twin development cost?',
				answer:
					'Cost depends on modeling detail, data access, integrations, simulation requirements, platform choices and validation. A discovery phase supports a meaningful estimate.',
			},
			{
				question: 'How long does it take to develop a digital twin?',
				answer:
					'A focused prototype and an integrated production twin have different timelines. Data readiness, scope, complexity and testing determine the schedule.',
			},
			{
				question: 'Can a digital twin integrate with IoT and enterprise systems?',
				answer:
					'Yes, where compatible interfaces and permissions exist. Connections may include sensors, APIs, enterprise systems and historical data sources, subject to technical assessment.',
			},
			{
				question: 'Do digital twins need real-time data?',
				answer:
					'Not always. Update intervals should match the use case, from periodic synchronization to low-latency streams when the decision requires them.',
			},
			{
				question: 'Can digital twins use AI and predictive analytics?',
				answer:
					'Yes, suitable data and validated models can support anomaly detection or condition forecasts. The reliability of predictions must be tested for the intended application.',
			},
			{
				question: 'Can digital twins work with AR or VR?',
				answer:
					'Yes. AR and VR can be optional visualization interfaces for a twin; they are not required for its underlying model or data synchronization.',
			},
			{
				question: 'How do you keep a digital twin accurate and secure?',
				answer:
					'Define validation criteria, monitor data quality, manage access, document model changes and review synchronization as assets and processes evolve.',
			},
		],
	},
	talk: {
		title: 'Ready to Build Your Digital Twin?',
		sub: 'Tell us about your assets, data sources, intended users and operational goals. We can discuss the right starting point for your project.',
	},
};

export function isDigitalTwinPage(slug: string) {
	return slug === digitalTwinServiceSlug;
}
