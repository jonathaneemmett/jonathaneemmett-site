<script lang="ts">
	import { page } from '$app/stores';
	import type { Article } from '$lib/types/CustomTypes';
	import Tabs from '$lib/components/tabs/Tabs.svelte';
	import ArticlesList from '$lib/components/articles/ArticlesList.svelte';
	import AddEditForm from '$lib/components/articles/AddEditForm.svelte';

	let items: string[] = ['Articles', 'Tags'];
	let activeItem: string = 'Articles';

	let articleItems: string[] = ['All', 'Add New/Edit'];
	let articleActiveItem: String = 'All';
	let articles: Article[] = [];
	let article: Article | undefined;

	$: $page, (articles = $page.data.articles);

	function tabChange(e: CustomEvent) {
		activeItem = e.detail;
	}

	function articleTabChange(item: String) {
		if (!item) return;
		if (item === 'All') article = undefined;
		articleActiveItem = item;
	}

	function edit(e: CustomEvent) {
		articleTabChange('Add New/Edit');
		article = e.detail;
	}

	function deleteArticle(e: CustomEvent) {
		articleActiveItem = 'All';
		console.log('delete', e.detail);
	}
</script>

<section class="admin">
	<div class="admin__nav">
		<Tabs {items} {activeItem} on:tabChange={tabChange} />
	</div>
	<div class="admin__content">
		{#if activeItem === 'Articles'}
			{#each articleItems as item}
				<button
					class="tabButton"
					class:tabButtonActive={item === articleActiveItem}
					on:click={() => articleTabChange(item)}
				>
					{item}
				</button>
			{/each}

			<div class="content">
				{#if articleActiveItem === 'All'}
					<!-- list all articles -->
					<ArticlesList {articles} on:edit={edit} on:delete={deleteArticle} />
					<!-- update an article -->
					<!-- delete an article -->
				{:else if articleActiveItem === 'Add New/Edit'}
					<!-- add an article -->
					<AddEditForm {article} />
				{/if}
			</div>
		{:else if activeItem === 'Tags'}
			<h1>Tags</h1>
			<!-- add a tag -->
			<!-- update a tag -->
			<!-- delete a tag -->
		{/if}
	</div>

	<!-- TODO: user management -->
</section>

<style>
	.admin {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1290px;
		height: 100%;
		padding-block: 2rem;
		margin: 0 auto;
	}

	.content {
		padding: 1rem;
	}

	.tabButton {
		padding: 0.5rem 1rem;
		border: none;
		background: transparent;
		color: var(--text-primary);
		cursor: pointer;
		border: 1px solid #ccc;
	}

	.tabButtonActive {
		background: var(--bg-primary);
		color: var(--text-secondary);
		border-bottom: 1px solid var(--bg-primary);
	}

	@media screen and (min-width: 62.5em) {
		.admin {
			display: grid;
			grid-template-columns: 1fr 10fr;
		}

		.admin__nav {
		}

		.admin__content {
			padding-block: 1rem;
			padding-inline: 2rem;
		}
	}
</style>
