<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let items: string[];
	export let activeItem: string;
	export let isMini: boolean = false;
</script>

<section class="tabs">
	<ul>
		{#each items as item}
			<li class:active={item === activeItem}>
				<a href="#" on:click={() => dispatch('tabChange', item)}>{item}</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.tabs {
		display: flex;
		margin-block-end: 2rem;
		width: 100%;
	}

	.active {
		color: var(--text-secondary);
		border-bottom: 2px solid var(--border-secondary);
		padding-block-end: 0.5rem;
		background: none !important;
	}

	.active a {
		color: var(--text-secondary);
	}

	ul {
		display: flex;
		justify-content: center;
		list-style: none;
		padding-inline-start: 0;
		width: 100%;
	}

	li {
		margin-inline: 0.1rem;
		padding-block: 0.5rem;
		padding-inline: 1rem;
		font-size: 0.8rem;
		color: #333;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		border-top-right-radius: 0.5rem;
		border-top-left-radius: 0.5rem;
		width: 100px;
	}

	@media screen and (min-width: 62.5em) {
		.tabs {
			flex-direction: column;
		}

		.active {
			border-bottom: none;
			border-right: 2px solid var(--border-secondary);
			margin-block: 0.1rem;
			padding-block: 1rem;
			padding-inline: 0.5rem;
			border-radius: 0;
		}

		ul {
			flex-direction: column;
			width: 100%;
		}

		li {
			margin-block: 0.1rem;
			padding-block: 1rem;
			padding-inline: 0.5rem;
		}
	}
</style>
