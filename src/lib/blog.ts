import listing from '../data/blog/blogs-listing.json';

type PostJson = {
	slug: string;
	title: string;
	seo_title: string;
	meta_description: string;
	date: string;
	modified: string;
	author: string;
	author_role: string;
	categories: string[];
	primary_category: string;
	featured_image: string;
	reading_time_min: number;
	toc: string[];
};

export type BlogPost = {
	slug: string;
	title: string;
	seoTitle: string;
	description: string;
	date: string;
	modified: string;
	author: string;
	authorRole: string;
	categories: string[];
	primaryCategory: string;
	image: string;
	readingTime: number;
	toc: string[];
	html: string;
};

export type BlogTabId = 'all' | 'augmented-reality' | 'virtual-reality' | 'artificial-intelligence';

export const blogTabs = [
	{ id: 'all', label: 'Trending Post', heading: 'Latest Blog Post', href: '/exr-blogs/' },
	{
		id: 'augmented-reality',
		label: 'Augmented Reality (AR)',
		heading: 'Augmented Reality (AR) Blog Post',
		href: '/exr-blogs/category/augmented-reality/',
		category: 'Augmented Reality',
	},
	{
		id: 'virtual-reality',
		label: 'Virtual Reality (VR)',
		heading: 'Virtual Reality (VR) Blog Post',
		href: '/exr-blogs/category/virtual-reality/',
		category: 'Virtual Reality',
	},
	{
		id: 'artificial-intelligence',
		label: 'Artificial Intelligence (AI)',
		heading: 'Artificial intelligence (AI) Blog Post',
		href: '/exr-blogs/category/artificial-intelligence/',
		category: 'Artificial Intelligence',
	},
] as const;

export const blogPage = {
	title: listing.page.seo_title,
	description: listing.page.meta_description,
	h1: listing.page.h1,
};

export const blogAuthor = {
	name: listing.author.name,
	role: listing.author.role,
	avatar: listing.author.avatar,
};

