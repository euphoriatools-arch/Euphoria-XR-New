import vr from '../assets/photos/hero-vr.jpg';
import ai from '../assets/photos/work-ai.jpg';
import ar from '../assets/photos/work-architecture.jpg';
import city from '../assets/photos/hero-city.jpg';
import lab from '../assets/photos/about-lab.jpg';
import cosmos from '../assets/photos/work-cosmos.jpg';
import abstract from '../assets/photos/hero-abstract.jpg';
import ridge from '../assets/photos/contact-ridge.jpg';
import type { ImageKey } from './types';

export const photos = {
	vr,
	ai,
	ar,
	city,
	lab,
	cosmos,
	abstract,
	ridge,
} as const;

export function photoFor(key: ImageKey) {
	return photos[key];
}
