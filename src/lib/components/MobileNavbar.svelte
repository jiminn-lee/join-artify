<script>
	export let dialog;
</script>

<dialog bind:this={dialog}>
	<div class="mobile-nav-container">
		<nav>
			<button class="close" on:click={() => dialog.close()}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
			</button>
			<ul class="mobile-nav-menu">
				<a href="/" class="logo" on:click={() => dialog.close()}>
					<img src="/favicon.png" alt="" />
					<h1>Join <span>Artify</span></h1>
				</a>
				<li class="mobile-nav-menu-items">
					<a href="/#about-us" on:click={() => dialog.close()}>About Us</a>
				</li>
				<li class="mobile-nav-menu-items">
					<a href="/#benefits" on:click={() => dialog.close()}>Benefits</a>
				</li>
				<li class="mobile-nav-menu-items">
					<a href="/#jobs" on:click={() => dialog.close()}>Jobs</a>
				</li>
				<a href="/apply"
					><button class="btn" id="mobile-apply" on:click={() => dialog.close()}>Apply</button></a
				>
			</ul>
		</nav>
	</div>
</dialog>

<style>
	dialog {
		width: 50%;
		height: 40%;
		border: none;
		margin: auto;
		border-radius: 40px;
		user-select: none;
	}
	dialog::backdrop {
		backdrop-filter: blur(5px);
	}
	.mobile-nav-container {
		z-index: 999;
		width: 100%;
		height: 100%;
		font-size: 1.2rem;
		font-weight: 500;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.mobile-nav-menu {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.2rem;
		color: var(--violet);
	}
	.close {
		width: 35px;
		background-color: rgb(255, 255, 255, 0);
		color: var(--grey);
		border: none;
		cursor: pointer;
		position: absolute;
		top: 20px;
		right: 20px;
	}
	.logo {
		display: flex;
		align-items: center;
		color: var(--grey);
		font-weight: 700;
		font-size: 1.5rem;
	}
	.logo:visited {
		color: var(--grey);
	}
	.logo span {
		color: var(--red);
	}
	img {
		width: 50px;
		padding-right: 5px;
	}
</style>
