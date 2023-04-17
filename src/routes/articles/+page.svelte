<script lang="ts">
	import { page } from '$app/stores';
	import type { Article } from '$lib/types/CustomTypes';
	import Articles from '$lib/components/articles/Articles.svelte';

	let articles: Article[] = [];

	$: $page, (articles = $page.data.articles);
</script>

<Articles {articles} />
