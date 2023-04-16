import type { PageServerLoad } from './$types';
import type { Article } from '$lib/types/CustomTypes';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
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
		articles: await getArticles()
	};
};
