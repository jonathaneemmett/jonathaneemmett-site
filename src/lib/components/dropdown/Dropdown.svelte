<script lang="ts">
	import ChevronRight from '$lib/components/icons/ChevronRight.svelte';
	export let title: string = '';
	export let isOpen: boolean = false;
	let chevronDown = false;

	function toggleDropdown() {
		isOpen = !isOpen;
		chevronDown = !chevronDown;
	}
</script>

<button class="dropdown" on:click={toggleDropdown}>
	<span class="dropdown__title">{title}</span>
	<span class="chevron" class:chevronDown>
		<ChevronRight color="#ccc" />
	</span>
</button>

<div class="dropdown__container" class:isOpen>
	<slot />
</div>

<style>
	.dropdown {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 1rem;
		background: transparent;
		border: none;
		outline: none;
		cursor: pointer;
		color: var(--text-primary);
		border-bottom: 1px solid var(--border-primary);
	}

	.dropdown:hover {
		background: var(--bg-primary);
		color: var(--text-secondary);
	}

	.dropdown__title {
		font-size: 1.25rem;
		font-weight: 500;
	}

	.dropdown__container {
		display: none;
		opacity: 0;
		visibility: hidden;
		transition: opacity 3s linear, visibility 3s linear;
	}

	.isOpen {
		display: block;
		opacity: 1;
		visibility: visible;
	}

	.chevron {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		background: transparent;
		transition: transform 0.3s linear;
	}

	.chevronDown {
		transform: rotate(90deg);
	}
</style>
