<script lang="ts">
	import { page } from '$app/stores';
	import AddEditForm from '$lib/components/articles/AddEditForm.svelte';
	import type { Article } from '$lib/types/CustomTypes';
	let article: Article | undefined;
	let user: any = '';

	$: $page, (user = $page.data.user);
</script>

<AddEditForm {article} {user} />

<style>
</style>