const records = import.meta.glob('../data/blog/posts/*.json', { eager: true, import: 'default' }) as Record<string, PostJson>;
const bodies = import.meta.glob('../data/blog/posts/*.html', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

const ALLOWED = new Set(['h2', 'h3', 'h4', 'p', 'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'img', 'a', 'strong', 'b', 'em', 'br']);

function fileSlug(path: string) {
	return path.split('/').pop()?.replace(/\.(json|html)$/, '') ?? '';
}

function decode(value: string) {
	return value
		.replace(/&amp;/g, '&')
		.replace(/&quot;/g, '"')
		.replace(/&#0?39;/g, "'")
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&nbsp;/g, ' ');
}

function escapeAttr(value: string) {
	return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function attr(source: string, name: string) {
	const match = source.match(new RegExp(`${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, 'i'));
	return match ? (match[2] ?? match[3] ?? '') : null;
}

export function headingId(text: string) {
	const base = text
		.replace(/<[^>]+>/g, '')
		.toLowerCase()
		.replace(/&amp;/g, 'and')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
	return base || 'section';
}

function cleanHref(raw: string | null) {
	if (!raw) return null;
	const value = decode(raw).trim();
	if (/^\s*javascript:/i.test(value)) return null;
	if (value === 'https://euphoriaxr.com/contact-us/' || value === 'https://euphoriaxr.com/contact/') return '/contact/';
	return value;
}

function cleanHtml(input: string) {
	let droppedAnchors = 0;
	let html = input
		.replace(/<svg[\s\S]*?<\/svg>/gi, '')
		.replace(/<script[\s\S]*?<\/script>/gi, '')
		.replace(/<style[\s\S]*?<\/style>/gi, '')
		.replace(/<h4\b[^>]*>[\s\S]*?<a\b[^>]*>([\s\S]*?)<\/a>[\s\S]*?<\/h4>/gi, '<h3>$1</h3>');

	html = html.replace(/<!--[\s\S]*?-->|<\/?([a-zA-Z0-9]+)([^>]*)\/?>/g, (token, rawName: string, rawAttrs = '') => {
		if (token.startsWith('<!--')) return '';
		const name = rawName.toLowerCase();
		if (!ALLOWED.has(name)) return '';
		if (token.startsWith('</')) {
			if (name === 'a' && droppedAnchors > 0) {
				droppedAnchors -= 1;
				return '';
			}
			return name === 'br' ? '' : `</${name}>`;
		}
		if (name === 'br') return '<br>';
		if (name === 'img') {
			const src = attr(rawAttrs, 'src');
			if (!src || !/^https:\/\//i.test(src)) return '';
			const alt = decode(attr(rawAttrs, 'alt') || 'Illustration from the article');
			const width = attr(rawAttrs, 'width');
			const height = attr(rawAttrs, 'height');
			return `<img src="${escapeAttr(src)}" alt="${escapeAttr(alt)}"${width ? ` width="${escapeAttr(width)}"` : ''}${height ? ` height="${escapeAttr(height)}"` : ''} loading="lazy" decoding="async">`;
		}
		if (name === 'a') {
			const href = cleanHref(attr(rawAttrs, 'href'));
			if (!href) {
				droppedAnchors += 1;
				return '';
			}
			const external = /^https?:/i.test(href);
			return `<a href="${escapeAttr(href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>`;
		}
		if (name === 'th' || name === 'td') {
			const colspan = attr(rawAttrs, 'colspan');
			const rowspan = attr(rawAttrs, 'rowspan');
			return `<${name}${colspan ? ` colspan="${escapeAttr(colspan)}"` : ''}${rowspan ? ` rowspan="${escapeAttr(rowspan)}"` : ''}>`;
		}
		return `<${name}>`;
	});

	html = html
		.replace(/<p>\s*(?:&nbsp;|\s|<br>)*<\/p>/gi, '')
		.replace(/<p>\s*https?:\/\/[^<\s]+\s*<\/p>/gi, '')
		.replace(/https?:\/\/\S+\.(?:mp4|mov|webm|m4v)\b/gi, '');

	const used = new Set<string>();
	html = html.replace(/<table\b[\s\S]*?<\/table>/gi, (table) => `<div class="bl-table">${table}</div>`);

	html = html.replace(/<(h2|h3)>([\s\S]*?)<\/\1>/gi, (_match, tag: string, inner: string) => {
		const text = decode(inner.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
		let id = headingId(text);
		let n = 2;
		while (used.has(id)) id = `${headingId(text)}-${n++}`;
		used.add(id);
		return `<${tag} id="${id}">${inner}</${tag}>`;
	});

	const wrap = (label: string, className: string) => {
		const id = headingId(label);
		html = html.replace(new RegExp(`<h2 id="${id}">${label}</h2>([\\s\\S]*?)(?=<h2 |$)`), `<aside class="${className}"><h2 id="${id}">${label}</h2>$1</aside>`);
	};
	wrap('TL;DR', 'bl-callout');
	wrap('Key Takeaways', 'bl-callout is-dark');
	return html.trim();
}

function toIso(value: string) {
	const trimmed = value.trim();
	if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return trimmed;
	if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(trimmed)) return trimmed.replace(' ', 'T');
	return trimmed;
}

let cache: BlogPost[] | undefined;

export function loadPosts() {
	if (cache) return cache;
	const posts = Object.entries(records).map(([path, data]) => {
		const slug = fileSlug(path);
		const htmlPath = Object.keys(bodies).find((key) => fileSlug(key) === slug);
		if (!htmlPath) throw new Error(`Missing blog HTML for ${slug}`);
		return {
			slug: data.slug,
			title: data.title,
			seoTitle: data.seo_title,
			description: data.meta_description,
			date: toIso(data.date),
			modified: toIso(data.modified),
			author: data.author,
			authorRole: data.author_role,
			categories: data.categories,
			primaryCategory: data.primary_category,
			image: data.featured_image,
			readingTime: data.reading_time_min,
			toc: data.toc,
			html: cleanHtml(bodies[htmlPath]),
		} satisfies BlogPost;
	});
	cache = posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.title.localeCompare(b.title)));
	return cache;
}

export function getPost(slug: string) {
	const post = loadPosts().find((item) => item.slug === slug);
	if (!post) throw new Error(`Missing blog post ${slug}`);
	return post;
}

export function postsForTab(tab: BlogTabId) {
	const posts = loadPosts();
	if (tab === 'all') return posts;
	const match = blogTabs.find((item) => item.id === tab);
	const category = match && 'category' in match ? match.category : '';
	return posts.filter((post) => post.categories.includes(category));
}

export function categoryHref(name: string) {
	return blogTabs.find((tab) => 'category' in tab && tab.category === name)?.href;
}

export function visibleCategories(categories: string[]) {
	return categories.filter((category) => category !== 'Latest Blogs');
}

export function formatBlogDate(value: string) {
	const iso = value.slice(0, 10);
	const [year, month, day] = iso.split('-').map(Number);
	return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function tocLinks(post: BlogPost) {
	return post.toc
		.filter((label) => label !== 'TL;DR')
		.map((label) => ({ label, id: headingId(label) }));
}

export function nextPost(post: BlogPost) {
	const posts = loadPosts();
	const group = posts.filter((item) => item.primaryCategory === post.primaryCategory);
	const index = group.findIndex((item) => item.slug === post.slug);
	if (index >= 0 && group[index + 1]) return group[index + 1];
	return posts.find((item) => item.slug !== post.slug);
}

export function relatedPosts(post: BlogPost) {
	const posts = loadPosts().filter((item) => item.slug !== post.slug);
	const same = posts.filter((item) => item.primaryCategory === post.primaryCategory);
	const rest = posts.filter((item) => item.primaryCategory !== post.primaryCategory);
	return [...same, ...rest].slice(0, 6);
}
