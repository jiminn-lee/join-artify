<script>
	import whiteWaves from '$lib/assets/whiteWaves.svg';
	import MobileNavbar from './MobileNavbar.svelte';

	let mobileNavBar;
</script>

<div class="nav-container">
	<nav class="nav">
		<a href="/" class="logo-container">
			<img src="/favicon.png" alt="" class="logo" />
			<h1>Join <span>Artify</span></h1>
		</a>
		<ul class="nav-menu">
			<li class="nav-menu-items"><a href="/#about-us">About Us</a></li>
			<li class="nav-menu-items"><a href="/#benefits">Benefits</a></li>
			<li class="nav-menu-items"><a href="/#jobs">Jobs</a></li>
		</ul>
		<a
			href="/apply"
			id="apply"><button class="btn">Apply</button></a
		>
		<button class="bars" on:click={() => mobileNavBar.showModal()}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</button>
	</nav>
	<img src={whiteWaves} alt="" class="wave" />
</div>
<MobileNavbar bind:dialog={mobileNavBar} />

<style>
	.nav-container {
		position: fixed;
		width: 100%;
		z-index: 9999;
	}
	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 1.2rem;
		padding: 12px 20%;
		background-color: white;
		box-sizing: border-box;
		font-weight: 500;
		user-select: none;
		text-align: center;
		height: 64px;
	}
	.nav-menu-items {
		color: var(--violet);
		list-style: none;
		display: inline-block;
		padding: 0 20px;
	}
	.logo-container {
		display: flex;
		align-items: center;
		color: var(--grey);
		font-weight: 700;
		font-size: 1.5rem;
	}
	.logo-container:hover {
		text-decoration: none;
	}
	.logo-container span {
		color: var(--red);
	}
	.logo {
		width: 50px;
		padding-right: 5px;
	}
	.bars {
		width: 40px;
		background-color: rgb(255, 255, 255, 0);
		color: var(--grey);
		border: none;
		cursor: pointer;
		display: none;
	}
	.wave {
		width: 100%;
		height: 20px;
	}

	@media (max-width: 1280px) {
		.nav {
			padding-left: 10%;
			padding-right: 10%;
		}
	}
	@media (max-width: 1024px) {
		.nav {
			padding-left: 5%;
			padding-right: 5%;
		}
	}
	@media (max-width: 768px) {
		.nav,
		#apply button {
			font-size: 1rem;
		}
		.logo-container {
			font-size: 1.3rem;
		}
		.logo {
			width: 40px;
		}
	}
	@media (max-width: 640px) {
		.nav-menu,
		#apply {
			display: none;
		}
		.bars {
			display: block;
		}
	}
</style>
