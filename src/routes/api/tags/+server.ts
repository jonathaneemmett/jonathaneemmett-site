import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals: { supabase } }) => {
	const { data: tags, error } = await supabase.from('tags').select('*');

	if (error) {
		return error(500, error.message);
	}

	return {
		body: tags
	};
};

export const POST: RequestHandler = async ({ request, locals: { supabase } }) => {
	const body = await request.json();
	const { data: tag, error } = await supabase.from('tags').insert(body);

	if (error) {
		return error(500, error.message);
	}

	return {
		body: tag
	};
};

export const PUT: RequestHandler = async ({ request, locals: { supabase } }) => {
	const body = await request.json();
	const { data: tag, error } = await supabase.from('tags').update(body).eq('id', body.id);

	if (error) {
		return error(500, error.message);
	}

	return {
		body: tag
	};
};

export const DELETE: RequestHandler = async ({ request, locals: { supabase } }) => {
	const body = await request.json();
	const { data: tag, error } = await supabase.from('tags').delete().eq('id', body.id);

	if (error) {
		return error(500, error.message);
	}

	return {
		body: tag
	};
};
