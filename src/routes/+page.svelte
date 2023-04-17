<script lang="ts">
	import { page } from '$app/stores';
	import Hero from '$lib/components/Hero.svelte';
	import SignUp from '$lib/components/SignUp.svelte';
	import Articles from '$lib/components/articles/Articles.svelte';
	import type { Article } from '$lib/types/CustomTypes';

	let articles: Article[] = [];

	$: $page, (articles = $page.data.articles);
</script>

<Hero />
<div class="home">
	<SignUp />
	<Articles {articles} limit={3} />
</div>

<style>
	.home {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: auto;
	}
</style>
