import { redirect, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();
	if (!session) {
		throw redirect(302, '/login');
	}

	async function getTags() {
		const { data: tags, error } = await supabase.from('tags').select('*');
		if (error) {
			console.error('error', error);
			return [];
		}
		return tags;
	}

	return {
		tags: await getTags(),
		user: session?.user ?? null
	};
};
