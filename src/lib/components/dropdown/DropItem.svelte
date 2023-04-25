<script lang="ts">
	import { page } from '$app/stores';
	export let text: string = '';
	export let route: string = '';
	export let icon: string = '';
	let linkActive = false;

	function handleRouteChange() {
		linkActive = route === $page?.url?.pathname;
	}

	$: $page, handleRouteChange();
</script>

<div class="dropdown__item" class:linkActive>
	{#if icon} {icon} {/if}
	<a href={route}>{text}</a>
</div>

<style>
	.dropdown__item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		box-shadow: inset 0 0 0.15rem #ccc;
	}

	.dropdown__item:hover {
		background: var(--bg-primary);
		color: var(--text-secondary);
	}

	.dropdown__item:hover a {
		color: var(--text-secondary);
	}
</style>
