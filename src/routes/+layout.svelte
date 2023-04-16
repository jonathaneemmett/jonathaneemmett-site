<script lang="ts">
	import '$styles/global.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		height: 100vh;
	}
</style>
