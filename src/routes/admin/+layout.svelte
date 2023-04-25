<script lang="ts">
	import Dropdown from '$lib/components/dropdown/Dropdown.svelte';
	import DropItem from '$lib/components/dropdown/DropItem.svelte';
</script>

<div class="admin">
	<div class="admin__nav">
		<div class="admin__nav--header">
			<h1>Admin</h1>
		</div>
		<div class="admin__nav--item">
			<a href="/admin">Dashboard</a>
		</div>
		<Dropdown title="Articles">
			<DropItem text="Create" route="/admin/articles/create" />
		</Dropdown>
		<Dropdown title="Tags">
			<DropItem text="Create" route="/admin/articles/create" />
		</Dropdown>
	</div>
	<div class="admin__content">
		<slot />
	</div>
</div>

<style>
	.admin {
		display: grid;
		grid-template-columns: 1fr;
		height: 100%;
	}

	.admin__nav--header {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		border-bottom: 1px solid var(--border-primary);
	}

	.admin__nav--header h1 {
		font-size: 1.5rem;
		font-weight: 500;
	}

	.admin__nav {
		background: var(--bg-secondary);
	}

	.admin__nav--item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		border-bottom: 1px solid var(--border-primary);
	}

	.admin__nav--item a {
		color: var(--text-primary);
		text-decoration: none;
		font-size: 1.25rem;
		font-weight: 500;
	}

	.admin__nav--item:hover {
		background: var(--bg-primary);
		color: var(--text-secondary);
	}

	.admin__nav--item:hover a {
		color: var(--text-secondary);
	}

	.admin__content {
		padding: 1rem;
		height: 100%;
		overflow-y: auto;
	}

	.admin__content::-webkit-scrollbar {
		display: none;
	}

	@media screen and (min-width: 62.5em) {
		.admin {
			grid-template-columns: 2fr 10fr;
		}
	}
</style>
