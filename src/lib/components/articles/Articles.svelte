<script lang="ts">
	import type { Article } from '$lib/types/CustomTypes';
	import DoubleChevronRight from '$lib/components/icons/DoubleChevronRight.svelte';
	import ArticleItem from './ArticleItem.svelte';
	import NotFound from '../shared/NotFound.svelte';

	export let articles: Article[] = [];
	export let limit: number = 0;
	export let tag: string = '';

	if (limit > 0) {
		articles = articles.slice(0, limit);
	}
</script>

<section class="articles">
	<div class="article__content">
		{#each articles as article}
			<ArticleItem {article} />
		{:else}
			<NotFound message={`No articles found${tag !== '' ? ` for ${tag}` : ''}.`} />
		{/each}
	</div>
	<div class="article__footer">
		{#if limit > 0}
			<a href="/articles" class="more">
				Read More <DoubleChevronRight color="#6852e1" />
			</a>
		{/if}
	</div>
</section>

<style>
	.articles {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;
		padding-block: 1rem;
		padding-inline: 1rem;
	}

	.article__content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
		max-width: 1290px;
	}

	.article__footer {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
		max-width: 1290px;
		height: 50px;
	}

	.more {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		cursor: pointer;
		gap: 0.5rem;
		color: var(--text-secondary);
	}

	@media screen and (max-width: 62.5em) {
		.article__content {
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
