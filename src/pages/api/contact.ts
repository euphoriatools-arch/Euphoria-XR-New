import type { APIRoute } from 'astro';
import { site } from '../../config/site';
import { deliverContact, isHoneypotTripped, readContactPayload, validateContact } from '../../lib/contact';

function json(body: unknown, status = 200): Response {
	return new Response(JSON.stringify(body), {
		status,
		headers: { 'content-type': 'application/json; charset=utf-8' },
	});
}

export const GET: APIRoute = () =>
	json({
		ok: false,
		message: 'POST a contact form submission to this URL. Delivery is configured in src/lib/contact.ts.',
	});

export const POST: APIRoute = async ({ request }) => {
	let raw: Record<string, unknown> = {};
	const contentType = request.headers.get('content-type') ?? '';
	if (contentType.includes('application/json')) {
		const parsed: unknown = await request.json();
		if (parsed && typeof parsed === 'object') raw = parsed as Record<string, unknown>;
	} else {
		const form = await request.formData();
		raw = Object.fromEntries(form.entries());
	}

	const payload = readContactPayload(raw);
	if (isHoneypotTripped(payload)) {
		return json({ ok: true, message: 'Thanks. We have your note.' });
	}

	const errors = validateContact(payload);
	if (Object.keys(errors).length > 0) {
		return json({ ok: false, message: 'Please correct the highlighted fields.', errors }, 400);
	}

	const delivery = await deliverContact(payload);
	if (!delivery.delivered) {
		return json(
			{
				ok: true,
				message: `Thanks. Email ${site.email} and the studio will reply. Online delivery is not connected yet.`,
			},
			202,
		);
	}

	return json({ ok: true, message: 'Thanks. We have your note and will reply soon.' });
};
