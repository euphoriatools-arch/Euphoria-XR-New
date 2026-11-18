import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { createJiti } from 'jiti';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
const jiti = createJiti(import.meta.url);
const { marketingPages } = await jiti.import('../src/data/pages.ts');
const marketingPaths = new Set(marketingPages.map((page) => `/${page.slug}/`));

const required = ['sitemap-index.xml', 'sitemap-0.xml', 'robots.txt', 'llms.txt', 'llms-full.txt'];
const errors = [];

for (const file of required) {
	try {
		statSync(join(dist, file));
	} catch {
		errors.push(`Missing dist/${file}`);
	}
}

function walk(dir) {
	const files = [];
	for (const entry of readdirSync(dir)) {
		const path = join(dir, entry);
		if (statSync(path).isDirectory()) files.push(...walk(path));
		else if (entry.endsWith('.html')) files.push(path);
	}
	return files;
}

function routeFromFile(file) {
	const rel = file.slice(dist.length).replaceAll('\\', '/');
	if (rel.endsWith('/index.html')) return rel.slice(0, -'index.html'.length) || '/';
	if (rel.endsWith('.html')) return rel.slice(0, -'.html'.length);
	return rel;
}

function exists(urlPath) {
	const clean = urlPath.split('#')[0].split('?')[0];
	if (!clean.startsWith('/')) return true;
	const candidates = [
		join(dist, clean),
		join(dist, clean, 'index.html'),
		join(dist, `${clean.replace(/\/$/, '')}.html`),
		join(dist, `${clean.replace(/\/$/, '')}/index.html`),
	];
	return candidates.some((candidate) => {
		try {
			return statSync(candidate).isFile();
		} catch {
			return false;
		}
	});
}

const titles = new Map();
const htmlFiles = walk(dist).filter((file) => !file.includes(`${join(dist, 'api')}`));

for (const file of htmlFiles) {
	const html = readFileSync(file, 'utf8');
	if (html.includes('http-equiv="refresh"')) continue;
	const route = routeFromFile(file).endsWith('/') || routeFromFile(file) === '/' ? routeFromFile(file) : `${routeFromFile(file)}/`;
	const title = html.match(/<title>(.*?)<\/title>/s)?.[1]?.trim() ?? '';
	const description = html.match(/<meta name="description" content="(.*?)"/s)?.[1]?.trim() ?? '';
	const canonical = html.match(/<link rel="canonical" href="(.*?)"/)?.[1] ?? '';
	const h1s = [...html.matchAll(/<h1[\s>]/g)].length;
	const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => match[1]);

	if (!title) errors.push(`${route} missing title`);
	if (!description) errors.push(`${route} missing description`);
	if (titles.has(title)) errors.push(`${route} duplicates title of ${titles.get(title)}`);
	titles.set(title, route);
	if (h1s !== 1) errors.push(`${route} has ${h1s} h1 elements`);
	if (!canonical.startsWith('https://') || !canonical.endsWith('/')) errors.push(`${route} canonical ${canonical}`);
	if (blocks.length === 0) errors.push(`${route} missing JSON-LD`);
	for (const block of blocks) {
		let data;
		try {
			data = JSON.parse(block);
		} catch {
			errors.push(`${route} has invalid JSON-LD`);
			continue;
		}
		const empty = [];
		const visit = (value, path) => {
			if (value === '' || value === null) empty.push(path);
			else if (Array.isArray(value)) value.forEach((item, index) => visit(item, `${path}[${index}]`));
			else if (value && typeof value === 'object') {
				for (const [key, item] of Object.entries(value)) visit(item, `${path}.${key}`);
			}
		};
		visit(data, '$');
		if (empty.length) errors.push(`${route} JSON-LD empty values: ${empty.join(', ')}`);
	}

	const routeParts = route.split('/').filter(Boolean);
	if (routeParts[0] === 'portfolio' && routeParts.length === 3) {
		if (/<iframe\b[^>]*\bsrc=/i.test(html)) errors.push(`${route} has an iframe before interaction`);
		if (/<script\b[^>]*\bsrc="[^"]*aframe/i.test(html)) errors.push(`${route} loads A-Frame before interaction`);
	}

	if (marketingPaths.has(route)) {
		if (title.length < 50 || title.length > 60) errors.push(`${route} title length ${title.length}`);
		if (description.length < 140 || description.length > 160) errors.push(`${route} description length ${description.length}`);
	}

	const links = [...html.matchAll(/href="(\/[^"]*)"/g)].map((match) => match[1]);
	for (const link of links) {
		if (link.startsWith('/api/')) continue;
		if (!exists(link)) errors.push(`${route} broken internal link ${link}`);
	}
}

if (errors.length) {
	console.error(errors.join('\n'));
	process.exit(1);
}

console.log(`Checked ${htmlFiles.length} pages. Titles, descriptions, H1s, canonicals, JSON-LD, and internal links look good.`);
