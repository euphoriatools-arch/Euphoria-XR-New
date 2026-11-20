export type ArInsight = {
	index: string;
	title: string;
	body: string;
	source: string;
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
	servicesTitle: 'AR Development Services.',
	servicesLead:
		'EuphoriaXR builds augmented reality apps, WebAR experiences, and campaign filters for brands and product teams. We prototype on device, choose the right delivery path, and ship experiences people can actually open and use.',
	heroLines: ['Augmented Reality', 'Development Company'] as const,
	insights: {
		label: 'Industry Insights',
		headline: 'Why Are Businesses Investing in Augmented Reality?',
		body: 'Augmented reality is moving from novelty campaigns into product visualization, guided work, training, and everyday mobile experiences. Industry research points to faster growth in commercial AR, while device platforms and WebAR make it easier to reach users without a heavy install path.',
		items: [
			{
				index: '01',
				title: 'Strong Commercial AR Growth',
				body: 'Enterprise and consumer brands continue to expand AR budgets for product visualization, retail try-on, field guidance, and marketing activations that connect digital content to real places and products.',
				source: 'Source: Industry market analyses, 2024–2026',
			},
			{
				index: '02',
				title: 'Mobile-First Delivery Wins Adoption',
				body: 'Phones and tablets remain the primary AR surface for most campaigns. WebAR and lightweight apps reduce friction, helping more users open an experience without a long download.',
				source: 'Source: Mobile AR adoption patterns, 2025',
			},
			{
				index: '03',
				title: 'Spatial Hardware Expands Use Cases',
				body: 'AR glasses and mixed-reality headsets unlock hands-free workflows for training, maintenance, design review, and collaboration—especially when content is designed around real tasks.',
				source: 'Source: Enterprise XR deployment reports, 2025',
			},
			{
				index: '04',
				title: 'Proven Tracking Before Scale',
				body: 'Teams that validate tracking, lighting, and interaction on target devices before production avoid expensive rework and ship experiences that hold up outside a studio demo.',
				source: 'Source: EuphoriaXR delivery practice',
			},
		] satisfies ArInsight[],
	},
	headsetsTitle: 'AR Headsets and Platforms',
	headsetsIntro:
		'EuphoriaXR develops augmented reality applications for the AR headsets, glasses, and mobile platforms most widely used in enterprise and consumer experiences.',
	headsets: [
		{
			id: 'arkit',
			name: 'Apple ARKit',
			logoLabel: '01. Apple ARKit',
			image: '/headsets/ar/arkit.webp',
			imageAlt: 'Tablet showing an ARKit experience with digital content in a room',
			body: 'ARKit powers high-quality iOS AR for product visualization, room-scale placement, and polished branded experiences on iPhone and iPad.',
		},
		{
			id: 'arcore',
			name: 'ARCore',
			logoLabel: '02. ARCore',
			image: '/headsets/ar/arcore.webp',
			imageAlt: 'Hands interacting with an ARCore product model on a phone',
			body: 'ARCore supports Android AR experiences with motion tracking and environmental understanding for retail, education, and field guidance apps.',
		},
		{
			id: 'unity',
			name: 'Unity',
			logoLabel: '03. Unity',
			image: '/headsets/ar/unity.webp',
			imageAlt: 'Tablet displaying an industrial AR service and maintenance interface',
			body: 'Unity is our primary engine for cross-platform AR apps that need rich 3D, interactions, and deployment across phones, glasses, and headsets.',
		},
		{
			id: 'webxr',
			name: 'WebXR',
			logoLabel: '04. WebXR',
			image: '/headsets/ar/webxr.webp',
			imageAlt: 'WebXR browser experience inside a spatial environment',
			body: 'WebXR and WebAR let users launch immersive experiences from a link—ideal for campaigns, product demos, and browser-based spatial content.',
		},
		{
			id: 'lens-studio',
			name: 'Lens Studio',
			logoLabel: '05. Lens Studio',
			image: '/headsets/ar/lens-studio.webp',
			imageAlt: 'Phone showing a branded Snapchat-style AR face filter',
			body: 'Lens Studio supports branded AR filters and social lenses that extend campaigns across Snapchat and related social surfaces.',
		},
		{
			id: 'pico',
			name: 'PICO',
			logoLabel: '06. PICO',
			image: '/headsets/ar/pico.webp',
			imageAlt: 'Person using a PICO headset with hand interaction',
			body: 'PICO devices offer standalone XR options for training, demos, and organized deployments where controlled hardware matters.',
		},
		{
			id: 'specs',
			name: 'SPECS',
			logoLabel: '07. SPECS',
			image: '/headsets/ar/specs.webp',
			imageAlt: 'Two people outdoors wearing sleek AR smart glasses',
			body: 'Consumer-style AR glasses open lighter everyday use cases—from contextual info to social and lifestyle experiences designed for all-day wear.',
		},
		{
			id: 'hololens',
			name: 'Microsoft HoloLens',
			logoLabel: '08. Microsoft HoloLens',
			image: '/headsets/ar/hololens.webp',
			imageAlt: 'Person wearing a Microsoft HoloLens mixed reality headset',
			body: 'HoloLens supports enterprise mixed reality for guided work, remote assist, and spatial instructions anchored to real equipment.',
		},
		{
			id: 'magic-leap',
			name: 'Magic Leap',
			logoLabel: '09. Magic Leap',
			image: '/headsets/ar/magic-leap.webp',
			imageAlt: 'Person wearing Magic Leap style AR glasses',
			body: 'Magic Leap platforms enable spatial enterprise applications with see-through displays for collaboration, design review, and task guidance.',
		},
		{
			id: 'xreal',
			name: 'XREAL',
			logoLabel: '10. XREAL',
			image: '/headsets/ar/xreal.webp',
			imageAlt: 'Person wearing XREAL AR glasses against a dark background',
			body: 'XREAL glasses support lightweight AR viewing and spatial productivity experiences for media, demos, and portable enterprise use.',
		},
		{
			id: 'vision-pro',
			name: 'Apple Vision Pro',
			logoLabel: '11. Vision Pro',
			image: '/headsets/ar/vision-pro.webp',
			imageAlt: 'Person using an Apple Vision Pro headset at a desk',
			body: 'Vision Pro enables spatial interfaces, immersive product review, and high-fidelity presentations that blend digital content with the room.',
		},
		{
			id: 'meta',
			name: 'Meta',
			logoLabel: '12. Meta',
			image: '/headsets/ar/meta.webp',
			imageAlt: 'Person wearing a Meta Quest headset',
			body: 'Meta Quest platforms support mixed-reality apps, training, and interactive experiences with hand tracking and scalable device fleets.',
		},
	] satisfies ArHeadset[],
};

export function showArHeadsetsFor(slug: string) {
	return slug === arServiceSlug || slug.toLowerCase().includes('augmented-reality-development');
}
