<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import Code from './icons/Code.svelte';
	import Hamburger from './icons/Hamburger.svelte';
	import type { User } from '$lib/types/CustomTypes';

	let user: User | null = null;
	$: $page, (user = $page.data?.user ?? null);

	let active: boolean = false;
	let isOpen: boolean = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<nav class="navbar">
	<div class="logo">
		<Code />
		<a href="/">jonathan <span>emmett</span> </a>
	</div>
	<ul class="nav__links">
		<input
			type="checkbox"
			name="checkbox__toggle"
			id="checkbox__toggle"
			checked={isOpen}
			on:click={toggleMenu}
		/>
		<label for="checkbox__toggle" class="nav__hamburger">
			<Hamburger active={isOpen} />
		</label>
		<div class="nav__menu">
			<li><a href="/" class:active on:click={toggleMenu}>Home</a></li>
			<li><a href="/articles" class:active on:click={toggleMenu}>Articles</a></li>
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
		</div>
	</ul>
</nav>

<style>
	.navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: var(--bg-primary);
		color: var(--text-primary);
		padding: 1rem;
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

	.nav__links {
		display: flex;
		gap: 1rem;
		list-style: none;
	}

	.nav__menu {
		display: flex;
		align-items: center;
	}

	.nav__menu a {
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

	.nav__menu a:hover {
		color: var(--text-secondary);
	}

	input[type='checkbox'] {
		display: none;
	}

	.nav__hamburger {
		display: none;
		user-select: none;
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

	@media (max-width: 62.5em) {
		.nav__menu {
			display: none;
			position: absolute;
			background-color: var(--bg-primary);
			width: 225px;
			height: 100vh;
			right: 0;
			top: 3.5rem;
			text-align: center;
			padding-block: 1rem;
		}

		.nav__menu li {
			display: block;
			transition: 0.3s ease-in-out;
		}

		.nav__hamburger {
			display: block;
		}

		input[type='checkbox']:checked ~ .nav__menu {
			display: block;
		}
	}
</style>
