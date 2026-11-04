import { getCollection, type CollectionEntry } from 'astro:content';
import { categories, categoryBySlug, type CategorySlug } from '../content/categories';

export type ProjectEntry = CollectionEntry<'projects'>;

export function projectPath(category: string, slug: string) {
	return `/portfolio/${category}/${slug}/`;
}

export function categoryPath(slug: string) {
	return `/portfolio/${slug}/`;
}

export function clientLabel(client: ProjectEntry['data']['client']) {
	if (client.permissionGranted) return client.name;
	return `Confidential client, ${client.industry}`;
}

export function descriptionParagraphs(body: string | undefined) {
	return (body ?? '')
		.split(/\n\s*\n/)
		.map((paragraph) => paragraph.trim())
		.filter((paragraph) => paragraph.length > 0 && !paragraph.startsWith('<!--') && !paragraph.startsWith('{/*'));
}

export function sortProjects(projects: ProjectEntry[]) {
	return [...projects].sort((a, b) => {
		if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
		if (a.data.year !== b.data.year) return b.data.year - a.data.year;
		return a.data.title.localeCompare(b.data.title);
	});
}

export function relatedProjects(projects: ProjectEntry[], current: ProjectEntry, limit = 3) {
	return sortProjects(
		projects.filter((project) => project.data.category === current.data.category && project.id !== current.id),
	).slice(0, limit);
}

export function projectNeighbors(projects: ProjectEntry[], current: ProjectEntry) {
	const ordered = sortProjects(projects);
	const index = ordered.findIndex((project) => project.id === current.id);
	return {
		previous: index > 0 ? ordered[index - 1] : undefined,
		next: index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : undefined,
	};
}

export async function loadProjects() {
	const projects = await getCollection('projects');
	const slugs = new Set<string>();
	const titles = new Set<string>();
	for (const project of projects) {
		if (slugs.has(project.data.slug)) throw new Error(`Duplicate project slug: ${project.data.slug}`);
		slugs.add(project.data.slug);
		if (titles.has(project.data.seo.title)) throw new Error(`Duplicate project title: ${project.data.seo.title}`);
		titles.add(project.data.seo.title);
		if (!categoryBySlug(project.data.category)) {
			throw new Error(`${project.data.slug} uses an unknown category: ${project.data.category}`);
		}
		const paragraphs = descriptionParagraphs(project.body);
		if (paragraphs.length < 2 || paragraphs.length > 4) {
			throw new Error(`${project.data.slug} needs 2–4 description paragraphs, found ${paragraphs.length}`);
		}
	}
	if (projects.length === 0) throw new Error('Add at least one file to src/content/projects/');
	for (const category of categories) {
		const count = projects.filter((project) => project.data.category === category.slug).length;
		if (count === 0) throw new Error(`Add a sample project for ${category.slug}`);
	}
	return sortProjects(projects);
}

export function projectsInCategory(projects: ProjectEntry[], slug: CategorySlug) {
	return sortProjects(projects.filter((project) => project.data.category === slug));
}
