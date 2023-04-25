<script lang="ts">
	import { page } from '$app/stores';
	import type { Article } from '$lib/types/CustomTypes';
	import Articles from '$lib/components/articles/Articles.svelte';

	let articles: Article[] = [];
	let tag: string = '';

	$: $page, ((articles = $page.data.articles), (tag = $page.data.tag));
</script>

<Articles {articles} {tag} />
