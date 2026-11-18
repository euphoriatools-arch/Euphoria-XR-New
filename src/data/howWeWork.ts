export type HowWeWorkIcon = 'trophy' | 'speed' | 'delivery' | 'code' | 'partnership';

export type HowWeWorkCard = {
	icon: HowWeWorkIcon;
	title: string;
	body: string;
};

export const howWeWorkCards: HowWeWorkCard[] = [
	{
		icon: 'trophy',
		title: 'World-Class Delivery',
		body: 'EuphoriaXR focuses on technical excellence, clear design, and enterprise-grade quality. We build production-ready AR, VR, and AI solutions for complex use cases across training, simulation, healthcare, education, and branded experiences.',
	},
	{
		icon: 'speed',
		title: 'Startup Speed with Production Discipline',
		body: 'We move fast in the early stages so you can validate ideas quickly. At the same time, we design for production from day one so speed does not come at the cost of stability.',
	},
	{
		icon: 'delivery',
		title: 'End-to-End Delivery',
		body: 'From strategy and product design to 3D production, development, QA, deployment, and post-launch support, EuphoriaXR covers the full immersive lifecycle. Enterprise teams work with one partner that can take a concept from idea to a shippable build across headset, web, and in-product surfaces.',
	},
	{
		icon: 'code',
		title: 'Full Client IP Ownership',
		body: 'Intellectual property developed for your project belongs to you. We build custom applications your organization owns, controls, and can scale internally—without locking you into proprietary systems or hidden dependencies.',
	},
	{
		icon: 'partnership',
		title: 'Long-Term Partnership',
		body: 'We operate as a strategic XR partner, not a short-term vendor. Engagements often grow from a pilot into ongoing work across teams and devices, aligned with the people who own innovation and delivery inside your organization.',
	},
];
