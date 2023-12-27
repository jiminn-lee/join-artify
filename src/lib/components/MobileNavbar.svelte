<script>
	let showDiv = false;
	export function toggleMobileNav() {
		showDiv = !showDiv;
		if (showDiv) {
			document.body.style.overflowY = 'hidden';
			window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
		} else {
			document.body.style.overflowY = 'auto';
		}
	}
</script>

{#if showDiv}
	<div class="mobile-nav-container">
		<nav>
			<ul class="mobile-nav-menu">
				<li class="mobile-nav-menu-items">
					<a href="/#benefits" on:click={toggleMobileNav}>Benefits</a>
				</li>
				<li class="mobile-nav-menu-items"><a href="/#jobs" on:click={toggleMobileNav}>Jobs</a></li>
				<li class="mobile-nav-menu-items">
					<a href="/#about-us" on:click={toggleMobileNav}>About Us</a>
				</li>
				<a href="/apply"
					><button class="btn" id="mobile-apply" on:click={toggleMobileNav}>Apply</button></a
				>
			</ul>
		</nav>
	</div>
{/if}

<style>
	.mobile-nav-container {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
		width: 100%;
		height: 100%;
		background-color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 1.2rem;
		font-weight: 500;
	}

	.mobile-nav-menu {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
</style>
