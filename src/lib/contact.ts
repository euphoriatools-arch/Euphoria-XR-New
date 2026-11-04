import { servicePages } from '../data/services';

export const serviceInterestOptions = [
	...servicePages.map((page) => ({ value: page.slug, label: page.navLabel })),
	{ value: 'unsure', label: 'Not sure yet' },
] as const;

const allowedInterests = new Set(serviceInterestOptions.map((option) => option.value));

export type ContactPayload = {
	name: string;
	email: string;
	company: string;
	service: string;
	message: string;
	company_website: string;
};

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function readContactPayload(input: Record<string, unknown>): ContactPayload {
	const value = (key: string) => (typeof input[key] === 'string' ? input[key].trim() : '');
	return {
		name: value('name'),
		email: value('email'),
		company: value('company'),
		service: value('service'),
		message: value('message'),
		company_website: value('company_website'),
	};
}

export function validateContact(payload: ContactPayload): ContactErrors {
	const errors: ContactErrors = {};
	if (payload.name.length < 2 || payload.name.length > 80) {
		errors.name = 'Enter your name (2–80 characters).';
	}
	if (!emailPattern.test(payload.email) || payload.email.length > 120) {
		errors.email = 'Enter a valid email address.';
	}
	if (payload.company.length > 120) {
		errors.company = 'Company names must be 120 characters or fewer.';
	}
	if (!allowedInterests.has(payload.service as (typeof serviceInterestOptions)[number]['value'])) {
		errors.service = 'Choose a service from the list.';
	}
	if (payload.message.length < 20 || payload.message.length > 5000) {
		errors.message = 'Tell us a little more (20–5000 characters).';
	}
	return errors;
}

export function isHoneypotTripped(payload: ContactPayload): boolean {
	return payload.company_website.length > 0;
}

/**
 * Plug your provider in here.
 * Formspree, HubSpot, Resend, or an internal CRM should send `payload` and
 * return `{ delivered: true }` only after the provider accepts it.
 * Until then the API tells the visitor to email the studio directly.
 *
 * TODO: Connect a real form provider before launch.
 */
export async function deliverContact(payload: ContactPayload): Promise<{ delivered: boolean }> {
	void payload;
	return { delivered: false };
}
