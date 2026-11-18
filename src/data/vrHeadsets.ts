export type VrHeadset = {
	id: string;
	name: string;
	logoLabel: string;
	image: string;
	imageAlt: string;
	body: string;
};

export const vrHeadsetsIntro =
	'EuphoriaXR designs immersive applications around real headset capabilities, balancing visual quality, user comfort, performance, and practical deployment requirements across projects.';

export const vrHeadsetsTitle = 'Virtual Reality Headsets and Platforms';

export const vrHeadsets: VrHeadset[] = [
	{
		id: 'apple-vision-pro',
		name: 'Apple Vision Pro',
		logoLabel: '01. Apple Vision Pro',
		image: '/headsets/apple-vision-pro.webp',
		imageAlt: 'Person wearing an Apple Vision Pro headset',
		body: 'Apple Vision Pro enables immersive spatial presentations, detailed product visualization, and intuitive eye-tracking interactions.',
	},
	{
		id: 'meta',
		name: 'Meta Quest',
		logoLabel: '02. Meta Quest',
		image: '/headsets/meta.webp',
		imageAlt: 'Person smiling while using a Meta Quest headset and controller',
		body: 'Meta Quest combines standalone VR with flexible interaction options, making it practical for workforce training, guided simulations, interactive learning, and scalable deployment across multiple locations.',
	},
	{
		id: 'samsung-galaxy-xr',
		name: 'Samsung XR',
		logoLabel: '03. Samsung XR',
		image: '/headsets/samsung-galaxy-xr.webp',
		imageAlt: 'Close-up of a Samsung Galaxy XR style headset',
		body: 'Samsung Galaxy XR runs Android XR and supports spatial applications that combine immersive content with the physical world. Eye, hand, and voice interactions create options for enterprise experiences.',
	},
	{
		id: 'pimax',
		name: 'Pimax',
		logoLabel: '04. Pimax',
		image: '/headsets/pimax.webp',
		imageAlt: 'Person using a Pimax virtual reality headset',
		body: 'Pimax headsets emphasize wide viewing angles and detailed visuals, making them relevant to demanding simulations, engineering reviews, and applications requiring peripheral awareness in virtual environments.',
	},
	{
		id: 'pico',
		name: 'Pico',
		logoLabel: '05. Pico',
		image: '/headsets/pico.webp',
		imageAlt: 'Person in a living room using a Pico VR headset with controllers',
		body: 'Pico headsets offer standalone VR options for training, demonstrations, and organized business deployments.',
	},
	{
		id: 'vive',
		name: 'HTC Vive Focus Vision',
		logoLabel: '06. HTC Vive Focus Vision',
		image: '/headsets/vive.webp',
		imageAlt: 'Person wearing a VIVE headset and interacting with hand tracking',
		body: 'HTC Vive Focus Vision supports immersive experiences with portable hardware and tracking, offering options for technical training, design visualization, and interactive simulations.',
	},
	{
		id: 'varjo',
		name: 'Varjo XR and VR Series',
		logoLabel: '07. Varjo XR and VR Series',
		image: '/headsets/varjo.png',
		imageAlt: 'Person wearing a professional Varjo headset',
		body: 'Varjo devices prioritize exceptional visual detail for specialized complex engineering simulations, research, and high-precision enterprise visualization workflows.',
	},
	{
		id: 'steam-frame',
		name: 'Steam Frame',
		logoLabel: '08. Steam Frame',
		image: '/headsets/steam-frame.webp',
		imageAlt: 'Person outdoors wearing a Steam Frame headset with a controller',
		body: 'Steam Frame combines wireless PC streaming with standalone VR capabilities, making it relevant for interactive experiences that benefit from flexible content access, immersive controls, and demanding real-time visual performance.',
	},
];

export function showVrHeadsetsFor(slug: string) {
	const s = slug.toLowerCase();
	return (
		s.includes('virtual-reality') ||
		s.includes('vr-simulator') ||
		s.includes('vr-training') ||
		s.includes('ar-vr-training')
	);
}
