export function initCaseStudies() {
	const root = document.querySelector<HTMLElement>('[data-case-studies]');
	if (!root || root.dataset.bound === 'true') return;
	root.dataset.bound = 'true';

	const selects = [...root.querySelectorAll<HTMLSelectElement>('select[data-case-filter]')];
	const cards = [...root.querySelectorAll<HTMLElement>('[data-case-card]')];
	const count = root.querySelector<HTMLElement>('[data-case-count]');
	const empty = root.querySelector<HTMLElement>('[data-case-empty]');
	const wide = window.matchMedia('(min-width: 701px)');
	const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

	const apply = () => {
		const selected = Object.fromEntries(selects.map((select) => [select.dataset.caseFilter, select.value]));
		let visible = 0;
		for (const card of cards) {
			const match = Object.entries(selected).every(([key, value]) => value === 'all' || card.dataset[key] === value);
			card.hidden = !match;
			if (!match) {
				card.style.transform = '';
				continue;
			}
			const offset = visible % 2 === 1 && wide.matches && !reduce.matches;
			card.style.transform = offset ? 'translateY(68px)' : '';
			visible += 1;
		}
		if (count) count.textContent = `Showing ${visible} of ${cards.length} case studies`;
		if (empty) empty.hidden = visible !== 0;
	};

	for (const select of selects) select.addEventListener('change', apply);
	root.querySelector('[data-case-clear]')?.addEventListener('click', () => {
		for (const select of selects) select.value = 'all';
		apply();
	});
	wide.addEventListener('change', apply);
	apply();
}
