<script lang="ts">
	import type { Article } from '$lib/types/CustomTypes';
	import DoubleChevronRight from '$lib/components/icons/DoubleChevronRight.svelte';
	import ArticleItem from './ArticleItem.svelte';

	export let articles: Article[] = [];
	export let limit: number = 0;

	if (limit > 0) {
		articles = articles.slice(0, limit);
	}
</script>

<section class="articles">
	{#each articles as article}
		<ArticleItem {article} />
	{/each}
	{#if limit > 0}
		<a href="/articles" class="more">
			<DoubleChevronRight color="#fff" />
		</a>
	{/if}
</section>

<style>
	.articles {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
		width: 100%;
		max-width: 1290px;
		height: 100%;
		min-height: 400px;
		padding-block: 1rem;
		padding-inline: 1rem;
	}

	.more {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 20px;
		cursor: pointer;
	}

	@media screen and (max-width: 62.5em) {
		.articles {
			flex-direction: column;
		}

		.more {
			width: 100%;
			height: 50px;
			border: 1px solid var(--text-primary);
			border-radius: var(--border-radius);
		}
	}
</style>
