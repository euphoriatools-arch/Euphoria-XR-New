import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dir = resolve(root, 'src/content/projects');
mkdirSync(dir, { recursive: true });

const photos = [
	'hero-vr.jpg',
	'work-ai.jpg',
	'work-architecture.jpg',
	'hero-city.jpg',
	'about-lab.jpg',
	'work-cosmos.jpg',
	'hero-abstract.jpg',
];

const projects = [
	['harbor-lens', 'Harbor Lens', 'augmented-reality', 'AR Packaging', 'Northline Goods', 'Retail', true, 2025, '14 weeks', '6 people', true, 'youtube', 'mdx'],
	['aisle-marker', 'Aisle Marker', 'augmented-reality', 'Retail AR', 'Sample grocer', 'Retail', false, 2024, '9 weeks', '5 people', false, 'youtube', 'md'],
	['showroom-spark', 'Showroom Spark', 'augmented-reality', 'Showroom AR', 'Sample auto brand', 'Automotive', true, 2024, '11 weeks', '7 people', false, 'youtube', 'md'],
	['mural-walk', 'Mural Walk', 'augmented-reality', 'Culture AR', 'Sample museum', 'Culture', false, 2023, '8 weeks', '', false, 'youtube', 'md'],
	['weld-rehearsal', 'Weld Rehearsal', 'virtual-reality', 'VR Training', 'Sample yard', 'Manufacturing', true, 2025, '16 weeks', '8 people', true, 'vimeo', 'md'],
	['ward-round', 'Ward Round', 'virtual-reality', 'Clinical VR', 'Sample hospital', 'Healthcare', false, 2024, '18 weeks', '6 people', false, 'vimeo', 'md'],
	['night-shift', 'Night Shift', 'virtual-reality', 'Plant VR', 'Sample utility', 'Energy', true, 2024, '12 weeks', '5 people', false, 'vimeo', 'md'],
	['cabin-drill', 'Cabin Drill', 'virtual-reality', 'Crew VR', 'Sample airline', 'Aviation', false, 2023, '10 weeks', '', false, 'vimeo', 'md'],
	['atrium-tour', 'Atrium Tour', '360-videography', '360 Venue', 'Sample hotel', 'Hospitality', true, 2025, '6 weeks', '4 people', true, 'file', 'md'],
	['kiln-floor', 'Kiln Floor', '360-videography', '360 Plant', 'Sample foundry', 'Manufacturing', false, 2024, '5 weeks', '3 people', false, 'file', 'md'],
	['pier-night', 'Pier Night', '360-videography', '360 Site', 'Sample harbor', 'Tourism', true, 2024, '7 weeks', '4 people', false, 'file', 'md'],
	['gallery-hour', 'Gallery Hour', '360-videography', '360 Room', 'Sample gallery', 'Museums', false, 2023, '4 weeks', '', false, 'file', 'md'],
	['provenance-wall', 'Provenance Wall', 'blockchain', 'Provenance', 'Sample label', 'Retail', true, 2025, '13 weeks', '5 people', true, 'youtube', 'md'],
	['membership-pass', 'Membership Pass', 'blockchain', 'Membership', 'Sample club', 'Media', false, 2024, '9 weeks', '4 people', false, 'youtube', 'md'],
	['archive-key', 'Archive Key', 'blockchain', 'Archive', 'Sample archive', 'Culture', true, 2024, '15 weeks', '6 people', false, 'youtube', 'md'],
	['token-room', 'Token Room', 'blockchain', 'Event Record', 'Sample festival', 'Events', false, 2023, '8 weeks', '', false, 'youtube', 'md'],
	['desk-guide', 'Desk Guide', 'artificial-intelligence', 'AI Guide', 'Sample software', 'Software', true, 2025, '12 weeks', '5 people', true, 'youtube', 'md'],
	['floor-coach', 'Floor Coach', 'artificial-intelligence', 'AI Coach', 'Sample retailer', 'Retail', false, 2024, '10 weeks', '4 people', false, 'youtube', 'md'],
	['quote-clerk', 'Quote Clerk', 'artificial-intelligence', 'AI Clerk', 'Sample insurer', 'Insurance', true, 2024, '14 weeks', '6 people', false, 'youtube', 'md'],
	['shift-notes', 'Shift Notes', 'artificial-intelligence', 'AI Notes', 'Sample clinic', 'Healthcare', false, 2023, '9 weeks', '', false, 'youtube', 'md'],
];

function fitTitle(name, hint) {
	const suffix = ' | EuphoriaXR';
	const candidates = [
		`${name} ${hint} Case Study`,
		`${name} ${hint} Case Study for Teams`,
		`${hint} ${name} Case Study for Teams`,
		`${name} ${hint} Sample Case Study`,
	];
	for (const core of candidates) {
		const title = core + suffix;
		if (title.length >= 50 && title.length <= 60) return title;
	}
	throw new Error(
		`${name}: ${candidates.map((core) => `${core.length + suffix.length} ${core}${suffix}`).join(' || ')}`,
	);
}

