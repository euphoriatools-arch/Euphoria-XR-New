import { awardLogos } from './awardLogos';

export type Award = {
	name: string;
	nomination: string;
	year: string;
	icon: 'telly' | 'android-xr' | 'logo';
	logoSrc?: string;
};

/** About awards — same set shown in the home Awards slider. */
export const awards: Award[] = awardLogos.map((logo) => {
	const yearMatch = logo.alt.match(/\b(20\d{2})\b/);
	const isTelly = /telly/i.test(logo.alt);
	return {
		name: logo.alt,
		nomination: '—',
		year: yearMatch?.[1] ?? '—',
		icon: isTelly ? 'telly' : 'logo',
		logoSrc: logo.src,
	};
});
