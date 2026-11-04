const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const autoSelector = [
	'.section',
	'.page-hero',
	'.about-band',
	'.card',
	'.project',
	'.industry-card',
	'.related-card',
	'.stat-card',
	'.cap-item',
	'.process-list article',
].join(',');

let observer: IntersectionObserver | null = null;
let started = false;

function inView(element: HTMLElement) {
	const rect = element.getBoundingClientRect();
	return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

function collect(): HTMLElement[] {
	for (const element of document.querySelectorAll<HTMLElement>(autoSelector)) {
		if (!element.hasAttribute('data-reveal')) element.setAttribute('data-reveal', '');
	}
	return [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
}

function stagger(elements: HTMLElement[]) {
	const groups = new Map<HTMLElement, HTMLElement[]>();
	for (const element of elements) {
		const parent = element.parentElement;
		if (!parent) continue;
		const list = groups.get(parent) ?? [];
		list.push(element);
		groups.set(parent, list);
	}
	for (const [parent, list] of groups) {
		const display = getComputedStyle(parent).display;
		const grouped = display === 'grid' || display === 'flex';
		list.forEach((element, index) => {
			element.style.setProperty('--reveal-delay', grouped ? `${index * 80}ms` : '0ms');
		});
	}
}

function scan() {
	if (reduceMotion.matches) {
		document.documentElement.classList.remove('reveal-ready', 'hero-animate');
		for (const element of collect()) element.classList.add('is-revealed');
		return;
	}

	const elements = collect().filter((element) => !element.classList.contains('is-revealed'));
	for (const element of elements) {
		if (inView(element)) element.classList.add('is-revealed');
	}
	stagger(elements);
	document.documentElement.classList.add('reveal-ready');

	if (!observer) {
		observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					entry.target.classList.add('is-revealed');
					observer?.unobserve(entry.target);
				}
			},
			{ threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
		);
	}

	for (const element of elements) {
		if (!element.classList.contains('is-revealed')) observer.observe(element);
	}
}

export function initReveal() {
	if (!started) {
		started = true;
		reduceMotion.addEventListener('change', scan);
		document.addEventListener('astro:page-load', scan);
	}
	scan();
}
