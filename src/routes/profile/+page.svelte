<script lang="ts">
	import { page } from '$app/stores';
	import Sidebar from '$lib/components/shared/Sidebar.svelte';
	import type { Profile, User } from '$lib/types/CustomTypes';

	let user: User | null = null;
	let profile: Profile | null = null;

	$: $page, ((user = $page.data?.user ?? null), (profile = $page.data?.profile ?? null));
</script>

<section class="profile">
	<h1>
		Welcome, {#if profile} {profile.name} {:else} "Visitor" {/if}
	</h1>
	<p>Here's your profile.</p>
	<div class="profile__content">
		<div class="profile__sidebar">
			<Sidebar />
		</div>
		<div class="content">
			<h1>Content</h1>
			<p>Here's some content.</p>
		</div>
	</div>
</section>

<style>
	.profile {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
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

	.profile__content {
		display: grid;
		grid-template-columns: 1fr;
		width: 100%;
		padding-block: 1rem;
	}
	.profile__sidebar {
		padding-inline: 1rem;
	}

	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding-inline: 1rem;
	}

	@media screen and (min-width: 62.5em) {
		.profile__content {
			grid-template-columns: 2fr 10fr;
		}
	}
</style>
