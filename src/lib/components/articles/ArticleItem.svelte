<script lang="ts">
	import type { Article } from '$lib/types/CustomTypes';
	import DoubleChevronRight from '$lib/components/icons/DoubleChevronRight.svelte';
	export let article: Article;
</script>

<div class="article">
	<div class="article__content">
		<h2>{article.title}</h2>
		<p>{article.body}</p>
	</div>
	<div class="article__footer">
		<div class="tags">
			<span class="tag">Tag 1</span>
			<span class="tag">Tag 2</span>
			<span class="tag">Tag 3</span>
		</div>
		<a href="/articles/{article.id}" class="more">
			Read more <DoubleChevronRight color="#ccc" />
		</a>
	</div>
</div>

<style>
	.article {
		display: flex;
		flex-direction: column;

		border: 1px solid var(--border-secondary);
		border-radius: var(--border-radius);
	}

	.article__content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-block: 2rem;
		padding-inline: 2rem;
	}

	.article__footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: var(--bg-secondary);
		padding-block: 1rem;
		padding-inline: 0.5rem;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: var(--text-secondary);
	}

	p {
		font-size: 1.25rem;
		font-weight: 400;
		margin-bottom: 1rem;
		color: var(--text-secondary);
	}

	.more {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1rem;
		color: var(--text-primary);
		gap: 0.5rem;
	}

	.more:hover {
		color: var(--text-tertiary);
	}

	.tags {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.tag {
		--width: 60px;
		--height: calc(var(--width) / 2);
		border: 1px solid var(--border-primary);
		border-radius: var(--border-radius);
		padding: 0.25rem 0.5rem;
	}

	@media screen and (max-width: 62.5em) {
		.article {
			width: 100%;
		}
	}
</style>
