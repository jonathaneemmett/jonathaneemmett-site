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
	register: async ({ locals: { supabase }, request }) => {
		const res = Object.fromEntries(await request.formData());
		const { firstName, lastName, email, password, password2 } = res;

		// Simple validation
		if (!firstName || !lastName || !email || !password || !password2) {
			return fail(400, {
				register_error: 'All fields are required',
				firstName,
				lastName,
				email
			});
		} else if (password !== password2) {
			return fail(400, {
				register_error: 'Passwords do not match',
				firstName,
				lastName,
				email
			});
		} else if (password.length < 8) {
			return fail(400, {
				register_error: 'Password must be at least 8 characters',
				firstName,
				lastName,
				email
			});
		}

		// Create the user
		const { data: user, error } = await supabase.auth.signUp({
			email: email.toString(),
			password: password.toString()
		});

		if (error) {
			console.log(error.message);
			return fail(400, {
				register_error: error.message,
				firstName,
				lastName,
				email
			});
		}

		if (user) {
			throw redirect(302, '/confirmation');
		}

		return fail(400, { register_error: 'Something went wrong' });
	}
};
