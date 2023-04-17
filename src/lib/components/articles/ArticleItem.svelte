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
		border: 1px solid var(--text-primary);
		border-radius: var(--border-radius);
	}

	.article a {
		margin-top: 1rem;
	}

	@media screen and (max-width: 62.5em) {
		.article {
			width: 100%;
		}
	}
</style>
