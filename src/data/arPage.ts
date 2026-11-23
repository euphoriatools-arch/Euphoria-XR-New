export type ArInsight = {
	index: string;
	title: string;
	body: string;
	source: string;
};

export type ArIndustry = {
	title: string;
	body: string;
	href?: string;
};

export type ArUseCase = {
	title: string;
	body: string;
	href: string;
	meta: string;
	image: 'vr' | 'ai' | 'ar' | 'city' | 'lab' | 'cosmos' | 'abstract' | 'ridge';
	imageAlt: string;
};

export type ArProcessStep = {
	title: string;
	body: string;
};

export type ArHeadset = {
	id: string;
	name: string;
	logoLabel: string;
	image: string;
	imageAlt: string;
	body: string;
};

export const arServiceSlug = 'services/augmented-reality-development-company';

export const arPageExtras = {
	servicesTitle: 'Augmented Reality Development Services.',
	servicesLead:
		'EuphoriaXR develops augmented reality solutions that bring interactive digital content into everyday environments. Our services include mobile applications, WebAR, product visualization, and branded experiences for businesses that want to engage customers, demonstrate products, and connect physical spaces with digital information.',
	heroLines: ['Augmented Reality', 'Development Company'] as const,
	insights: {
		label: 'Industry Insights',
		headline: 'Why Is Augmented Reality Gaining Business Attention?',
		body: 'Augmented reality is becoming an established part of digital commerce, marketing, and specialized professional applications. Market forecasts point to continued growth, while retail data and academic studies show its potential to boost product engagement and support real-world learning. The following findings highlight where AR is creating measurable value.',
		items: [
			{
				index: '01',
				title: '$120.2B to $1.05T by 2033',
				body: 'The global augmented reality market was valued at $120.2 billion in 2025 and is projected to reach approximately $1.05 trillion by 2033.',
				source: 'Source: Grand View Research, 2026',
			},
			{
				index: '02',
				title: 'Up to 94% Higher Conversion Rates',
				body: 'Shopify reports that products featuring AR or 3D content have achieved conversion rates up to 94% higher than comparable listings without interactive visuals.',
				source: 'Source: Shopify, 2026',
			},
			{
				index: '03',
				title: '85% of Mobile AR Users Access Social AR',
				body: 'EMARKETER estimated that 85% of US mobile AR users accessed AR through social platforms, highlighting the importance of filters and camera-based experiences.',
				source: 'Source: EMARKETER, May 2024 forecast',
			},
			{
				index: '04',
				title: '9 of 11 Studies Reported Technical Improvements',
				body: 'A 2026 systematic review of augmented reality in surgical training found that nine of eleven studies reported improvements in at least one objective technical performance measure.',
				source: 'Source: JMIR Medical Education, 2026',
			},
		] satisfies ArInsight[],
	},
	industriesTitle: 'AR Industry Applications',
	industriesLead:
		'Augmented reality helps businesses connect digital content with physical products, places, and everyday activities. From interactive shopping to on-site guidance, our AR solutions support practical applications across industries.',
	industries: [
		{
			title: 'AR for Education',
			body: 'We develop AR learning applications that help students examine 3D models, explore scientific concepts, and interact with educational content in real-world settings.',
			href: '/ar-vr-training-education/',
		},
		{
			title: 'AR for Healthcare',
			body: 'Our AR solutions support medical education, anatomical visualization, and healthcare demonstrations by displaying interactive 3D information alongside real-world objects and environments.',
			href: '/ar-vr-medical-healthcare/',
		},
		{
			title: 'AR for Advertising',
			body: 'We create interactive AR advertising experiences that transform posters, product packaging, and promotional materials into engaging campaigns with digital animations and branded interactions.',
			href: '/ar-vr-media-and-marketing/',
		},
		{
			title: 'AR for Retail',
			body: 'We develop AR shopping experiences that let customers preview furniture, virtually try on products, compare variations, and explore items before purchasing.',
			href: '/ar-vr-fashion-retail/',
		},
		{
			title: 'AR for Real Estate',
			body: 'Our AR applications help property buyers visualize proposed buildings, explore interior layouts, and understand architectural designs within existing physical surroundings.',
		},
		{
			title: 'AR for Manufacturing',
			body: 'We build AR applications that display equipment information, assembly instructions, and maintenance guidance directly alongside machinery and industrial components.',
		},
		{
			title: 'AR for Automotive',
			body: 'We create AR experiences that let customers visualize vehicles, explore interior features, customize configurations, and examine automotive components through interactive 3D models.',
		},
		{
			title: 'AR for Tourism',
			body: 'Our AR applications enrich visitor experiences with historical reconstructions, location-based storytelling, and interactive information at landmarks, museums, and cultural attractions.',
		},
		{
			title: 'AR for Architecture & Construction',
			body: 'We develop AR visualization solutions that help project teams view proposed structures, examine building components, and compare digital designs with physical construction sites.',
		},
		{
			title: 'AR for Events & Exhibitions',
			body: 'We create AR activations that transform exhibition booths, event displays, and physical installations into interactive experiences featuring digital products, animations, and branded content.',
		},
		{
			title: 'AR for Government',
			body: 'Our AR solutions support public information campaigns, urban planning visualization, cultural preservation, and interactive guidance across government facilities and public spaces.',
			href: '/ar-vr-development-solutions-for-government-agencies/',
		},
		{
			title: 'AR for Creative Agencies',
			body: 'We collaborate with creative agencies to develop AR campaigns, interactive brand storytelling, and custom digital experiences that bring original concepts into physical environments.',
			href: '/ar-vr-development-solutions-for-creative-agencies/',
		},
	] satisfies ArIndustry[],
	useCases: {
		headline: 'AR Development Use Cases',
		lead: 'Explore how EuphoriaXR uses augmented reality to solve practical challenges across retail, education, cultural heritage, and entertainment. These projects demonstrate different applications of AR technology, from browser-based product sizing to interactive experiences connected to real-world locations. Each project combines custom development with a specific user need, making digital interactions more accessible, informative, or engaging.',
		items: [
			{
				title: 'Harbinger: WebAR Glove Sizer',
				body: 'EuphoriaXR developed a WebAR hand-measurement tool for Harbinger to help online shoppers find the right workout glove size. The browser-based experience uses a smartphone to measure hands, making size selection easier without requiring customers to download a separate application.',
				href: '/portfolio/',
				meta: 'WebAR · Product sizing',
				image: 'ar',
				imageAlt: 'WebAR glove sizing experience on a smartphone',
			},
			{
				title: 'Trail Explorer: AR Education Application',
				body: 'Created for the Central Texas Regional Mobility Authority, Trail Explorer uses mobile augmented reality to introduce visitors to local wildlife, the Edwards Aquifer, and environmental conservation. Interactive content connects educational information with the surrounding landscape, encouraging visitors to discover the area\'s natural features.',
				href: '/portfolio/',
				meta: 'Education · Location AR',
				image: 'ridge',
				imageAlt: 'Location-based AR education experience outdoors',
			},
			{
				title: 'Unbreakable AR: Black History Exhibition',
				body: 'EuphoriaXR developed an augmented reality exhibition that presents important moments in Black history through interactive storytelling. Visitors encounter historical narratives and digital recreations that bring overlooked experiences into focus, creating opportunities for education, reflection, and deeper engagement with the exhibition.',
				href: '/portfolio/',
				meta: 'Exhibition · Cultural AR',
				image: 'city',
				imageAlt: 'Augmented reality exhibition storytelling experience',
			},
			{
				title: 'DexiHunter: Location-Based AR Gaming',
				body: 'DexiHunter combines augmented reality gaming with Web3 technology, allowing players to explore physical locations, discover digital bounties, and collect rewards through their mobile devices. The experience brings interactive gameplay into everyday surroundings while connecting digital assets, exploration, and social participation.',
				href: '/portfolio/',
				meta: 'Gaming · Location AR',
				image: 'cosmos',
				imageAlt: 'Location-based AR gaming experience on mobile',
			},
		] satisfies ArUseCase[],
	},
	headsetsTitle: 'AR Platforms & Devices',
	headsetsIntro:
		'EuphoriaXR develops augmented reality experiences for mobile devices, web browsers, and compatible spatial hardware. We select technologies around how people will access, view, and interact with digital content in real-world settings.',
	headsets: [
		{
			id: 'arkit',
			name: 'Apple ARKit',
			logoLabel: '01. Apple ARKit',
			image: '/headsets/ar/arkit.webp',
			imageAlt: 'Tablet showing an Apple ARKit experience in a room',
			body: "Apple's AR framework supports interactive applications for iPhone and iPad, enabling realistic product placement, environmental tracking, and digital experiences that respond to physical surroundings.",
		},
		{
			id: 'arcore',
			name: 'Google ARCore',
			logoLabel: '02. Google ARCore',
			image: '/headsets/ar/arcore.webp',
			imageAlt: 'Hands interacting with an ARCore product model on a phone',
			body: 'ARCore enables augmented reality on supported Android devices, helping applications understand surfaces, estimate depth, and position interactive digital content within real-world environments.',
		},
		{
			id: 'quick-look',
			name: 'Apple AR Quick Look',
			logoLabel: '03. Apple AR Quick Look',
			image: '/headsets/ar/specs.webp',
			imageAlt: 'People using AR glasses for product preview experiences',
			body: 'Apple AR Quick Look lets customers view 3D products in their surroundings directly from supported Apple devices, making it useful for online shopping and product presentations.',
		},
		{
			id: 'scene-viewer',
			name: 'Google Scene Viewer',
			logoLabel: '04. Google Scene Viewer',
			image: '/headsets/ar/hololens.webp',
			imageAlt: 'Person using a headset to preview 3D models in space',
			body: 'Google Scene Viewer allows Android users to open interactive 3D product models from websites or applications and preview them in physical spaces on compatible devices.',
		},
		{
			id: 'webar',
			name: 'WebAR & WebXR',
			logoLabel: '05. WebAR & WebXR',
			image: '/headsets/ar/webxr.webp',
			imageAlt: 'Browser-based WebXR experience in a spatial environment',
			body: 'Browser-based AR technologies make interactive product previews, digital campaigns, and location-linked experiences accessible through websites without requiring a dedicated application download.',
		},
		{
			id: 'unity',
			name: 'Unity AR Foundation',
			logoLabel: '06. Unity AR Foundation',
			image: '/headsets/ar/unity.webp',
			imageAlt: 'Unity AR Foundation industrial maintenance interface on a tablet',
			body: 'Unity AR Foundation provides a shared development framework for creating interactive AR applications across supported mobile platforms, with features for tracking, surface detection, and spatial interactions.',
		},
		{
			id: 'vuforia',
			name: 'Vuforia Engine',
			logoLabel: '07. Vuforia Engine',
			image: '/headsets/ar/pico.webp',
			imageAlt: 'Person interacting with tracked AR content on a headset',
			body: 'Vuforia supports image and object recognition, allowing AR applications to respond to physical products, printed materials, and equipment through contextual digital information and interactive overlays.',
		},
		{
			id: 'lens-studio',
			name: 'Snapchat Lens Studio',
			logoLabel: '08. Snapchat Lens Studio',
			image: '/headsets/ar/lens-studio.webp',
			imageAlt: 'Phone showing a Snapchat Lens Studio AR filter',
			body: 'Lens Studio enables interactive camera effects, face filters, animated characters, and branded AR experiences designed for distribution through supported Snapchat and Spectacles experiences.',
		},
		{
			id: 'vision-pro',
			name: 'Apple Vision Pro',
			logoLabel: '09. Apple Vision Pro',
			image: '/headsets/ar/vision-pro.webp',
			imageAlt: 'Person using an Apple Vision Pro headset at a desk',
			body: 'Apple Vision Pro supports spatial applications that position interactive 3D content around users, creating opportunities for detailed product exploration, collaborative visualization, and spatial presentations.',
		},
		{
			id: 'galaxy-xr',
			name: 'Samsung Galaxy XR',
			logoLabel: '10. Samsung Galaxy XR',
			image: '/headsets/ar/meta.webp',
			imageAlt: 'Person wearing a spatial headset for Android XR apps',
			body: 'Powered by Android XR, Samsung Galaxy XR supports spatial applications that combine digital content with the surrounding environment through compatible hand, eye, and voice interactions.',
		},
		{
			id: 'xreal',
			name: 'XREAL AR Glasses',
			logoLabel: '11. XREAL AR Glasses',
			image: '/headsets/ar/xreal.webp',
			imageAlt: 'Person wearing XREAL AR glasses',
			body: 'XREAL glasses offer portable spatial displays for compatible devices, supporting large virtual screens, digital content viewing, and selected interactive experiences depending on the hardware model.',
		},
		{
			id: 'magic-leap',
			name: 'Magic Leap 2',
			logoLabel: '12. Magic Leap 2',
			image: '/headsets/ar/magic-leap.webp',
			imageAlt: 'Person wearing Magic Leap 2 AR glasses',
			body: 'Magic Leap 2 provides optical see-through augmented reality for professional environments, supporting spatial information, interactive visual overlays, and applications that connect digital content with physical surroundings.',
		},
	] satisfies ArHeadset[],
	processTitle: 'How We Work',
	processLead:
		'Our augmented reality development process brings together creative planning, 3D design, and technical development. We take each project from the initial idea to a working AR experience, with attention to real-world usability, device compatibility, and project requirements.',
	processCta: { href: '/about/', label: 'Learn More About EuphoriaXR' },
	process: [
		{
			title: 'Discovery & Project Planning',
			body: 'We begin by understanding your business objectives, intended audience, and the purpose of your AR application. Our team identifies essential features, target devices, and technical requirements. We also review where and how people will use the experience before establishing the project scope and development roadmap.',
		},
		{
			title: 'AR Experience Design & Prototyping',
			body: 'Our designers plan how users will discover, navigate, and interact with digital content in physical environments. We develop user flows, interface concepts, and early prototypes to evaluate spatial placement, camera interactions, and functionality. These prototypes help validate the experience before full development begins.',
		},
		{
			title: '3D Content Creation & AR Development',
			body: 'Our team creates and optimizes 3D models, animations, and interactive elements for the intended AR platform. Developers implement object tracking, surface detection, user interactions, and other required features. We also connect external systems where necessary, turning the approved concept into a functional application.',
		},
		{
			title: 'AR Testing & Optimization',
			body: 'We test the application on supported devices and in relevant real-world conditions. Our team evaluates tracking accuracy, lighting variations, object placement, loading times, and interaction performance. Identified issues are addressed through testing and refinement to improve the experience before its public release.',
		},
		{
			title: 'Deployment & Ongoing Support',
			body: 'We prepare the completed AR experience for distribution through the appropriate channels, including app stores, websites, or QR-code access. Our team assists with launch requirements, technical documentation, and handover. We also provide ongoing maintenance, compatibility updates, and content improvements when needed.',
		},
	] satisfies ArProcessStep[],
	clientsLead:
		'From retail shelves to public spaces, EuphoriaXR develops augmented reality experiences that help people explore products, discover stories, and interact with the world around them.',
	talkSub: 'Partner with EuphoriaXR on augmented reality development.',
	faqs: [
		{
			question: 'How much does it cost to develop a custom augmented reality application?',
			answer:
				'AR development costs depend on project complexity, 3D assets, tracking features, supported devices, and integrations. EuphoriaXR provides custom estimates based on your requirements and project scope.',
		},
		{
			question: 'Should my business choose WebAR or a native AR application?',
			answer:
				'Choose WebAR for quick browser access without downloads. Native AR applications are better for advanced interactions, deeper device integration, and offline functionality. The right choice depends on your audience and technical requirements.',
		},
		{
			question: 'How long does it take to launch a branded WebAR campaign?',
			answer:
				'A straightforward WebAR campaign may take several weeks. Projects requiring custom 3D assets, advanced tracking, multiple interactions, or integrations can take longer.',
		},
		{
			question: 'Can customers view our products in their actual size using AR?',
			answer:
				'Yes. AR product visualization can display accurately scaled 3D products in physical spaces. Placement accuracy depends on model dimensions, device tracking, and environmental conditions.',
		},
		{
			question: 'Can an AR product configurator connect with our existing product catalog?',
			answer:
				'Yes. AR configurators can integrate with compatible product databases and e-commerce systems through APIs, allowing customers to explore available colors, materials, configurations, and product information.',
		},
		{
			question: 'Can we add AR product previews to our existing Shopify or e-commerce website?',
			answer:
				'Yes. AR product previews can be integrated into Shopify and other compatible e-commerce platforms using optimized 3D models and supported technologies. Advanced configurations may require custom development.',
		},
		{
			question: 'How accurate are AR virtual try-on experiences?',
			answer:
				'Accuracy depends on tracking technology, product dimensions, 3D model quality, and device capabilities. Virtual try-on can provide realistic previews, but it may not guarantee exact physical fit.',
		},
		{
			question: 'Can users access our AR experience by scanning a QR code?',
			answer:
				'Yes. QR codes can open WebAR experiences directly in compatible mobile browsers, making them suitable for packaging, advertisements, retail displays, and events without requiring app downloads.',
		},
		{
			question: 'Can augmented reality work on both iPhones and Android devices?',
			answer:
				'Yes. EuphoriaXR develops AR experiences for compatible iOS and Android devices. Available features and performance depend on device capabilities, operating systems, and browser support.',
		},
		{
			question: 'Can our AR application work without an internet connection?',
			answer:
				'Yes. Native AR applications can support offline functionality when essential assets are stored locally. WebAR typically requires internet access for initial loading, while cloud-connected features need connectivity.',
		},
		{
			question: 'Can AR applications recognize our existing product packaging or printed materials?',
			answer:
				'Yes. Image-tracking AR can recognize suitable packaging, posters, brochures, and printed graphics to display linked 3D content, animations, or product information. Recognition quality depends on image features and environmental conditions.',
		},
		{
			question: 'Can we use our existing CAD files and 3D product models for AR development?',
			answer:
				'Yes. Existing CAD files and 3D models can often be reused after format conversion, geometry optimization, and material adjustments to meet AR performance and compatibility requirements.',
		},
		{
			question: 'Can AR applications show step-by-step instructions on physical equipment?',
			answer:
				'Yes. AR can overlay instructions, labels, and animated guidance onto equipment using appropriate tracking methods. Applications can support assembly, maintenance, inspections, and operational guidance.',
		},
		{
			question: 'Can AR glasses display live information from our enterprise systems?',
			answer:
				'Yes. Compatible AR glasses can display real-time information from connected enterprise systems through APIs. Functionality depends on hardware capabilities, connectivity, security requirements, and software integration.',
		},
		{
			question: 'Which AR glasses are suitable for industrial or enterprise applications?',
			answer:
				"The appropriate AR glasses depend on field of view, hands-free interaction, tracking accuracy, battery life, workplace conditions, and software compatibility. Hardware should be selected according to the application's requirements.",
		},
		{
			question: 'Can we create an AR experience that works across multiple physical locations?',
			answer:
				'Yes. Location-based AR can deliver site-specific content across museums, retail locations, tourist attractions, and public spaces using GPS, visual positioning, or other suitable tracking technologies.',
		},
		{
			question: 'Can AR be used to preview buildings before construction begins?',
			answer:
				'Yes. AR can display 3D architectural models within existing surroundings, helping stakeholders evaluate building placement, scale, and design concepts. Accurate positioning requires suitable tracking and alignment methods.',
		},
		{
			question: 'Can customers interact with multiple products inside one AR experience?',
			answer:
				'Yes. A single AR experience can feature multiple products, allowing customers to switch models, compare variations, customize features, and explore interactive 3D content.',
		},
		{
			question: 'Can branded AR filters be used across different social media platforms?',
			answer:
				"Platform support varies. Branded AR effects must be developed and published according to each platform's available tools and policies. WebAR can provide an alternative for broader browser-based access.",
		},
		{
			question: 'Can an AR experience collect leads or direct users to a purchase page?',
			answer:
				'Yes. AR experiences can include product links, inquiry forms, booking options, and purchase CTAs. Lead collection and analytics integrations depend on the platform and applicable privacy requirements.',
		},
		{
			question: 'Can we track how customers interact with our AR experience?',
			answer:
				'Yes. AR analytics can measure launches, engagement duration, product interactions, selections, and completed actions. Available metrics depend on the tracking setup and user consent requirements.',
		},
		{
			question: 'How can we measure the ROI of an augmented reality marketing campaign?',
			answer:
				'Measure performance against campaign objectives using metrics such as engagement, qualified leads, conversions, and customer acquisition costs. Compare results with relevant benchmarks to assess business impact.',
		},
		{
			question: 'Can augmented reality applications integrate with our CRM or analytics tools?',
			answer:
				'Yes. AR applications can integrate with compatible CRM systems, analytics platforms, databases, and business software through APIs, subject to technical compatibility and security requirements.',
		},
		{
			question: 'How do you ensure AR content remains stable in different lighting conditions?',
			answer:
				'We test tracking, object placement, and interactions under relevant lighting and environmental conditions. Tracking adjustments, optimized assets, and user guidance help improve stability on supported devices.',
		},
		{
			question: 'Can we update AR product models or campaign content without rebuilding the entire application?',
			answer:
				'Yes. Applications with remotely managed content can support updates to 3D models, text, and campaign assets. Changes to core features or native functionality may require a new application release.',
		},
		{
			question: 'Can an AR application support multiple languages and international audiences?',
			answer:
				'Yes. AR applications can include multilingual interfaces, translated instructions, and region-specific content. Localization requirements should be established during planning to support different markets and audiences.',
		},
		{
			question: 'How do you protect customer data in AR applications that use cameras or location tracking?',
			answer:
				"Privacy controls depend on the application's functionality. These may include permission management, secure data transmission, limited data collection, and compliance with applicable privacy regulations.",
		},
		{
			question: 'Can EuphoriaXR take over or improve an AR application developed by another company?',
			answer:
				'Potentially, yes. EuphoriaXR can assess existing applications for improvements, compatibility updates, and new features. Feasibility depends on source code access, documentation, licensing, and technical architecture.',
		},
		{
			question: 'Will our company own the AR application, 3D assets, and source code after development?',
			answer:
				'Ownership depends on the project agreement. Custom code, 3D assets, and deliverables can be addressed in the contract, while third-party tools and licensed components remain subject to their terms.',
		},
		{
			question: 'Does EuphoriaXR provide maintenance and support after an AR application launches?',
			answer:
				'Yes. EuphoriaXR offers post-launch support based on project requirements, including bug fixes, performance improvements, content updates, device compatibility, and technical maintenance.',
		},
	],
};

export function showArHeadsetsFor(slug: string) {
	return slug === arServiceSlug || slug.toLowerCase().includes('augmented-reality-development');
}
