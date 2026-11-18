const HOVER_DELAY = 150;
const desktopQuery = window.matchMedia('(min-width: 1024px)');
const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

let started = false;
let openTimer = 0;
let closeTimer = 0;
let lockedScroll = false;

function headerEl() {
	return document.querySelector<HTMLElement>('[data-header]');
}

function clearTimers() {
	window.clearTimeout(openTimer);
	window.clearTimeout(closeTimer);
}

function setMenu(name: string | null) {
	const header = headerEl();
	if (!header) return;
	for (const item of header.querySelectorAll<HTMLElement>('[data-menu]')) {
		const open = item.dataset.menu === name;
		item.classList.toggle('is-open', open);
		const trigger = item.querySelector<HTMLButtonElement>('.nav-trigger');
		const panel = item.querySelector<HTMLElement>('.mega-panel, .menu-pop');
		trigger?.setAttribute('aria-expanded', String(open));
		if (!panel) continue;
		panel.classList.toggle('is-open', open);
		if (open) panel.removeAttribute('inert');
		else panel.setAttribute('inert', '');
	}
}

function closeMenus() {
	clearTimers();
	setMenu(null);
}

function scheduleOpen(name: string) {
	clearTimers();
	openTimer = window.setTimeout(() => setMenu(name), HOVER_DELAY);
}

function scheduleClose() {
	clearTimers();
	closeTimer = window.setTimeout(() => setMenu(null), HOVER_DELAY);
}

function setScrollLock(locked: boolean) {
	const gap = locked ? Math.max(0, window.innerWidth - document.documentElement.clientWidth) : 0;
	document.documentElement.style.setProperty('--scrollbar-comp', `${gap}px`);
	document.body.classList.toggle('menu-open', locked);
	for (const element of document.querySelectorAll('main, footer')) {
		if (locked) element.setAttribute('inert', '');
		else element.removeAttribute('inert');
	}
	lockedScroll = locked;
}

function drawerEl() {
	return document.getElementById('site-drawer');
}

function toggleEl() {
	return document.querySelector<HTMLButtonElement>('.menu-toggle');
}

function focusable(container: HTMLElement) {
	return [...container.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')].filter((element) => {
		if (element.closest('[inert]')) return false;
		const style = getComputedStyle(element);
		return style.visibility !== 'hidden' && style.display !== 'none';
	});
}

function setDrawer(open: boolean, restoreFocus = false) {
	const drawer = drawerEl();
	const toggle = toggleEl();
	if (!drawer || !toggle) return;
	drawer.classList.toggle('is-open', open);
	drawer.setAttribute('aria-hidden', String(!open));
	toggle.setAttribute('aria-expanded', String(open));
	toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
	setScrollLock(open);
	if (open) {
		const focusStart = () => drawer.querySelector<HTMLButtonElement>('.drawer-close')?.focus();
		focusStart();
		window.requestAnimationFrame(focusStart);
	} else if (restoreFocus) {
		toggle.focus();
	}
}

function setAccordion(trigger: HTMLButtonElement, open: boolean) {
	const panel = document.getElementById(trigger.getAttribute('aria-controls') ?? '');
	trigger.setAttribute('aria-expanded', String(open));
	panel?.classList.toggle('is-open', open);
	if (!panel) return;
	if (open) panel.removeAttribute('inert');
	else panel.setAttribute('inert', '');
}

function closeDrawer(restoreFocus = false) {
	for (const trigger of document.querySelectorAll<HTMLButtonElement>('.acc-trigger')) {
		setAccordion(trigger, false);
	}
	setDrawer(false, restoreFocus);
}

function syncCurrent() {
	const header = headerEl();
	if (!header) return;
	const path = window.location.pathname;
	for (const link of header.querySelectorAll<HTMLAnchorElement>('a[href]')) {
		const href = link.getAttribute('href');
		if (!href || !href.startsWith('/') || href.startsWith('//')) continue;
		const current = href === '/portfolio/' ? path.startsWith('/portfolio/') : href === path;
		if (current) link.setAttribute('aria-current', 'page');
		else link.removeAttribute('aria-current');
	}
	for (const item of header.querySelectorAll<HTMLElement>('[data-menu]')) {
		item.classList.toggle('is-current', Boolean(item.querySelector('a[aria-current="page"]')));
	}
}

function syncOverlay() {
	const header = headerEl();
	const main = document.getElementById('main');
	if (!header || !main) return;
	header.classList.toggle('overlay', main.dataset.header === 'overlay');
}

let lastScrollY = 0;

