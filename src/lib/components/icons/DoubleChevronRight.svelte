<script lang="ts">
	export let color = '#6852e1';
	export let size = '1.25em';
	export let weight = '2';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width={weight}
	stroke="currentColor"
	class="w-6 h-6"
	{color}
	width={size}
	height={size}
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
	/>
</svg>
