import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { categories } from '../src/content/categories.ts';
import { site } from '../src/config/site.ts';
import { industryPages } from '../src/data/industries.ts';
import { servicePages } from '../src/data/services.ts';
import { absoluteUrl } from '../src/lib/urls.ts';

const root = resolve(import.meta.dirname, '..');
const publicDir = resolve(root, 'public');

function write(path: string, contents: string) {
	mkdirSync(dirname(path), { recursive: true });
	writeFileSync(path, contents);
}

const robots = `User-agent: *
Allow: /
Disallow: /404
Disallow: /404/

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${site.siteUrl}/sitemap-index.xml
`;

function linkList(pages: typeof servicePages) {
	return pages
		.map((page) => `- [${page.navLabel}](${absoluteUrl(`/${page.slug}/`)}): ${page.summary}`)
		.join('\n');
}

function frontmatterValue(block: string, key: string) {
	const match = block.match(new RegExp(`^${key}: (.+)$`, 'm'));
	if (!match) return '';
	const value = match[1].trim();
	return value.startsWith('"') ? (JSON.parse(value) as string) : value;
}

function portfolioSection() {
	const dir = resolve(root, 'src/content/projects');
	const projects = readdirSync(dir)
		.filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
		.map((file) => {
			const raw = readFileSync(resolve(dir, file), 'utf8');
			const block = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
			return {
				title: frontmatterValue(block, 'title'),
				slug: frontmatterValue(block, 'slug'),
				category: frontmatterValue(block, 'category'),
				summary: frontmatterValue(block, 'summary'),
			};
		})
		.sort((a, b) => a.title.localeCompare(b.title));
	const lines = [
		`- [Portfolio](${absoluteUrl('/portfolio/')}): Sample immersive projects across AR, VR, 360 video, blockchain, and AI.`,
		...categories.map(
			(category) => `- [${category.name}](${absoluteUrl(`/portfolio/${category.slug}/`)}): ${category.intro}`,
		),
		...projects.map(
			(project) =>
				`- [${project.title}](${absoluteUrl(`/portfolio/${project.category}/${project.slug}/`)}): ${project.summary}`,
		),
	];
	return lines.join('\n');
}

const llms = `# ${site.siteName}

> ${site.siteName} is a creative technology studio that designs and builds AR, VR, AI, WebXR, and 3D experiences for training, brands, products, and public teams.

## Services

${linkList(servicePages)}

## Industries

${linkList(industryPages)}

## Portfolio

${portfolioSection()}

## Company

- [About](${absoluteUrl('/about/')}): Who the studio is and how an engagement runs.
- [Contact](${absoluteUrl('/contact/')}): Start a project conversation.
- [EXR Blogs](${absoluteUrl('/exr-blogs/')}): AR, VR, and AI articles from EuphoriaXR.

## Optional

- [Privacy policy](${absoluteUrl('/privacy-policy/')}): How contact details and project files are handled.
- [Terms of use](${absoluteUrl('/terms/')}): Terms for using the website. Paid work uses a separate contract.
`;

function fullPage(page: (typeof servicePages)[number]) {
	const faqs = page.faqs.map((faq) => `### ${faq.question}\n\n${faq.answer}`).join('\n\n');
	return `## ${page.h1}\n\nURL: ${absoluteUrl(`/${page.slug}/`)}\n\n${page.intro.join('\n\n')}\n\n${faqs}\n`;
}

const llmsFull = `# ${site.siteName}

> ${site.defaultDescription}

This file is a fuller briefing for AI systems. The short map is /llms.txt.

${[...servicePages, ...industryPages].map(fullPage).join('\n')}
`;

const manifest = {
	name: site.siteName,
	short_name: site.siteName,
	description: site.defaultDescription,
	start_url: '/',
	display: 'standalone',
	background_color: '#f7f7f4',
	theme_color: site.themeColor,
	lang: site.language,
	icons: [
		{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
		{ src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png', purpose: 'any' },
	],
};

write(resolve(publicDir, 'robots.txt'), robots);
write(resolve(publicDir, 'llms.txt'), llms);
write(resolve(publicDir, 'llms-full.txt'), llmsFull);
write(resolve(publicDir, 'site.webmanifest'), `${JSON.stringify(manifest, null, 2)}\n`);

console.log('Wrote robots.txt, llms.txt, llms-full.txt, and site.webmanifest');
