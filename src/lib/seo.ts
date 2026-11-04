/** Throws during build when a title or description is outside the site range. */
export function assertMeta(label: string, title: string, description: string) {
	if (title.length < 50 || title.length > 60) {
		throw new Error(`${label} title is ${title.length} characters: ${title}`);
	}
	if (description.length < 140 || description.length > 160) {
		throw new Error(`${label} description is ${description.length} characters: ${description}`);
	}
}
