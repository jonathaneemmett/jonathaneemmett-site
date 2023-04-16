<script lang="ts">
	import { page } from '$app/stores';
	import Hero from '$lib/components/Hero.svelte';
	import type { Article } from '$lib/types/CustomTypes';
	import DoubleChevronRight from '$lib/components/icons/DoubleChevronRight.svelte';

	let articles: Article[] = [];

	$: $page, (articles = $page.data.articles);
</script>

<Hero />
<div class="home">
	<section class="mail">
		<form action="">
			<div class="form__group--multi-offset">
				<input type="text" class="form__control" placeholder="Email" disabled />
				<button type="submit" class="btn btn__primary--outline">Subscribe</button>
			</div>
		</form>
	</section>
	<section class="articles">
		{#each articles as article}
			<div class="article">
				<h2>{article.title}</h2>
				<p>{article.body}</p>
				<a href="/articles/{article.id}">Read more</a>
			</div>
		{/each}
		<a href="/articles" class="more">
			<DoubleChevronRight color="#fff" />
		</a>
	</section>
</div>

<style>
	.home {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.mail {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100px;
		background: var(--accent-secondary);
	}

	.mail form {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 500px;
	}

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

	.article a {
		margin-top: 1rem;
	}

	.more {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 50px;
		border: 1px solid var(--text-primary);
		border-radius: var(--border-radius);

		cursor: pointer;
	}

	.more:hover {
		background: var(--accent-secondary);
		border: 1px solid var(--border-tertiary);
	}
</style>
