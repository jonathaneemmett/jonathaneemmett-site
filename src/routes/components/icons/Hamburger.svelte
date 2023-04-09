<script>
	export let active = false;

	$: active, console.log(active);
</script>

<div class="hamburger" class:active>
	<div class="hamburger__line" />
</div>

<style>
	.hamburger {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 35px;
		height: 35px;
		cursor: pointer;
		transition: all 0.5s ease-in-out;
		border: 1px solid #fff;
		background-color: var(--accent-primary);
	}

	.hamburger__line {
		width: 20px;
		height: 2px;
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
		transition: all 0.5s ease-in-out;
	}

	.hamburger__line::before,
	.hamburger__line::after {
		content: '';
		position: absolute;
		width: 20px;
		height: 2px;
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
		transition: all 0.5s ease-in-out;
	}

	.hamburger__line:before {
		transform: translateY(-8px);
	}

	.hamburger__line:after {
		transform: translateY(8px);
	}

	/** Animation **/
	.hamburger.active .hamburger__line {
		transform: translateX(-50px);
		background: transparent;
		box-shadow: none;
	}

	.hamburger.active .hamburger__line::before {
		transform: rotate(45deg) translate(35px, -35px);
	}

	.hamburger.active .hamburger__line::after {
		transform: rotate(-45deg) translate(35px, 35px);
	}
</style>
