<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<section class="auth">
	<div class="auth__content">
		<div class="auth__header">
			<h1 class="auth__title">Login</h1>
		</div>
		<form class="form" method="POST" action="?/login" use:enhance>
			<div class="form__group">
				<label for="email" class="visually__hidden">Email</label>
				<input type="text" class="form__control" id="email" name="email" placeholder="Email" />
			</div>
			<div class="form__group">
				<label for="password" class="visually__hidden">Password</label>
				<input
					type="password"
					class="form__control"
					id="password"
					name="password"
					placeholder="Password"
				/>
			</div>
			<div class="form__group">
				<button class="btn btn__secondary--outline">Login</button>
			</div>
			<div class="auth__message">
				<p>Don't have an account? <a href="/register">Register!</a></p>
			</div>
		</form>
	</div>
</section>

<style>
	.auth {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-block-start: 20rem;
		height: 100%;
	}

	.auth__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 30rem;
	}

	.auth__header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--accent-primary);
		border-bottom: 1px solid var(--border-primary);
		margin-block-end: 1rem;
		width: 100%;
	}

	.auth__title {
		font-size: 2rem;
		font-weight: 700;
		margin-block-end: 1rem;
	}

	.auth__message {
		display: flex;
		align-items: center;
		margin-block-start: 1rem;
		font-size: 0.8rem;
		width: 100%;
		gap: 0.5rem;
		color: var(--text-tertiary);
	}

	.auth__message a {
		text-decoration: none;
		color: var(--text-secondary);
		font-size: 1rem;
		font-weight: 700;
	}
</style>
