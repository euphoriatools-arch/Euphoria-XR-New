const AFRAME_SRC = 'https://aframe.io/releases/1.5.0/aframe.min.js';

function loadScript(src: string) {
	const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
	if (existing?.dataset.ready === 'true') return Promise.resolve();
	return new Promise<void>((resolve, reject) => {
		const script = existing ?? document.createElement('script');
		script.src = src;
		script.async = true;
		script.onload = () => {
			script.dataset.ready = 'true';
			resolve();
		};
		script.onerror = () => reject(new Error('The 360 viewer failed to load.'));
		if (!existing) document.body.append(script);
	});
}

function embedUrl(provider: string, id: string) {
	if (!/^[\w-]{6,}$/.test(id) && provider === 'youtube') return '';
	if (provider === 'youtube' && /^[A-Za-z0-9_-]{6,}$/.test(id)) {
		return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`;
	}
	if (provider === 'vimeo' && /^\d+$/.test(id)) {
		return `https://player.vimeo.com/video/${encodeURIComponent(id)}?autoplay=1&dnt=1`;
	}
	return '';
}

function mountIframe(stage: HTMLElement, src: string, title: string) {
	const iframe = document.createElement('iframe');
	iframe.src = src;
	iframe.title = title;
	iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen';
	iframe.allowFullscreen = true;
	iframe.referrerPolicy = 'strict-origin-when-cross-origin';
	stage.replaceChildren(iframe);
}

function captionTrack(captions: string) {
	if (!captions.startsWith('/') || !captions.endsWith('.vtt')) return null;
	const track = document.createElement('track');
	track.kind = 'captions';
	track.src = captions;
	track.srclang = 'en';
	track.label = 'English';
	track.default = true;
	return track;
}

function mountFile(stage: HTMLElement, src: string, poster: string, captions: string, spherical: boolean) {
	const video = document.createElement('video');
	video.controls = true;
	video.playsInline = true;
	video.preload = 'none';
	if (poster) video.poster = poster;
	if (spherical) video.id = 'sphere-video';
	const source = document.createElement('source');
	source.src = src;
	source.type = 'video/mp4';
	video.append(source);
	const track = captionTrack(captions);
	if (track) video.append(track);
	stage.replaceChildren(video);
	return video;
}

async function mountSphere(stage: HTMLElement, src: string, poster: string, captions: string) {
	const video = mountFile(stage, src, poster, captions, true);
	try {
		await loadScript(AFRAME_SRC);
		const scene = document.createElement('a-scene');
		scene.setAttribute('embedded', '');
		scene.setAttribute('vr-mode-ui', 'enabled: false');
		const sphere = document.createElement('a-videosphere');
		sphere.setAttribute('src', '#sphere-video');
		const camera = document.createElement('a-camera');
		camera.setAttribute('look-controls', 'reverseMouseDrag: true');
		scene.append(sphere, camera);
		const note = document.createElement('p');
		note.className = 'video-note';
		note.textContent = 'Drag in the viewer to look around. Use the video controls for play, pause, and captions.';
		stage.prepend(scene);
		stage.append(note);
		await video.play().catch(() => undefined);
	} catch {
		const note = document.createElement('p');
		note.className = 'video-note';
		note.textContent = 'The 360 viewer did not load. The video file is still available in the player above.';
		stage.append(note);
	}
}

export function initPortfolioVideo() {
	for (const root of document.querySelectorAll<HTMLElement>('[data-video-root]')) {
		if (root.dataset.bound === 'true') continue;
		const button = root.querySelector<HTMLButtonElement>('[data-video-play]');
		if (!button) continue;
		root.dataset.bound = 'true';
		button.addEventListener('click', () => {
			const provider = root.dataset.provider ?? '';
			const title = root.dataset.title ?? 'Project video';
			const poster = root.dataset.poster ?? '';
			const captions = root.dataset.captions ?? '';
			const src = root.dataset.src ?? '';
			const stage = document.createElement('div');
			stage.className = 'video-stage';
			button.replaceWith(stage);
			if (root.dataset.viewer === 'aframe') {
				if (!src.startsWith('/') && !src.startsWith('https://')) return;
				void mountSphere(stage, src, poster, captions);
				return;
			}
			const embed = embedUrl(provider, root.dataset.id ?? '');
			if (!embed) return;
			mountIframe(stage, embed, title);
		});
	}
}
