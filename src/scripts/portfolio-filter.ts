const KNOWN = [
	'augmented-reality',
	'virtual-reality',
	'360-videography',
	'blockchain',
	'artificial-intelligence',
];

export function applyPortfolioFilter() {
	const root = document.querySelector<HTMLElement>('[data-portfolio-index]');
	if (!root) {
		document.documentElement.removeAttribute('data-portfolio-category');
		return;
	}
	const requested = new URLSearchParams(window.location.search).get('category') ?? '';
	const active = KNOWN.includes(requested) ? requested : '';
	if (active) document.documentElement.setAttribute('data-portfolio-category', active);
	else document.documentElement.removeAttribute('data-portfolio-category');

	for (const link of root.querySelectorAll<HTMLAnchorElement>('[data-filter-link]')) {
		const value = link.dataset.filterLink ?? '';
		if (value === active) link.setAttribute('aria-current', 'page');
		else link.removeAttribute('aria-current');
	}

	const cards = [...root.querySelectorAll<HTMLElement>('[data-project-category]')];
	const visible = cards.filter((card) => !active || card.dataset.projectCategory === active).length;
	const empty = root.querySelector<HTMLElement>('[data-filter-empty]');
	if (empty) empty.hidden = visible > 0;
	const status = root.querySelector<HTMLElement>('[data-filter-status]');
	if (status) {
		const label = active ? active.replaceAll('-', ' ') : 'all categories';
		status.textContent = visible > 0 ? `Showing ${visible} projects in ${label}.` : `No projects in ${label}.`;
	}
}

export function initPortfolioFilter() {
	applyPortfolioFilter();
}

document.addEventListener('astro:before-swap', () => {
	document.documentElement.removeAttribute('data-portfolio-category');
});
