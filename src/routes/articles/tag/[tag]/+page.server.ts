import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Article } from '$lib/types/CustomTypes';

export const load: PageServerLoad = async ({ params, locals: { supabase } }) => {
	const { tag } = params;
	if (!tag) return error(404, 'tag is undefined');
	console.log('tag', tag);
	async function getArticles(): Promise<Article[]> {
		const { data: articles, error } = await supabase
			.from('articles')
			.select('*')
			.order('created_at', { ascending: false });

		const filtered = articles.filter((article: Article) => article.tags?.includes(tag));

		if (error) {
			console.error('error', error);
			return [];
		}

		return filtered;
	}

	return {
		articles: await getArticles(),
		tag: tag
	};
};
