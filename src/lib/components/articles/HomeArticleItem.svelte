<script lang="ts">
	import type { Article } from '$lib/types/CustomTypes';
	export let article: Article;
</script>

<div class="article">
	<h2>{article.title}</h2>
	<p>{article.body}</p>
	<a href="/articles/{article.id}">Read more</a>
</div>

<style>
	.article {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1 1 0px;
		padding-block: 5rem;
		border: 1px solid var(--border-secondary);
		border-radius: var(--border-radius);
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: var(--text-secondary);
	}

	p {
		font-size: 1.1rem;
		font-weight: 400;
		margin-bottom: 1rem;
		color: var(--text-secondary);
	}

	.article a {
		margin-top: 1rem;
		color: var(--text-secondary);
	}

	.article a:hover {
		color: var(--text-primary);
	}

	@media screen and (max-width: 62.5em) {
		.article {
			width: 100%;
		}
	}
</style>
