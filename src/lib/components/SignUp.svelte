<script lang="ts"></script>

<section class="mail">
	<form action="">
		<div class="form__group--multi-offset">
			<input type="text" class="form__control" placeholder="Email" disabled />
			<button type="submit" class="btn btn__primary--outline">Subscribe</button>
		</div>
	</form>
</section>

<style>
	.mail {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: auto;
		background: var(--accent-secondary);
		padding-block: 1rem;
	}

	.mail form {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 500px;
	}

	@media screen and (max-width: 62.5em) {
		.mail form {
			width: 400px;
		}
	}

	@media screen and (max-width: 37.5em) {
		.mail {
			padding-inline: 1rem;
		}
		.mail form {
			width: 100%;
		}
	}
</style>
