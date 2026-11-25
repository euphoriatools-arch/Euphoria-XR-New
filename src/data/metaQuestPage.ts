export const metaQuestServiceSlug = 'services/meta-quest-development';

export const metaQuestPage = {
	heroLines: ['Meta Quest', 'Development Company'] as const,
	summary:
		'Custom Meta Quest apps for VR training, mixed reality workflows, immersive games, and scalable enterprise deployment.',
	credibility: {
		eyebrow: 'XR Expertise & Business Credibility',
		headline: 'Custom Meta Quest Development Solutions',
		body: 'Meta Quest development delivers standalone VR and mixed reality experiences for training, simulation, product visualization, games, and enterprise programs. Start with the use case, then choose the right Quest device and interaction model.',
		counters: [
			{ value: '10+', label: 'Years in AR, VR, MR and Spatial Computing' },
			{ value: '300+', label: 'Successful projects launched' },
			{ value: '50+', label: 'Headsets, platforms and devices supported' },
			{ value: '100%', label: 'Client satisfaction focus' },
		],
	},
	services: {
		title: 'Our Meta Quest Development Services.',
		lead: 'Develop the right immersive experience for your audience, business objectives and target hardware.',
		items: [
			{
				title: 'Custom Meta Quest Apps',
				body: 'Create tailored standalone applications with intuitive interactions and business-specific workflows.',
			},
			{
				title: 'VR Game Development',
				body: 'Design interactive worlds, game mechanics, controller input and engaging gameplay loops.',
			},
			{
				title: 'Mixed Reality Development',
				body: 'Combine digital objects and physical surroundings using supported passthrough and spatial features.',
			},
			{
				title: 'Enterprise VR Solutions',
				body: 'Build experiences for onboarding, design reviews, collaboration and repeatable workflows.',
			},
			{
				title: 'VR Training & Simulation',
				body: 'Create safe, repeatable practice scenarios with feedback and assessment where appropriate.',
			},
			{
				title: 'Multiplayer VR Experiences',
				body: 'Plan shared sessions, networking, avatars and synchronized interactions for social experiences.',
			},
			{
				title: 'Cross-Platform XR Migration',
				body: 'Evaluate existing VR or PC projects and adapt input, assets and runtime requirements.',
			},
			{
				title: 'Immersive UI/UX Design',
				body: 'Design menus, locomotion, accessibility and comfortable interactions for headset users.',
			},
			{
				title: 'Deployment & Support',
				body: 'Prepare builds, testing, store submission and post-launch maintenance according to scope.',
			},
		],
	},
	work: {
		eyebrow: 'Experience',
		title: 'Explore Our Immersive Development Work',
		lead: 'Illustrated use cases show how XR can address real business needs. Explore Euphoria XR’s portfolio for verified project details.',
		items: [
			{
				title: 'Medical Simulation',
				meta: 'Healthcare · Simulation',
				body: 'Explore anatomy and practice non-clinical training scenarios in 3D.',
				image: 'lab' as const,
				href: '/portfolio/',
			},
			{
				title: 'Immersive Education',
				meta: 'Education · Learning',
				body: 'Visualize complex subjects through interactive models and guided learning.',
				image: 'ridge' as const,
				href: '/portfolio/',
			},
			{
				title: 'VR Safety Training',
				meta: 'Training · Safety',
				body: 'Practice equipment procedures in controlled virtual environments.',
				image: 'vr' as const,
				href: '/portfolio/',
			},
		],
	},
	platform: {
		eyebrow: 'Devices we develop for',
		title: 'Meta Quest Devices We Develop For',
		lead: 'Plan your product around the headset’s capabilities, target user needs and required features.',
		items: [
			{
				name: 'Meta Quest 3',
				body: 'Higher-resolution display and pancake optics; a useful option for detailed 3D experiences, visualization and precision-oriented workflows.',
				image: '/headsets/meta.webp',
				imageAlt: 'Concept illustration of Meta Quest 3',
			},
			{
				name: 'Meta Quest 3S',
				body: 'A more accessible entry point with full-color passthrough and the same Snapdragon XR2 Gen 2 chipset as Quest 3.',
				image: '/headsets/ar/meta.webp',
				imageAlt: 'Concept illustration of Meta Quest 3S',
			},
		],
		note: 'Both devices support tracked controllers, hand tracking and mixed reality. Actual feature availability depends on SDK versions, device configuration and the application. Existing Quest 2 or Quest Pro deployments require a separate compatibility review.',
	},
	advancedFeatures: {
		eyebrow: 'Platform Capabilities',
		title: 'Advanced Meta Quest Development Capabilities',
		lead: 'Choose the experience mode first, then define the interaction model, performance budget and data requirements.',
		concepts: [
			{
				title: 'Fully Immersive VR',
				body: 'Replace the real-world view with a designed virtual environment for games, training and guided experiences.',
				image: '/headsets/meta.webp',
				imageAlt: 'Illustrative concept of fully immersive VR on Meta Quest',
			},
			{
				title: 'Mixed Reality & Passthrough',
				body: 'Blend digital objects with the user’s physical surroundings on supported devices.',
				image: '/headsets/ar/meta.webp',
				imageAlt: 'Illustrative concept of mixed reality passthrough on Meta Quest',
			},
			{
				title: 'Shared Experiences',
				body: 'Plan multiplayer interactions, session synchronization and collaborative experiences.',
				image: '/headsets/ar/webxr.webp',
				imageAlt: 'Illustrative concept of shared multiplayer VR experiences',
			},
		],
		items: [
			{
				title: 'Hand & controller input',
				body: 'Choose natural gestures or precise tracked controls based on the task.',
			},
			{
				title: 'Spatial audio & haptics',
				body: 'Use directional sound and feedback to reinforce interactions.',
			},
			{
				title: 'Performance & comfort',
				body: 'Profile frame timing, optimize assets and offer comfort options.',
			},
		],
	},
	industries: {
		eyebrow: 'Business Use Cases',
		title: 'Meta Quest Solutions Across Industries',
		lead: 'Use immersive software when spatial practice, visualization or interactive participation adds meaningful value.',
		items: [
			{
				title: 'Healthcare & Medical',
				body: 'Anatomy education, procedural familiarization and non-clinical practice environments.',
			},
			{
				title: 'Education & Training',
				body: 'Interactive lessons, virtual labs and guided learning activities.',
			},
			{
				title: 'Manufacturing & Safety',
				body: 'Equipment familiarization, scenario-based training and process walkthroughs.',
			},
			{
				title: 'Real Estate & Architecture',
				body: 'Virtual tours, spatial layout reviews and interactive property visualization.',
			},
			{
				title: 'Retail & E-Commerce',
				body: 'Immersive showrooms, product demonstrations and configurators.',
			},
			{
				title: 'Gaming & Entertainment',
				body: 'Interactive worlds, virtual events and engaging narrative experiences.',
			},
		],
	},
	stack: {
		title: 'Our Meta Quest Technology Stack',
		lead: 'Select the engine, SDK, and content pipeline that fit performance, interactions, and store or enterprise deployment.',
		items: [
			{
				name: 'Meta XR SDK',
				body: 'Core Quest APIs for tracking, passthrough, interactions, and platform features.',
				icon: '/stack/meta-quest/meta-xr.png',
			},
			{
				name: 'Unity',
				body: 'Primary real-time 3D engine for Quest apps, training, and immersive products.',
				icon: '/stack/meta-quest/unity.png',
			},
			{
				name: 'Unreal Engine',
				body: 'High-fidelity visuals when cinematic quality and complex scenes matter.',
				icon: '/stack/meta-quest/unreal.png',
			},
			{
				name: 'OpenXR',
				body: 'Standards-based input and runtime paths for portable XR foundations.',
				icon: '/stack/meta-quest/openxr.png',
			},
			{
				name: 'C# / C++',
				body: 'Application logic, systems integration, and performance-critical features.',
				icon: '/stack/meta-quest/csharp.png',
			},
			{
				name: '3D Content Pipeline',
				body: 'Optimized models, materials, and animation for Quest performance budgets.',
				icon: '/stack/meta-quest/blender.png',
			},
			{
				name: 'Android / Quest OS',
				body: 'Device packaging, permissions, and platform-specific Quest requirements.',
				icon: '/stack/meta-quest/android.png',
			},
			{
				name: 'WebXR (when needed)',
				body: 'Browser-based XR companions or prototypes alongside native Quest builds.',
				icon: '/stack/meta-quest/webxr.png',
			},
			{
				name: 'Testing & Distribution',
				body: 'Device QA, Horizon Store publishing, and managed fleet deployment planning.',
				icon: '/stack/meta-quest/testing.png',
			},
		],
	},
	process: {
		eyebrow: 'Delivery Workflow',
		title: 'Our Meta Quest Development Process',
		lead: 'A clear project plan reduces avoidable rework and aligns the immersive experience with measurable business objectives.',
		steps: [
			{
				title: 'Discovery & Consultation',
				body: 'Identify the users, intended experience, constraints and success criteria.',
				icon: '/stack/meta-quest/process/01-discovery.png',
			},
			{
				title: 'Strategy & Technical Planning',
				body: 'Define target headsets, architecture, features, budget and milestones.',
				icon: '/stack/meta-quest/process/02-strategy.png',
			},
			{
				title: 'Immersive UI/UX Design',
				body: 'Prototype user journeys, input patterns, accessibility and locomotion.',
				icon: '/stack/meta-quest/process/03-spatial-ux.png',
			},
			{
				title: 'Prototyping & Development',
				body: 'Build core interactions, 3D content, application logic and integrations.',
				icon: '/stack/meta-quest/process/04-prototyping.png',
			},
			{
				title: 'Testing & Optimization',
				body: 'Test on target hardware, profile performance and validate comfort.',
				icon: '/stack/meta-quest/process/05-testing.png',
			},
			{
				title: 'Deployment & Launch',
				body: 'Prepare signed builds, store or approved enterprise distribution.',
				icon: '/stack/meta-quest/process/06-deployment.png',
			},
			{
				title: 'Maintenance & Support',
				body: 'Plan updates, compatibility checks, issue resolution and improvements.',
				icon: '/stack/meta-quest/process/07-maintenance.png',
			},
		],
		cta: { href: '/about/', label: 'Learn More About EuphoriaXR' },
	},
	cost: {
		eyebrow: 'Project Planning',
		title: 'How Much Does Meta Quest Development Cost?',
		lead: 'The cost of a Meta Quest project depends on its features, 3D assets, target devices, integrations, performance requirements and deployment plan. An accurate estimate starts with a defined scope.',
		tiers: [
			{
				label: 'Lower Complexity',
				title: 'Proof of Concept',
				body: 'Validate the core idea, a small environment or key interaction before committing to full production.',
			},
			{
				label: 'Moderate Complexity',
				title: 'Custom VR / MR App',
				body: 'Develop a defined user experience with original assets, custom functionality and testing.',
			},
			{
				label: 'Higher Complexity',
				title: 'Enterprise XR Platform',
				body: 'Plan complex simulations, integrations, security, analytics and deployment across teams.',
			},
		],
		timeline: {
			title: 'What affects your timeline?',
			body: 'A focused prototype typically has fewer dependencies than a production app. Multiplayer, high-fidelity 3D content, enterprise integration, extensive device testing and store review can add time. We recommend agreeing on milestones after discovery rather than relying on a generic delivery promise.',
		},
		cta: { href: '/contact/', label: 'Request a Custom Project Estimate' },
	},
	why: {
		eyebrow: 'Partnership',
		title: 'Why Choose Euphoria XR for Meta Quest Development?',
		lead: 'Work with an XR-focused development partner that can connect the business case with immersive design and engineering.',
		items: [
			{
				label: '01 / Experience',
				title: 'Relevant VR work',
				body: 'See our portfolio of immersive training and simulation work.',
			},
			{
				label: '02 / Business Fit',
				title: 'Goal-led planning',
				body: 'Define the user, workflow and business goals.',
			},
			{
				label: '03 / Design',
				title: 'Immersive UX',
				body: 'Consider interaction clarity, usability, comfort and accessibility from the start.',
			},
			{
				label: '04 / Engineering',
				title: 'Device-first architecture',
				body: 'Plan runtime, assets and input for target hardware.',
			},
			{
				label: '05 / Quality',
				title: 'Testing & optimization',
				body: 'Define hardware testing and performance acceptance criteria during discovery.',
			},
			{
				label: '06 / Support',
				title: 'Launch planning',
				body: 'Plan release requirements and ongoing maintenance.',
			},
		],
	},
	related: {
		title: 'Explore Our Extended Reality Development Services',
		items: [
			{
				href: '/services/augmented-reality-development-company/',
				label: 'Extended Reality Development',
				body: 'Explore AR, VR and MR services.',
			},
			{
				href: '/services/apple-vision-pro-development/',
				label: 'Apple Vision Pro Development',
				body: 'Explore visionOS and spatial computing.',
			},
			{
				href: '/services/samsung-galaxy-xr-development/',
				label: 'Samsung Galaxy XR Development',
				body: 'Explore Android XR development.',
			},
		],
	},
	insights: {
		title: 'Insights Into VR and Mixed Reality',
		lead: 'Market and platform context that often shapes Meta Quest decisions.',
		items: [
			{
				index: '01',
				title: 'Quest scales immersive programs',
				body: 'Organizations choose Quest when standalone VR/MR, headset price, and fleet logistics matter as much as visual fidelity.',
				source: 'Source: Enterprise XR deployment patterns',
			},
			{
				index: '02',
				title: 'Passthrough expands the use case',
				body: 'Color passthrough lets teams keep physical context—useful for guided work, demos, and hybrid training spaces.',
				source: 'Source: Mixed reality product design',
			},
			{
				index: '03',
				title: 'Comfort decides adoption',
				body: 'Session length, locomotion, and UI density drive whether learners finish modules—or take the headset off early.',
				source: 'Source: VR training delivery practice',
			},
			{
				index: '04',
				title: 'Pilot on real devices first',
				body: 'Early Quest prototypes reduce risk before large content and integration budgets commit.',
				source: 'Source: Immersive project delivery',
			},
		],
	},
	faqs: {
		eyebrow: 'Answers',
		title: 'Frequently Asked Questions',
		lead: 'Direct, practical answers to common development questions from business buyers and technical decision-makers.',
		items: [
			{
				question: 'What is Meta Quest development?',
				answer:
					'Meta Quest development is the creation of interactive virtual reality, mixed reality and spatial applications for Meta Quest headsets running Meta Horizon OS. It includes games, enterprise software, training simulations and immersive experiences.',
			},
			{
				question: 'How much does Meta Quest app development cost?',
				answer:
					'Costs vary with functionality, 3D content, device compatibility, integrations and testing. A proof of concept usually requires less effort than a production multiplayer or enterprise application; a scoped estimate is more useful than a fixed generic price.',
			},
			{
				question: 'How long does it take to develop a Meta Quest application?',
				answer:
					'The timeline depends on the project’s scope, assets, technical complexity, testing and release requirements. A simple prototype generally takes less time than a fully integrated application. Establish milestones during discovery.',
			},
			{
				question: 'What programming languages are used for Meta Quest development?',
				answer:
					'Unity projects commonly use C#, while Unreal Engine projects can use C++ and Blueprints. Native Android and web approaches may use other languages depending on the application architecture.',
			},
			{
				question: 'Is Unity or Unreal Engine better for Meta Quest development?',
				answer:
					'Neither engine is universally better. Unity and Unreal Engine both support Quest development; choose based on team expertise, visual requirements, platform integrations, performance constraints and the project’s content pipeline.',
			},
			{
				question: 'What is the difference between VR and mixed reality development?',
				answer:
					'VR creates a virtual environment that replaces the user’s real-world view. Mixed reality combines digital content with the physical surroundings, often through passthrough and spatial features.',
			},
			{
				question: 'Can Meta Quest be used for enterprise training?',
				answer:
					'Yes. A Quest application can provide interactive, repeatable simulations for onboarding, equipment familiarization and skills practice. The use case should be tested against real training objectives.',
			},
			{
				question: 'Can an existing VR application be migrated to Meta Quest?',
				answer:
					'Yes. Migration depends on the original engine and runtime. Adapt input, graphics, memory and platform APIs, then test on target hardware.',
			},
			{
				question: 'What is OpenXR in Meta Quest development?',
				answer:
					'OpenXR is an open standard that gives applications a common way to access XR runtimes and devices. It can reduce platform-specific code, but device-specific features may still require extensions or SDKs.',
			},
			{
				question: 'Can Meta Quest applications support multiplayer experiences?',
				answer:
					'Yes. Multiplayer VR apps can use networking and synchronized sessions. Plan latency, user count, security, moderation and backend requirements.',
			},
			{
				question: 'How are Meta Quest applications published and distributed?',
				answer:
					'Public releases need an app record, compliant build, metadata and Meta review. Private deployment requires a supported distribution channel. Approval is not guaranteed.',
			},
			{
				question: 'How do I choose a Meta Quest development company?',
				answer:
					'Look for relevant XR projects, technical expertise, clear scope, real-device testing and a maintenance plan. Ask for platform-specific evidence.',
			},
		],
	},
	talk: {
		title: "Let's Build Your Meta Quest Experience",
		sub: 'Partner with EuphoriaXR on Meta Quest development.',
	},
};

export function isMetaQuestPage(slug: string) {
	return slug === metaQuestServiceSlug;
}
