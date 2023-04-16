import type { PageServerLoad } from './$types';
import type { Article } from '$lib/types/CustomTypes';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	// subscribe
	// const mySubscription = supabase
	// 	.channel('schema-db-changges')
	// 	.on(
	// 		'postgres_changes',
	// 		{
	// 			// listen to all events
	// 			event: 'INSERT',
	// 			schema: 'public',
	// 			table: 'articles'
	// 		},
	// 		(payload: any) => {
	// 			console.log('payload', payload);

	// 			changedArticle = payload.new;
	// 			return;
	// 		}
	// 	)
	// 	.subscribe();

	async function getArticles(): Promise<Article[]> {
		const { data: articles, error } = await supabase
			.from('articles')
			.select('*')
			.order('created_at', { ascending: false })
			.limit(3);

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
