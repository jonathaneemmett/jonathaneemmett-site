<script lang="ts">
	import '$styles/global.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<main>
	<slot />
</main>

<style>
	main {
		padding: 1rem;
	}
</style>
