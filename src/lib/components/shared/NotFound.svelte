<script lang="ts">
	export let message: string = '';
</script>

<div>
	<h1>{message}</h1>
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		margin-block-start: 1rem;
	}

	h1 {
		color: var(--text-secondary);
	}
</style>
