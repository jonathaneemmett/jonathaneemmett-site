import { redirect, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Article } from '$lib/types/CustomTypes';

export const load: PageServerLoad = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();
	if (!session) throw redirect(302, '/login');

	async function getArticles(): Promise<Article[]> {
		const { data: articles, error } = await supabase
			.from('articles')
			.select('*')
			.order('created_at', { ascending: false });

		if (error) {
			console.error('error', error);
			return [];
		}

		return articles;
	}

	return {
		articles: await getArticles(),
		user: session?.user ?? null
	};
};
