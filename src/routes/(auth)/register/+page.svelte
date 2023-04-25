<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';

	export let form: ActionData | undefined;
	export let data: PageData | undefined;
</script>

<section class="register">
	<div class="register__content">
		<div class="register__header">
			<h1 class="register__title">Register</h1>
		</div>
		<form class="form" method="POST" action="?/register" use:enhance>
			<div class="form__group--multi">
				<div class="form__group">
					<label for="firstName" class="visually__hidden">First Name</label>
					<input
						type="text"
						class="form__control"
						id="firstName"
						name="firstName"
						placeholder="First Name"
					/>
				</div>
				<div class="form__group">
					<label for="lastName" class="visually__hidden">Last Name</label>
					<input
						type="text"
						class="form__control"
						id="lastName"
						name="lastName"
						placeholder="Last Name"
					/>
				</div>
			</div>
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
				<label for="password2" class="visually__hidden">Confirm Password</label>
				<input
					type="password"
					class="form__control"
					id="password2"
					name="password2"
					placeholder="Confirm Password"
				/>
			</div>
			{#if form?.register_error}
				<p class="error">{form.register_error}</p>
			{/if}
			<div class="form__group">
				<button class="btn btn__secondary--outline">Register</button>
			</div>
			<div class="register__message">
				<p>Have an account? <a href="/login">Login!</a></p>
			</div>
		</form>
	</div>
</section>

<style>
	.register {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-block-start: 20rem;
		height: 100%;
	}

	.register__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 30rem;
	}

	.register__header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--accent-primary);
		border-bottom: 1px solid var(--border-primary);
		margin-block-end: 1rem;
		width: 100%;
	}

	.register__title {
		font-size: 2rem;
		font-weight: 700;
		margin-block-end: 1rem;
	}

	.register__message {
		display: flex;
		align-items: center;
		margin-block-start: 1rem;
		font-size: 0.8rem;
		width: 100%;
		gap: 0.5rem;
		color: var(--text-tertiary);
	}

	.register__message a {
		text-decoration: none;
		color: var(--text-secondary);
		font-size: 1rem;
		font-weight: 700;
	}
</style>
