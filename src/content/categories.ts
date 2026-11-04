import type { ImageKey } from '../data/types';
import { assertMeta } from '../lib/seo';

export const categorySlugs = [
	'augmented-reality',
	'virtual-reality',
	'360-videography',
	'blockchain',
	'artificial-intelligence',
] as const;

export type CategorySlug = (typeof categorySlugs)[number];

export type Category = {
	slug: CategorySlug;
	name: string;
	tab: string;
	accent: string;
	intro: string;
	benefits: { title: string; body: string }[];
	hero: ImageKey;
	heroAlt: string;
	seo: { title: string; description: string };
	testimonial: { quote: string; name: string; role: string; company: string };
	awards: { name: string; year: number; detail: string }[];
};

export const categories: Category[] = [
	{
		slug: 'augmented-reality',
		name: 'Augmented reality',
		tab: 'AR',
		accent: '#c4122c',
		intro:
			'Phone-based scenes for packaging, places, and campaigns. The scan has to pay off in a few seconds, and the offer still has to land if the camera cannot run it.',
		benefits: [
			{ title: 'A scan with a point', body: 'The first seconds show the product, the place, or the offer. Decoration is not the job.' },
			{ title: 'A fallback that still sells', body: 'If the phone cannot run the scene, the film or the product page is still there.' },
			{ title: 'Numbers for the flight', body: 'Opens and completes are named the way a media team already reports a campaign.' },
		],
		hero: 'ar',
		heroAlt: 'Person looking at a phone in front of a geometric architectural model',
		seo: {
			title: 'Augmented Reality Portfolio and Case Studies | EuphoriaXR',
			description:
				'Augmented reality projects from EuphoriaXR: packaging, places, and campaigns that open on a phone and still work when the camera cannot. Sample studies.',
		},
		testimonial: {
			quote:
				'The sample quote is a placeholder. A verified client would describe whether people finished the scan and what they did next.',
			name: 'Sample producer',
			role: 'Campaign producer',
			company: 'Sample brand team',
		},
		awards: [
			{ name: 'Placeholder festival selection', year: 2025, detail: 'TODO: replace with a verified award for this category.' },
			{ name: 'Placeholder industry mention', year: 2024, detail: 'TODO: replace with a verified mention or remove this row.' },
		],
	},
	{
		slug: 'virtual-reality',
		name: 'Virtual reality',
		tab: 'VR',
		accent: '#1d4ed8',
		intro:
			'Headset rehearsals for training floors, clinics, and crews. The score has to match the brief an instructor already uses, not a game rubric.',
		benefits: [
			{ title: 'Repetition before the live run', body: 'The costly or unsafe attempt happens in the headset first.' },
			{ title: 'A score the instructor knows', body: 'Measures follow the procedure, the call, or the checklist you already grade.' },
			{ title: 'A debrief with a moment', body: 'The replay points at a step. It does not dump a dashboard on the room.' },
		],
		hero: 'vr',
		heroAlt: 'Person wearing a virtual reality headset with both arms raised',
		seo: {
			title: 'Virtual Reality Portfolio and Case Studies | EuphoriaXR',
			description:
				'Virtual reality projects from EuphoriaXR for training floors, clinics, and crews who need a rehearsal before the real procedure. These are samples.',
		},
		testimonial: {
			quote:
				'The sample quote is a placeholder. A verified instructor would say whether the score matched the briefing they already give.',
			name: 'Sample instructor',
			role: 'Training lead',
			company: 'Sample operations team',
		},
		awards: [
			{ name: 'Placeholder training award', year: 2025, detail: 'TODO: replace with a verified award for this category.' },
			{ name: 'Placeholder safety mention', year: 2023, detail: 'TODO: replace with a verified mention or remove this row.' },
		],
	},
	{
		slug: '360-videography',
		name: '360 videography',
		tab: '360',
		accent: '#b45309',
		intro:
			'Spherical video for rooms, sites, and events. Drag to look around. A standard player with captions stays available if the viewer cannot start.',
		benefits: [
			{ title: 'A room you can look through', body: 'The frame is the place, not a crop someone else chose.' },
			{ title: 'Captions on the file', body: 'When a transcript exists, the video carries a captions track.' },
			{ title: 'A plain player as backup', body: 'The file still plays with controls if the 360 viewer does not load.' },
		],
		hero: 'city',
		heroAlt: 'City skyline at dusk seen from an elevated viewpoint',
		seo: {
			title: '360 Videography Portfolio and Case Studies | EuphoriaXR',
			description:
				'360 videography projects from EuphoriaXR: rooms, sites, and events you can look through, with a plain video if the viewer cannot load. Sample studies.',
		},
		testimonial: {
			quote:
				'The sample quote is a placeholder. A verified producer would say whether people looked around the room or only watched the opening.',
			name: 'Sample producer',
			role: 'Location producer',
			company: 'Sample venue team',
		},
		awards: [
			{ name: 'Placeholder film selection', year: 2025, detail: 'TODO: replace with a verified award for this category.' },
			{ name: 'Placeholder venue mention', year: 2024, detail: 'TODO: replace with a verified mention or remove this row.' },
		],
	},
	{
		slug: 'blockchain',
		name: 'Blockchain',
		tab: 'Blockchain',
		accent: '#5b21b6',
		intro:
			'Records for provenance, membership, and archives. The chain is only in the work when a person still needs to explain the record later.',
		benefits: [
			{ title: 'A record someone can read', body: 'The screen says what was written and why. It does not stop at a hash.' },
			{ title: 'A boundary on what is stored', body: 'Personal data stays off the record unless the brief says otherwise.' },
			{ title: 'A path if the wallet is new', body: 'The useful part of the experience still opens for someone without a setup.' },
		],
		hero: 'cosmos',
		heroAlt: 'Abstract violet light forming a tunnel of points',
		seo: {
			title: 'Blockchain Experience Portfolio and Cases | EuphoriaXR',
			description:
				'Blockchain projects from EuphoriaXR for provenance, membership, and archives where the record has to stay explainable to a person. Sample studies.',
		},
		testimonial: {
			quote:
				'The sample quote is a placeholder. A verified owner would say whether their team could explain the record without a developer in the room.',
			name: 'Sample owner',
			role: 'Product owner',
			company: 'Sample membership team',
		},
		awards: [
			{ name: 'Placeholder product mention', year: 2025, detail: 'TODO: replace with a verified award for this category.' },
			{ name: 'Placeholder design note', year: 2024, detail: 'TODO: replace with a verified mention or remove this row.' },
		],
	},
	{
		slug: 'artificial-intelligence',
		name: 'Artificial intelligence',
		tab: 'AI',
		accent: '#0f766e',
		intro:
			'Guides, coaches, and clerks that answer from sources you approve. The system stops, with the transcript, when the question is new.',
		benefits: [
			{ title: 'Answers from your sources', body: 'Responses point at the page or policy they came from.' },
			{ title: 'A stop when the case is new', body: 'The handoff includes the question and what was already tried.' },
			{ title: 'A set you can rerun', body: 'The same questions are scored after every change, not only at launch.' },
		],
		hero: 'ai',
		heroAlt: 'Person working at a laptop in a dim room with blue light',
		seo: {
			title: 'Artificial Intelligence Portfolio and Cases | EuphoriaXR',
			description:
				'Artificial intelligence projects from EuphoriaXR: guides, coaches, and clerks that answer from approved sources and stop when they should. Sample studies.',
		},
		testimonial: {
			quote:
				'The sample quote is a placeholder. A verified operator would say which questions the guide was allowed to answer and which it had to hand off.',
			name: 'Sample operator',
			role: 'Support lead',
			company: 'Sample product team',
		},
		awards: [
			{ name: 'Placeholder product award', year: 2025, detail: 'TODO: replace with a verified award for this category.' },
			{ name: 'Placeholder research mention', year: 2024, detail: 'TODO: replace with a verified mention or remove this row.' },
		],
	},
];

const seen = new Set<string>();
for (const category of categories) {
	assertMeta(category.name, category.seo.title, category.seo.description);
	if (seen.has(category.seo.title)) throw new Error(`Duplicate category title: ${category.seo.title}`);
	seen.add(category.seo.title);
}

export function categoryBySlug(slug: string) {
	return categories.find((category) => category.slug === slug);
}
