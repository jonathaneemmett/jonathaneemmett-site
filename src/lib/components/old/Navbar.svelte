<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import Code from '../icons/Code.svelte';
	import Hamburger from '../icons/Hamburger.svelte';
	import type { User } from '$lib/types/CustomTypes';

	let user: User | null = null;

	$: $page, (user = $page.data?.user ?? null);

	let active = false;
	let isOpen = false;

	function toggleActive() {
		active = !active;
	}

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<nav>
	<div class="logo">
		<Code />
		<a href="/">jonathan <span>emmett</span> </a>
	</div>
	<a href="#" on:click|preventDefault={toggleMenu}>
		<Hamburger active={isOpen} />
	</a>
</nav>
<div class="menu" class:isOpen>
	<div class="menu__content">
		<ul>
			<li><a href="/" class:active on:click={toggleMenu}>Home</a></li>
			<li><a href="/about" class:active on:click={toggleMenu}>About</a></li>
			<li><a href="/contact" class:active on:click={toggleMenu}>Contact</a></li>
			{#if user}
				<li><a href="/profile" class:active on:click={toggleMenu}>Profile</a></li>
				<li>
					<form action="/logout?/logout" method="POST" use:enhance>
						<button type="submit">Logout</button>
					</form>
				</li>
			{:else}
				<li><a href="/login" class:active on:click={toggleMenu}>Login</a></li>
				<li><a href="/register" class:active on:click={toggleMenu}>Register</a></li>
			{/if}
		</ul>
	</div>
</div>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: var(--bg-primary);
		color: var(--text-primary);
		padding: 1rem;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		list-style: none;
	}

	li {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	li a {
		display: flex;
		justify-content: flex-start;
		font-size: 1rem;
		font-size: clamp(1rem, 0.9529411764705882rem + 0.23529411764705901vw, 1.1rem);
		list-style: none;
		padding: 1rem;
		text-decoration: none;
		transition: 0.3s;
		width: 100%;
		color: var(--text-primary);
	}

	li a:hover {
		color: var(--text-secondary);
	}

	button {
		background: none;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: var(--text-primary);
		font-size: 1.1rem;
		padding: 1rem;
	}

	button:hover {
		color: var(--text-tertiary);
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.logo,
	.logo > a,
	.logo > a > span {
		font-size: 1rem;
		font-size: clamp(1rem, 0.7647058823529411rem + 1.1764705882352942vw, 1.5rem);
		font-weight: 700;
	}

	.logo span {
		color: var(--text-tertiary);
	}

	.active {
		color: var(--accent-primary);
	}

	.menu {
		background: var(--bg-primary);
		width: 300px;
		height: 100%;
		position: fixed;
		top: 65px;
		right: -100%;
		transition: all 0.5s ease-in-out;
		z-index: 1;
	}

	.menu__content {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.menu.isOpen {
		right: 0;
	}
</style>
