export type MrInsight = {
	index: string;
	title: string;
	body: string;
	source: string;
};

export type MrIndustry = {
	title: string;
	body: string;
	href?: string;
};

export type MrUseCase = {
	title: string;
	body: string;
	href: string;
	meta: string;
	image: 'vr' | 'ai' | 'ar' | 'city' | 'lab' | 'cosmos' | 'abstract' | 'ridge';
	imageAlt: string;
};

export type MrProcessStep = {
	title: string;
	body: string;
};

export type MrHeadset = {
	id: string;
	name: string;
	logoLabel: string;
	image: string;
	imageAlt: string;
	body: string;
};

export const mrServiceSlug = 'services/mixed-reality-development-company';

export const mrPageExtras = {
	servicesTitle: 'Mixed Reality Development Services.',
	servicesLead:
		'Mixed reality app development requires a multidisciplinary team. EuphoriaXR helps enterprises define the use case, design spatial experiences, and ship production-ready MR applications across optical and passthrough headsets.',
	heroLines: ['Mixed Reality', 'Development Company'] as const,
	insights: {
		label: 'Industry Insights',
		headline: 'What Is Mixed Reality?',
		body: 'Mixed reality is a technology that blends digital and physical environments. Digital objects can understand and interact with physical space in real time—anchoring to surfaces, occluding behind real objects, and responding to environmental geometry.',
		items: [
			{
				index: '01',
				title: '3.75× Higher Emotional Connection',
				body: 'Mixed reality creates stronger emotional engagement compared to traditional 2D content, helping teams communicate complex systems with more clarity and impact.',
				source: 'Source: Immersive media engagement research',
			},
			{
				index: '02',
				title: '275% More Confidence Applying Skills',
				body: 'Learners using MR environments report higher confidence in applying skills compared to classic training formats that stay on slides or screens.',
				source: 'Source: Immersive learning studies',
			},
			{
				index: '03',
				title: '75% of Fortune 500 Use XR',
				body: 'More than three-quarters of Fortune 500 organizations are actively deploying XR technologies, including mixed reality, in production workflows.',
				source: 'Source: Enterprise XR adoption reports',
			},
			{
				index: '04',
				title: 'Up to 4× Faster Training Time',
				body: 'Immersive XR training programs enable learners to complete training up to four times faster than traditional classroom-based methods.',
				source: 'Source: Immersive training studies',
			},
		] satisfies MrInsight[],
	},
	industriesTitle: 'Mixed Reality Industry Applications',
	industriesLead:
		'Mixed reality development is deployed where spatial computing improves operational clarity, safety, and execution speed—when digital systems must understand physical environments and stay anchored during real-world tasks.',
	industries: [
		{
			title: 'MR for Manufacturing',
			body: 'Anchored digital work instructions, factory layout validation, and real-time process simulation within live production spaces.',
		},
		{
			title: 'MR for Automotive',
			body: 'Digital twins, collaborative design reviews, and spatial inspection across distributed engineering teams.',
		},
		{
			title: 'MR for Aerospace',
			body: 'System familiarization, immersive maintenance guidance, and visualization of complex assemblies.',
		},
		{
			title: 'MR for Architecture & Construction',
			body: 'BIM alignment, on-site model comparison, and early detection of planning conflicts at true scale.',
			href: '/ar-vr-training-education/',
		},
		{
			title: 'MR for Healthcare',
			body: 'Surgical planning, anatomical visualization, and immersive clinical preparation with spatially aligned 3D models.',
			href: '/ar-vr-medical-healthcare/',
		},
		{
			title: 'MR for Energy & Utilities',
			body: 'Asset inspection, operational overlays, and facility-level planning within live industrial environments.',
		},
		{
			title: 'MR for Education',
			body: 'Interactive spatial learning modules, immersive classroom simulations, and desk-scale model exploration.',
			href: '/ar-vr-training-education/',
		},
		{
			title: 'MR for Defense & Government',
			body: 'Mission rehearsal, infrastructure planning, and scenario simulation for complex equipment and environments.',
			href: '/ar-vr-development-solutions-for-government-agencies/',
		},
		{
			title: 'MR for Retail & Commerce',
			body: 'In-store product previews, true-scale placement, and immersive customer experiences in real spaces.',
			href: '/ar-vr-fashion-retail/',
		},
		{
			title: 'MR for Events & Media',
			body: 'Keynote augmentation, immersive brand activations, and spatially integrated storytelling in live venues.',
			href: '/ar-vr-media-and-marketing/',
		},
		{
			title: 'MR for Logistics',
			body: 'Spatial picking guidance, layout optimization, and material flow visualization in warehouses and hubs.',
		},
		{
			title: 'MR for Creative Agencies',
			body: 'High-fidelity experiential installations and immersive showcase environments for ambitious brand work.',
			href: '/ar-vr-development-solutions-for-creative-agencies/',
		},
	] satisfies MrIndustry[],
	useCases: {
		headline: 'Mixed Reality Use Cases',
		lead: 'Mixed reality blends physical and digital environments so users can interact with spatial content without leaving their real-world context. These applications show how anchoring, occlusion, and environment-aware interaction support training, visualization, collaboration, and operations.',
		items: [
			{
				title: 'Spatial Design Reviews',
				body: 'Anchor full-scale digital twins to physical rooms, allowing teams to walk around 1:1 models with proper occlusion and spatial alignment before production decisions.',
				href: '/portfolio/',
				meta: 'Design review · MR',
				image: 'lab',
				imageAlt: 'Spatial mixed reality design review with digital twins',
			},
			{
				title: 'Occlusion-Based Assembly Guidance',
				body: 'Overlay instructions that hide behind real components, ensuring digital steps match actual part geometry and placement on the factory floor.',
				href: '/portfolio/',
				meta: 'Industrial guidance · MR',
				image: 'abstract',
				imageAlt: 'Mixed reality assembly guidance overlaid on equipment',
			},
			{
				title: 'Spatial Remote Assistance',
				body: 'Allow remote experts to place annotations that stay locked to physical objects instead of floating in view—useful for field maintenance and distributed teams.',
				href: '/portfolio/',
				meta: 'Remote assist · MR',
				image: 'city',
				imageAlt: 'Remote mixed reality assistance with anchored annotations',
			},
			{
				title: 'Layout Validation in Construction',
				body: 'Overlay BIM models onto job sites with depth-aware alignment to detect clashes before materials are installed and crews commit to build decisions.',
				href: '/portfolio/',
				meta: 'Construction · MR',
				image: 'ridge',
				imageAlt: 'Mixed reality BIM overlay on a construction site',
			},
		] satisfies MrUseCase[],
	},
	headsetsTitle: 'Supported MR Headsets and Technologies',
	headsetsIntro:
		'EuphoriaXR builds mixed reality applications across optical and passthrough MR headsets widely adopted in enterprise environments.',
	headsets: [
		{
			id: 'vision-pro',
			name: 'Apple Vision Pro',
			logoLabel: '01. Apple Vision Pro',
			image: '/headsets/apple-vision-pro.webp',
			imageAlt: 'Person wearing an Apple Vision Pro headset',
			body: "Apple's mixed reality headset delivers high-resolution passthrough MR, advanced spatial tracking, and enterprise visualization capabilities.",
		},
		{
			id: 'galaxy-xr',
			name: 'Samsung Galaxy XR',
			logoLabel: '02. Samsung Galaxy XR',
			image: '/headsets/samsung-galaxy-xr.webp',
			imageAlt: 'Close-up of a Samsung Galaxy XR headset',
			body: "Samsung's mixed reality headset integrates mobile ecosystem compatibility with enterprise-grade MR performance for spatial applications.",
		},
		{
			id: 'meta-quest',
			name: 'Meta Quest',
			logoLabel: '03. Meta Quest',
			image: '/headsets/meta.webp',
			imageAlt: 'Person using a Meta Quest headset',
			body: 'Meta Quest 3, 3S, and Pro support mixed reality app development using high-quality color passthrough and room-scale tracking.',
		},
		{
			id: 'hololens',
			name: 'Microsoft HoloLens 2',
			logoLabel: '04. Microsoft HoloLens 2',
			image: '/headsets/ar/hololens.webp',
			imageAlt: 'Person wearing a Microsoft HoloLens mixed reality headset',
			body: 'HoloLens 2 provides optical see-through mixed reality technology ideal for industrial guidance, maintenance, and safety-critical workflows.',
		},
		{
			id: 'magic-leap',
			name: 'Magic Leap 2',
			logoLabel: '05. Magic Leap 2',
			image: '/headsets/ar/magic-leap.webp',
			imageAlt: 'Person wearing Magic Leap 2 AR glasses',
			body: 'Magic Leap 2 is optimized for enterprise mixed reality solutions requiring outdoor brightness and precision overlays.',
		},
		{
			id: 'varjo',
			name: 'Varjo XR-4',
			logoLabel: '06. Varjo XR-4',
			image: '/headsets/varjo.png',
			imageAlt: 'Person wearing a professional Varjo headset',
			body: 'Varjo XR-4 delivers ultra-high fidelity mixed reality experiences used for aerospace simulation and advanced digital twin visualization.',
		},
		{
			id: 'xreal',
			name: 'XREAL',
			logoLabel: '07. XREAL',
			image: '/headsets/ar/xreal.webp',
			imageAlt: 'Person wearing XREAL mixed reality glasses',
			body: 'XREAL mixed reality glasses provide lightweight spatial overlays suitable for portable visualization workflows.',
		},
		{
			id: 'pico',
			name: 'Pico XR',
			logoLabel: '08. Pico XR',
			image: '/headsets/pico.webp',
			imageAlt: 'Person using a Pico XR headset',
			body: 'Pico XR devices support mixed reality development for enterprise deployments in training and operational environments.',
		},
	] satisfies MrHeadset[],
	processTitle: 'How We Work',
	processLead:
		'EuphoriaXR’s mixed reality development process centers on quality, client ownership, and business value. We partner with enterprise teams to design and build immersive systems that align with goals, integrate with existing ecosystems, and support ongoing growth across MR, VR, AR, and spatial computing.',
	processCta: { href: '/about/', label: 'Learn More About EuphoriaXR' },
	process: [
		{
			title: 'World-Class Delivery',
			body: 'We focus on technical excellence, clear design, and enterprise-grade quality—building production-ready MR solutions for complex use cases across healthcare, training, simulation, education, digital twins, and system integrations.',
		},
		{
			title: 'Startup Speed with Production Discipline',
			body: 'We move fast in the early stages so you can validate ideas quickly, while designing for production from day one so speed does not come at the cost of stability.',
		},
		{
			title: 'End-to-End Delivery',
			body: 'From strategy and product design to 3D production, development, QA, deployment, and post-launch support, EuphoriaXR covers the full MR development lifecycle with one accountable partner.',
		},
		{
			title: 'Full Client IP Ownership',
			body: 'Custom code, assets, and systems built for your project are structured for your ownership and internal scale. We execute at a high level without locking you into proprietary dependencies.',
		},
		{
			title: 'Long-Term Partnership',
			body: 'Many engagements evolve from pilots into multi-year collaborations across departments, regions, and devices—aligned with innovation, R&D, and digital transformation goals.',
		},
	] satisfies MrProcessStep[],
	clientsLead:
		'From factory floors to design studios, EuphoriaXR builds mixed reality applications that stay anchored in real spaces—not demos that only work in a controlled booth.',
	talkSub: 'Partner with EuphoriaXR on mixed reality development.',
	faqs: [
		{
			question: 'What is mixed reality?',
			answer:
				'Mixed reality is a spatial computing technology that blends digital content with the physical world so virtual objects can anchor to and interact with real environments. Unlike simple overlays, mixed reality applications understand depth, surfaces, and room geometry.',
		},
		{
			question: 'How does mixed reality work?',
			answer:
				'Mixed reality technology uses depth sensing, spatial mapping, and real-time rendering to detect the layout of a room. This allows digital objects to anchor to surfaces, scale correctly, and interact with physical objects through occlusion.',
		},
		{
			question: 'What is the difference between augmented reality and mixed reality?',
			answer:
				'Augmented reality overlays digital content onto the real world, while mixed reality allows digital content to understand and interact with the environment—including anchoring, occlusion, and geometry-aware placement.',
		},
		{
			question: 'Mixed reality vs virtual reality: what is the difference?',
			answer:
				'Virtual reality replaces the physical world with a fully immersive digital environment. Mixed reality blends digital systems with physical surroundings, allowing users to remain aware of their environment while interacting with spatial content.',
		},
		{
			question: 'What are examples of mixed reality applications?',
			answer:
				'Examples include guided industrial maintenance overlays, digital twin visualization, immersive healthcare simulation, spatial design validation, interactive education platforms, and mixed reality corporate event experiences.',
		},
		{
			question: 'What industries use mixed reality development services?',
			answer:
				'Mixed reality is used across manufacturing, automotive, aerospace, healthcare, construction, infrastructure, education, energy, logistics, defense, retail, and corporate events where spatial visualization improves safety and performance.',
		},
		{
			question: 'What is industrial mixed reality?',
			answer:
				'Industrial mixed reality refers to MR applications deployed in manufacturing and operational environments to guide workflows, reduce errors, and improve safety through spatially anchored digital instructions.',
		},
		{
			question: 'How is mixed reality used in healthcare?',
			answer:
				'Mixed reality in healthcare supports surgical planning, anatomical visualization, immersive medical education, and clinical simulation using spatially aligned 3D models.',
		},
		{
			question: 'What are the best mixed reality headsets for enterprise use?',
			answer:
				'Meta Quest 3 often balances capability, cost, and deployment scale. Apple Vision Pro suits premium visual fidelity. Varjo XR-4 fits simulation-critical work. Magic Leap 2 and HoloLens 2 suit optical see-through needs in industrial or clinical settings.',
		},
		{
			question: 'What does a mixed reality development company do?',
			answer:
				'A mixed reality development company designs and builds custom spatial computing applications—including strategy, product design, spatial UX/UI, 3D optimization, software engineering, headset deployment, and ongoing support.',
		},
		{
			question: 'How much does mixed reality development cost?',
			answer:
				'Costs vary by scope, integrations, and headset targets. EuphoriaXR provides custom estimates after discovery, with pilots and phased enterprise deployments sized to your risk and timeline.',
		},
		{
			question: 'How long does mixed reality app development take?',
			answer:
				'Pilots often take about three months. Standard applications may take three to six months. Enterprise-scale deployments with integrations can take six to twelve months and are often delivered in phases.',
		},
		{
			question: 'What tools do mixed reality developers use?',
			answer:
				'Mixed reality developers typically use Unity, Unreal Engine where required, native SDKs, and 3D tools such as Blender. Languages often include C# and C++ depending on platform requirements.',
		},
		{
			question: 'Can mixed reality applications integrate with enterprise systems?',
			answer:
				'Yes. Mixed reality applications can integrate with ERP, PLM, CRM, LMS, and analytics systems so spatial computing fits within existing enterprise workflows.',
		},
		{
			question: 'Who owns the intellectual property of a mixed reality application?',
			answer:
				'Ownership depends on contract terms. EuphoriaXR structures enterprise projects so clients can retain ownership of custom code, assets, and systems developed for the engagement.',
		},
		{
			question: 'Can mixed reality applications work across multiple headsets?',
			answer:
				'Yes. We plan for target device classes early—passthrough headsets, optical see-through glasses, or hybrid fleets—and validate tracking, performance, and UX on the hardware your teams will actually wear.',
		},
		{
			question: 'What is mixed reality training?',
			answer:
				'Mixed reality training blends real-world context with digital simulation, improving retention, reducing risk, and accelerating skill acquisition compared with classroom-only methods.',
		},
		{
			question: 'How is mixed reality used at corporate events?',
			answer:
				'Mixed reality at corporate events can enhance keynotes, product launches, and brand activations with spatially integrated digital storytelling layered into physical venues.',
		},
		{
			question: 'Does EuphoriaXR provide maintenance after launch?',
			answer:
				'Yes. Post-launch support can include platform updates, device compatibility, SDK changes, performance optimization, content updates, and long-term system evolution.',
		},
		{
			question: 'What effect allows virtual objects to hide behind real objects in mixed reality?',
			answer:
				'Depth-based occlusion—enabled by spatial mapping and environmental understanding—lets virtual objects appear behind or in front of real-world surfaces and equipment.',
		},
	],
};

export function showMrHeadsetsFor(slug: string) {
	return slug === mrServiceSlug || slug.toLowerCase().includes('mixed-reality-development');
}
