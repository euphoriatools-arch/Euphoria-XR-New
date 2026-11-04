export function initPortfolioGallery() {
	for (const root of document.querySelectorAll<HTMLElement>('[data-gallery]')) {
		if (root.dataset.bound === 'true') continue;
		const dialog = root.querySelector<HTMLDialogElement>('dialog');
		const slides = [...root.querySelectorAll<HTMLElement>('[data-gallery-slide]')];
		const count = root.querySelector<HTMLElement>('[data-gallery-count]');
		if (!dialog || slides.length === 0) continue;
		root.dataset.bound = 'true';
		let index = 0;
		let trigger: HTMLElement | null = null;

		const show = (next: number) => {
			index = (next + slides.length) % slides.length;
			slides.forEach((slide, slideIndex) => {
				slide.toggleAttribute('hidden', slideIndex !== index);
			});
			if (count) count.textContent = `${index + 1} of ${slides.length}`;
		};

		const open = (next: number, opener: HTMLElement) => {
			trigger = opener;
			show(next);
			if (!dialog.open) dialog.showModal();
			root.querySelector<HTMLButtonElement>('[data-gallery-close]')?.focus();
		};

		root.querySelectorAll<HTMLButtonElement>('[data-gallery-open]').forEach((button) => {
			button.addEventListener('click', () => open(Number(button.dataset.galleryOpen ?? '0'), button));
		});
		root.querySelector('[data-gallery-close]')?.addEventListener('click', () => dialog.close());
		root.querySelector('[data-gallery-prev]')?.addEventListener('click', () => show(index - 1));
		root.querySelector('[data-gallery-next]')?.addEventListener('click', () => show(index + 1));
		document.addEventListener(
			'keydown',
			(event) => {
				if (!dialog.open) return;
				if (event.key === 'Escape') {
					event.preventDefault();
					event.stopPropagation();
					dialog.close();
				}
				if (event.key === 'ArrowRight') {
					event.preventDefault();
					show(index + 1);
				}
				if (event.key === 'ArrowLeft') {
					event.preventDefault();
					show(index - 1);
				}
			},
			true,
		);
		dialog.addEventListener('close', () => {
			trigger?.focus();
		});
		show(0);
	}
}