function syncScroll() {
	const header = headerEl();
	if (!header) return;

	const y = window.scrollY;
	const past = y > 50;
	const goingDown = y > lastScrollY + 2;
	const goingUp = y < lastScrollY - 2;

	header.classList.toggle('is-scrolled', past);

	if (document.body.classList.contains('menu-open') || !past) {
		header.classList.remove('is-hidden');
	} else if (goingDown) {
		header.classList.add('is-hidden');
		closeMenus();
	} else if (goingUp) {
		header.classList.remove('is-hidden');
	}

	lastScrollY = y;
}

function onKeydown(event: KeyboardEvent) {
	if (event.key === 'Escape') {
		const drawer = drawerEl();
		if (drawer?.classList.contains('is-open')) {
			event.preventDefault();
			closeDrawer(true);
			return;
		}
		const header = headerEl();
		const open = header?.querySelector<HTMLElement>('[data-menu].is-open');
		if (open) {
			event.preventDefault();
			const trigger = open.querySelector<HTMLButtonElement>('.nav-trigger');
			closeMenus();
			trigger?.focus();
		}
		return;
	}

	if (event.key !== 'Tab') return;
	const drawer = drawerEl();
	if (!drawer?.classList.contains('is-open')) return;
	const items = focusable(drawer);
	if (items.length === 0) return;
	const first = items[0];
	const last = items[items.length - 1];
	const active = document.activeElement;
	const inside = active instanceof Node && drawer.contains(active);
	if (!inside) {
		event.preventDefault();
		(event.shiftKey ? last : first).focus();
		return;
	}
	if (event.shiftKey && active === first) {
		event.preventDefault();
		last.focus();
	} else if (!event.shiftKey && active === last) {
		event.preventDefault();
		first.focus();
	}
}

function bind() {
	const header = headerEl();
	if (!header || header.dataset.bound === 'true') return;
	header.dataset.bound = 'true';

	for (const item of header.querySelectorAll<HTMLElement>('[data-menu]')) {
		const name = item.dataset.menu;
		if (!name) continue;
		const trigger = item.querySelector<HTMLButtonElement>('.nav-trigger');
		trigger?.addEventListener('click', () => {
			clearTimers();
			setMenu(item.classList.contains('is-open') ? null : name);
		});
		item.addEventListener('mouseenter', () => {
			if (!desktopQuery.matches || !hoverQuery.matches) return;
			scheduleOpen(name);
		});
		item.addEventListener('mouseleave', () => {
			if (!desktopQuery.matches || !hoverQuery.matches) return;
			scheduleClose();
		});
	}

	header.addEventListener('focusout', (event) => {
		const next = event.relatedTarget;
		const open = header.querySelector<HTMLElement>('[data-menu].is-open');
		if (!open) return;
		if (next instanceof Node && open.contains(next)) return;
		closeMenus();
	});

	document.addEventListener('click', (event) => {
		const target = event.target;
		if (!(target instanceof Node)) return;
		const open = header.querySelector<HTMLElement>('[data-menu].is-open');
		if (open && !open.contains(target)) closeMenus();
	});

	header.querySelectorAll('a[href]').forEach((link) => {
		link.addEventListener('click', () => {
			closeMenus();
			if (drawerEl()?.classList.contains('is-open')) closeDrawer(false);
		});
	});

	toggleEl()?.addEventListener('click', () => {
		const open = drawerEl()?.classList.contains('is-open') ?? false;
		if (open) closeDrawer(true);
		else setDrawer(true);
	});

	drawerEl()?.querySelector<HTMLButtonElement>('.drawer-close')?.addEventListener('click', () => {
		closeDrawer(true);
	});

	for (const trigger of header.querySelectorAll<HTMLButtonElement>('.acc-trigger')) {
		setAccordion(trigger, false);
		trigger.addEventListener('click', () => {
			setAccordion(trigger, trigger.getAttribute('aria-expanded') !== 'true');
		});
	}

	document.addEventListener('keydown', onKeydown);
	window.addEventListener('scroll', syncScroll, { passive: true });
	desktopQuery.addEventListener('change', (event) => {
		if (event.matches) closeDrawer(false);
	});
	document.addEventListener('astro:after-swap', () => {
		closeMenus();
		closeDrawer(false);
		syncOverlay();
		syncCurrent();
		syncScroll();
	});

	closeMenus();
	closeDrawer(false);
	syncOverlay();
	syncCurrent();
	syncScroll();
}

export function initHeader() {
	if (started) {
		syncOverlay();
		syncCurrent();
		syncScroll();
		return;
	}
	started = true;
	bind();
	document.addEventListener('astro:page-load', () => {
		syncOverlay();
		syncCurrent();
		syncScroll();
	});
	if (lockedScroll) setScrollLock(true);
}
