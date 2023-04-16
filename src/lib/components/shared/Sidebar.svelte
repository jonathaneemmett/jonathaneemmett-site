<script lang="ts"></script>

<section class="sideBar">
	<div class="sideBar__header">
		<h1 class="sideBar__title">Sidebar</h1>
	</div>
	<div class="sideBar__content">
		<slot />
	</div>
</section>

<style>
	.sideBar {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		max-width: 300px;
		border: 1px solid #ccc;
	}

	.sideBar__header {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
	}

	.sideBar__title {
		font-size: 1.2rem;
		font-weight: 500;
	}

	.sideBar__content {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow-y: auto;
	}
</style>
