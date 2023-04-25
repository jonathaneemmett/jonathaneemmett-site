<script lang="ts">
	import { enhance } from '$app/forms';
	import { marked } from 'marked';
	import axios from 'axios';
	import type { Article } from '$lib/types/CustomTypes';
	import { onMount, onDestroy } from 'svelte';
	export let user: any = '';
	export let article: Article | undefined;

	let body: string = article?.body ?? '';
	let title: string = article?.title ?? '';
	let tags: string[] = article?.tags ?? [];

	let parsedBody: string = body;
	let interval: any = null;
	let draft: Article | undefined;

	$: {
		parsedBody = marked(body);
	}

	async function autoSave() {
		if (!title || !body) return;

		if (!draft) {
			// api for drafts
			// create a draft
			let newDraft = {
				user_id: user.id,
				title,
				tags,
				body
			};

			// save the draft
			let res = await axios.post('/api/drafts', newDraft);
			let [data] = [...res.data];

			draft = data as Article;
		} else {
			// update the draft
			let updatedDraft = {
				id: draft.id,
				user_id: user.id,
				title,
				tags,
				body
			};
			// save the draft
			let res = await axios.put('/api/drafts', updatedDraft);
			// let [data] = [...res.data];
			// draft = data as Article;

			draft = updatedDraft as Article;
		}
	}

	onMount(() => {
		interval = setInterval(autoSave, 10000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<section class="articleForm">
	<div class="articleForm__content">
		<div class="articleForm__header">
			<h1 class="articleForm__title">{article ? 'Edit' : 'Add'} Article</h1>
		</div>
		<form method="POST" action="?/add" use:enhance>
			<label for="title" class="visually__hidden">Title</label>
			<input type="text" id="title" name="title" placeholder="Title" bind:value={title} />

			<!-- TODO: filter tags as user types, then on tab or enter create a pill -->
			<label for="tags" class="visually__hidden">Tags</label>
			<input type="text" id="tags" name="tags" placeholder="Tags" />

			<label for="body" class="visually__hidden">Body</label>
			<textarea id="body" name="body" rows="30" placeholder="Body" bind:value={body} />
			<div class="articleForm__footer">
				<button class="btn btn__secondary--outline">Cancel</button>
				<button class="btn btn__secondary--outline">Save</button>
				<button class="btn btn__secondary">Publish</button>
			</div>
		</form>
	</div>
	<div class="articleForm__preview">
		<h1>Preview</h1>
		{@html parsedBody}
	</div>
</section>

<style>
	.articleForm {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}

	.articleForm__content {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.articleForm__header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--accent-primary);
		border-bottom: 1px solid var(--border-primary);
		margin-block-end: 1rem;
		width: 100%;
		max-width: 30rem;
	}

	.articleForm__title {
		font-size: 2rem;
		font-weight: 700;
		margin-block-end: 1rem;
	}

	.articleForm__footer {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		gap: 1rem;
	}

	.articleForm__footer button {
		max-width: 10rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	input {
		width: 100%;
		max-width: 30rem;
		padding: 1rem;
		border: 1px solid var(--border-primary);
	}

	input::placeholder,
	textarea::placeholder {
		color: var(--text-primary);
		font-weight: 500;
		font-size: 1rem;
	}

	textarea {
		width: 100%;
		padding: 1rem;
		border: 1px solid var(--border-primary);
	}

	.articleForm__preview {
		padding-block: 2rem;
		width: 100%;
	}

	.articleForm__preview h1 {
		font-size: 2rem;
		font-weight: 700;
		margin-block-end: 1rem;
	}

	:global(pre) {
		border: 1px solid var(--border-primary);
		padding: 1rem;
		margin-block: 1rem;
		background-color: var(--bg-tertiary);
		border-radius: var(--border-radius);
	}
</style>
