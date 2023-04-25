import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, locals: { supabase } }) => {
	const body = await request.json();
	const { data: draft, error: err } = await supabase.from('drafts').insert(body).select('*');

	if (err) {
		throw error(500, err.message);
	}

	return new Response(JSON.stringify(draft));
};

export const PUT: RequestHandler = async ({ request, locals: { supabase } }) => {
	const { id, user_id, title, body, tags } = await request.json();

	const { data: draft, error: err } = await supabase
		.from('drafts')
		.update(
			{
				user_id,
				title,
				body,
				tags,
				updated_at: new Date()
			},
			{ returning: 'minimal' }
		)
		.eq('id', id)
		.select('*');

	if (err) {
		throw error(500, err.message);
	}

	return new Response(JSON.stringify(draft));
};

export const DELETE: RequestHandler = async ({ request, locals: { supabase } }) => {
	const body = await request.json();

	const { data: draft, error } = await supabase.from('drafts').delete().eq('id', body.id);

	if (error) {
		return error(500, error.message);
	}

	return {
		body: draft
	};
};
