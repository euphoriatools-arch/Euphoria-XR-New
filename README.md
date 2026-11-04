# EuphoriaXR

Marketing site for EuphoriaXR. Astro, TypeScript, and Tailwind, with almost no client-side JavaScript.

The visual system follows the interactive homepage reference: paper background `#f7f7f4`, ink `#101923`, and signal red `#ff253d`. Body type is self-hosted Roboto. Small red text on light backgrounds uses `#d2142c` so it meets WCAG AA. Decorative red stays `#ff253d`.

## Run

```sh
npm install
npm run assets
npm run dev
```

`npm run dev` starts the site at `http://localhost:4321`.

```sh
npm run build
npm run preview
```

`npm run build` regenerates `robots.txt`, `llms.txt`, and `llms-full.txt` from the site config, builds `dist/`, and checks titles, descriptions, canonical URLs, JSON-LD, and internal links.

Astro 7 requires Node `>=22.23.4`. `npm run build` was verified on Node 22.23.4.

## Edit `src/config/site.ts`

This file is the only place for the brand name, domain, default title and description, social image, Twitter handle, email, phone, address, social links, founding year, and the contact form endpoint.

Leave phone, street address, or founding year empty until you have the real values. Empty fields are omitted from JSON-LD. Social profile URLs are included in structured data only when they point at a profile path, not the network homepage.

After changing `siteUrl`, run `npm run build` so `robots.txt`, the sitemap, and `llms.txt` pick up the new domain.

## Add a service or industry page

1. Add an object to `src/data/services.ts` or `src/data/industries.ts`.
2. Set `slug` to the final URL path without slashes at the ends. Nested pages keep the folder in the slug, for example `services/branded-ar-filters`.
3. Set one `h1` that contains the primary keyword, a title of 50–60 characters, and a description of 140–160 characters.
4. Fill intro, benefits, process, use cases, deliverables, 3–6 FAQs, and at least three `related` slugs.
5. Put secondary keywords in the body or FAQs. Do not create a second page for a keyword variation.

`src/pages/[...slug].astro` builds every entry. The dev server and `npm run build` both refuse a page that misses the length, keyword, or related-link rules.

## Add a project

1. Copy a file in `src/content/projects/` to a new Markdown or MDX file. The filename can match the slug.
2. Set `title`, `slug`, and `category`. The category must be one of `augmented-reality`, `virtual-reality`, `360-videography`, `blockchain`, or `artificial-intelligence`.
3. Set `client.permissionGranted` to `true` only when the client has agreed to be named. Otherwise the page shows "Confidential client, [industry]" and hides the logo.
4. Point `heroImage`, `gallery`, and `video.poster` at image files. Each image needs alt text. Width and height come from the file.
5. Write 2–4 paragraphs in the Markdown body. That body is the project description.
6. Fill outcome, 4–6 methodology steps, tags, `featured`, and `seo`. The SEO title must be 50–60 characters and the description 140–160.
7. For a file video, put the mp4 in `public/` and set `video.provider` to `file`. Add `video.captions` as a `/path/file.vtt` when you have a transcript. 360 projects load the spherical viewer only on that page, after the visitor presses play.
8. Run `npm run build`. The new URL is `/portfolio/[category]/[slug]/`, and it is added to the sitemap and `llms.txt`.

Sample projects in `src/content/projects/` are placeholders. TODO: replace them, and replace the sample awards in `src/content/categories.ts`, before launch.

## Keyword mapping

The map lives on each page as `keywords.primary` and `keywords.secondary`.

`src/config/keywords.ts` only aggregates those fields. Change a phrase on the page, not in the aggregate file. Variations of a keyword stay on the existing URL.

## Contact form

The form posts to `site.form.endpoint` (`/api/contact` by default).

- Browser and server both use `src/lib/contact.ts`.
- The honeypot field is `company_website`. Filled submissions get a fake success and are not delivered.
- `deliverContact()` in that same file is the plug-in point. It returns `{ delivered: false }` until you connect Formspree, HubSpot, Resend, or your CRM.
- `astro dev` runs the POST handler. A static host will not. Either point `site.form.endpoint` at your provider, or add an Astro server adapter and set `export const prerender = false` in `src/pages/api/contact.ts`.

## TODO

- Confirm the production domain in `src/config/site.ts`. It is currently `https://euphoriaxr.com`.
- Replace the phone, postal address, and founding year. They are blank on purpose.
- Replace `twitterHandle`, LinkedIn, and Instagram with the real profiles. The current social URLs are the generic homepages from the design reference.
- Replace `/public/brand/logo.svg`, `logo-dark.svg`, and `logo.png` if a designer supplies a finished wordmark. The current files are a set wordmark in Helvetica so the name stays readable without a web font inside the SVG.
- Replace stock photographs in `src/assets/photos/` with original EuphoriaXR images. They are Unsplash stand-ins.
- Replace the three featured projects and the home scenarios with verified case studies and testimonials. They are marked in `src/data/home.ts`.
- Connect `deliverContact()` before launch.
- Have counsel review `/privacy-policy/` and `/terms/`.
- Publish blog posts at `/blog/` and add Article schema per post. The index is a coming-soon state.
