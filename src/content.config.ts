import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categorySlugs } from './content/categories';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
	schema: ({ image }) => {
		const media = {
			poster: image(),
			posterAlt: z.string().min(1),
			title: z.string().min(1),
			captions: z
				.string()
				.regex(/^\/.+\.vtt$/, 'Captions must be a site path ending in .vtt')
				.optional(),
		};
		return z.object({
			title: z.string().min(1),
			slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
			category: z.enum(categorySlugs),
			client: z
				.object({
					name: z.string().min(1),
					industry: z.string().min(1),
					logo: image().optional(),
					logoAlt: z.string().min(1).optional(),
					permissionGranted: z.boolean(),
				})
				.refine((client) => !client.logo || Boolean(client.logoAlt), {
					message: 'logoAlt is required when a client logo is set',
				}),
			year: z.number().int().min(1990).max(2100),
			duration: z.string().min(1),
			teamSize: z.string().min(1).optional(),
			heroImage: z.object({
				image: image(),
				alt: z.string().min(1),
			}),
			gallery: z
				.array(
					z.object({
						image: image(),
						alt: z.string().min(1),
						caption: z.string().min(1),
					}),
				)
				.min(1),
			video: z.discriminatedUnion('provider', [
				z.object({
					provider: z.literal('youtube'),
					id: z.string().regex(/^[A-Za-z0-9_-]{6,}$/),
					...media,
				}),
				z.object({
					provider: z.literal('vimeo'),
					id: z.string().regex(/^\d+$/),
					...media,
				}),
				z.object({
					provider: z.literal('file'),
					src: z.string().regex(/^(\/|https:\/\/).+/),
					...media,
				}),
			]),
			testimonial: z
				.object({
					quote: z.string().min(1),
					name: z.string().min(1),
					role: z.string().min(1),
					company: z.string().min(1),
					photo: image().optional(),
					photoAlt: z.string().min(1).optional(),
				})
				.refine((item) => !item.photo || Boolean(item.photoAlt), {
					message: 'photoAlt is required when a testimonial photo is set',
				})
				.optional(),
			summary: z.string().min(1),
			outcome: z.object({
				metrics: z
					.array(
						z.object({
							metric: z.string().min(1),
							value: z.string().min(1),
						}),
					)
					.min(1),
				paragraph: z.string().min(1),
			}),
			methodology: z
				.array(
					z.object({
						step: z.number().int().min(1),
						title: z.string().min(1),
						description: z.string().min(1),
					}),
				)
				.min(4)
				.max(6),
			tags: z.array(z.string().min(1)).min(1),
			featured: z.boolean(),
			seo: z.object({
				title: z.string().refine((value) => value.length >= 50 && value.length <= 60, (value) => ({
					message: `SEO title is ${value.length} characters (need 50–60)`,
				})),
				description: z.string().refine((value) => value.length >= 140 && value.length <= 160, (value) => ({
					message: `SEO description is ${value.length} characters (need 140–160)`,
				})),
			}),
		});
	},
});

export const collections = { projects };
