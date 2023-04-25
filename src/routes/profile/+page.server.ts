import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();
	if (!session) throw redirect(302, '/login');
	console.log(session);
	async function getProfile() {
		const { data, error } = await supabase
			.from('profiles')
			.select('*')
			.eq('user_id', session.user.id)
			.single();

		return data;
	}

	return {
		user: session?.user ?? null,
		profile: await getProfile()
	};
};
