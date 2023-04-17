<script lang="ts">
	import '$styles/global.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />

<main>
	<slot />
	<Footer />
</main>

<style>
	main {
		height: 100vh;
	}
</style>
