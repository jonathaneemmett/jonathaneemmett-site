import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async () => {
	throw redirect(302, '/');
};

export const actions: Actions = {
	logout: async ({ locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (session) {
			const { error } = await supabase.auth.signOut();
			if (error) throw new Error(error.message);
		}

		// Redirect to home page
		throw redirect(302, '/');
	}
};
