<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Article } from '$lib/types/CustomTypes';

	const dispatch = createEventDispatcher();

	export let articles: Article[] = [];
</script>

<section class="articles">
	<div class="articles__header">
		<h2>Current Articles</h2>
	</div>
	<ul>
		{#each articles as article}
			<li>
				<h3>{article.title}</h3>
				<p>{article.userId}</p>
				<p>{article.body.substring(0, 100)}</p>
				<a href="#" on:click|preventDefault={() => dispatch('edit', article)}>Edit</a>
				<a href="#" on:click|preventDefault={() => dispatch('delete', article.id)}>Delete</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.articles {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: auto;
		color: var(--text-tertiary);
	}

	.articles__header {
		display: flex;
		flex-direction: row;
		width: 100%;
		max-width: 30rem;
		height: auto;
		padding: 1rem;
		margin-block-end: 1rem;
		color: var(--text-secondary);
		border-bottom: 1px solid var(--border-primary);
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 600;
	}

	ul {
		list-style: none;
		float: left;
		width: auto;
	}

	li {
		list-style: none;
		float: left;
		margin: 0;
		padding: 5px 10px;
		width: 100%;
	}

	h3 {
		list-style: none;
		float: left;
		padding: 5px 10px;
	}

	a {
		list-style: none;
		float: left;
		padding: 5px 10px;
		width: 100px;
		text-align: center;
		color: var(--text-tertiary);
	}

	a:hover {
		color: var(--text-secondary);
	}

	p {
		list-style: none;
		float: left;
		padding: 5px 10px;
		width: 200px;
	}
</style>
