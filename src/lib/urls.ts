import { site } from '../config/site';

/** Absolute URL. Directory paths get a trailing slash. Files and hashes keep their shape. */
export function absoluteUrl(path = '/'): string {
	const base = site.siteUrl.replace(/\/$/, '');
	const hashIndex = path.indexOf('#');
	const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';
	let normalized = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
	if (!normalized.startsWith('/')) normalized = `/${normalized}`;
	if (normalized === '') normalized = '/';
	const isFile = /\.[a-z0-9]+$/i.test(normalized);
	if (!isFile && !normalized.endsWith('/')) normalized = `${normalized}/`;
	return `${base}${normalized}${hash}`;
}

export function pagePath(slug: string): string {
	const clean = slug.replace(/^\/|\/$/g, '');
	return `/${clean}/`;
}