function fitDesc(base) {
	const extras = ['', ' Sample placeholder.', ' Figures are samples.', ' Not a verified result.'];
	for (const extra of extras) {
		const text = `${base}${extra}`;
		if (text.length >= 140 && text.length <= 160) return text;
	}
	throw new Error(`${base.length} ${base}`);
}

function q(value) {
	return JSON.stringify(value);
}

const usedTitles = new Set();

for (const [index, row] of projects.entries()) {
	const [slug, name, category, hint, client, industry, permission, year, duration, team, featured, provider, ext] = row;
	const seoTitle = fitTitle(name, hint);
	if (usedTitles.has(seoTitle)) throw new Error(`duplicate title ${seoTitle}`);
	usedTitles.add(seoTitle);
	const seoDescription = fitDesc(
		`${name} is a sample ${hint} project from EuphoriaXR for a ${industry.toLowerCase()} team. The figures and quote on this page are placeholders.`,
	);
	const photo = (offset) => photos[(index + offset) % photos.length];
	const video =
		provider === 'file'
			? {
					provider: 'file',
					src: '/portfolio/media/sample-360.mp4',
					extra: slug === 'atrium-tour' ? `  captions: "/portfolio/captions/sample-360.en.vtt"\n` : '',
				}
			: provider === 'vimeo'
				? { provider: 'vimeo', id: '76979871', extra: '' }
				: { provider: 'youtube', id: 'M7lc1UVf-VE', extra: '' };
	const videoFields =
		video.provider === 'file'
			? `  src: ${q(video.src)}\n${video.extra}`
			: `  id: ${q(video.id)}\n`;
	const teamLine = team ? `teamSize: ${q(team)}\n` : '';
	const body = `<!-- TODO: Replace this sample case study with a verified EuphoriaXR project. Client names, metrics, and quotes are placeholders. -->

${name} is a sample ${category.replaceAll('-', ' ')} project for a ${industry.toLowerCase()} team. The page shows the shape of a case study: the brief, the outcome, the film, and the steps. Nothing on this page is a verified client result.

The work was framed as one job a person could finish. For ${name}, that job was written down before a tool was chosen. The sample keeps the same order a real engagement would use: the constraint, a prototype, then the release.

Replace this file when a verified story is ready. Keep the slug if the URL should stay, or choose a new slug and remove this sample.
`;
	const markdown = `---
title: ${q(name)}
slug: ${slug}
category: ${category}
client:
  name: ${q(client)}
  industry: ${q(industry)}
  permissionGranted: ${permission}
year: ${year}
duration: ${q(duration)}
${teamLine}heroImage:
  image: ../../assets/photos/${photo(0)}
  alt: ${q(`Sample photograph used for ${name}. Replace it with a still from the project.`)}
gallery:
  - image: ../../assets/photos/${photo(1)}
    alt: ${q(`First sample gallery still for ${name}.`)}
    caption: ${q(`A sample still from the ${name} walkthrough.`)}
  - image: ../../assets/photos/${photo(2)}
    alt: ${q(`Second sample gallery still for ${name}.`)}
    caption: ${q(`Another angle from the ${name} sample.`)}
  - image: ../../assets/photos/${photo(3)}
    alt: ${q(`Third sample gallery still for ${name}.`)}
    caption: ${q(`A detail frame from the ${name} sample.`)}
video:
  provider: ${video.provider}
${videoFields}  poster: ../../assets/photos/${photo(4)}
  posterAlt: ${q(`Poster frame for the ${name} sample video.`)}
  title: ${q(`${name} sample film`)}
testimonial:
  quote: ${q(`This quote is a placeholder for ${name}. A verified client would describe what changed after the work shipped.`)}
  name: "Sample reviewer"
  role: "Project sponsor"
  company: ${q(permission ? client : 'Confidential client')}
summary: ${q(`Sample ${hint} project for a ${industry.toLowerCase()} team. Figures on this page are placeholders.`)}
outcome:
  metrics:
    - metric: "Engagement"
      value: "+340%"
    - metric: "Completion"
      value: "62%"
  paragraph: ${q(`These figures are sample placeholders for ${name}, not a measured result. TODO: replace them with verified numbers or remove the cards.`)}
methodology:
  - step: 1
    title: "Name the job"
    description: ${q(`Write the person, the task, and the constraint for ${name} before picking a tool.`)}
  - step: 2
    title: "Prototype the moment"
    description: "Put a rough version in the room and watch where people hesitate."
  - step: 3
    title: "Build the release"
    description: "Produce the scene, the score, or the record for the device you will actually ship."
  - step: 4
    title: "Hand it over"
    description: "Leave a readout, the files, and the first change to make while the work is live."
tags:
  - ${q(hint)}
  - ${q(industry)}
featured: ${featured}
seo:
  title: ${q(seoTitle)}
  description: ${q(seoDescription)}
---

${body}`;
	writeFileSync(resolve(dir, `${slug}.${ext}`), markdown);
	console.log(`${seoTitle.length} ${seoDescription.length} ${slug}.${ext}`);
}
