<script lang="ts">
	import { page } from '$app/stores';
	import type { User } from '$lib/types/CustomTypes';

	let user: User | null = null;

	$: $page, (user = $page.data?.user ?? null);
</script>

<section class="profile">
	<h1>
		Welcome, {#if user} {user?.email} {:else} "Visitor" {/if}
	</h1>
	<p>Here's your profile.</p>
</section>

<style>
	.profile {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-block-start: 300px;
	}

	.profile > h1 {
		margin-block-end: 1rem;
		font-size: 2rem;
		font-size: clamp(2rem, 1.7647058823529411rem + 0.23529411764705882vw, 2.5rem);
	}

	.profile > p {
		font-size: 1rem;
		font-size: clamp(1rem, 0.7647058823529411rem + 1.1764705882352942vw, 1.5rem);
	}
</style>
