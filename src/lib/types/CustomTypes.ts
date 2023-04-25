export interface User {
	id: number;
	email: string;
	role: string;
}

export interface Profile {
	id: number;
	user_id: number;
	name: string;
	avatar_url: string;
	created_at: string;
}

export interface Article {
	id: number;
	user_id: number;
	author: string;
	title: string;
	tags: string[];
	body: string;
	created_at: string;
	updated_at: string;
}
