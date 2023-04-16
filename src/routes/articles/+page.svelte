<script lang="ts">
	import { page } from '$app/stores';
	import Hero from '$lib/components/Hero.svelte';
	import type { Article } from '$lib/types/CustomTypes';
	import DoubleChevronRight from '$lib/components/icons/DoubleChevronRight.svelte';

	let articles: Article[] = [];

	$: $page, (articles = $page.data.articles);
</script>

<section class="articles">
	{#each articles as article}
		<div class="article">
			<h2>{article.title}</h2>
			<p>{article.body}</p>
			<a href="/articles/{article.id}">Read more</a>
		</div>
	{/each}
</section>

<style>
	.articles {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
		width: 100%;
		height: 400px;
		padding-block: 1.5rem;
	}
	.article {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 350px;
		height: 100%;
		padding: 1rem;
		border: 1px solid var(--text-primary);
		border-radius: var(--border-radius);
	}
</style>
