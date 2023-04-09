import { redirect, fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ url, locals: { getSession } }) => {
	const session = await getSession();
	if (session) {
		throw redirect(302, '/profile');
	}

	return {
		url: url.origin
	};
};

export const actions: Actions = {
	login: async ({ locals: { supabase }, request }) => {
		const res = Object.fromEntries(await request.formData());
		const { email, password } = res;

		// Simple validation
		if (!email || !password) return fail(400, { login_error: 'All fields are required', email });

		// Attempt to login
		const { error } = await supabase.auth.signInWithPassword({
			email: email.toString(),
			password: password.toString()
		});

		if (error) return fail(400, { login_error: error.message, email });

		throw redirect(302, '/profile');
	}
};
