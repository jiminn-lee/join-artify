<script>
	import whiteWaves from '$lib/assets/whiteWaves.svg';
</script>

<div class="navbar">
	<nav>
		<a href="/" class="logo">
			<img src="/favicon.png" alt="" />
			<h1>Join <span>Artify</span></h1>
		</a>
		<ul>
			<li><a href="/#benefits">Benefits</a></li>
			<li><a href="/#jobs">Jobs</a></li>
			<li><a href="/#about-us">About Us</a></li>
		</ul>
		<a class="apply" href="/apply"><button>Apply</button></a>
	</nav>
	<img src={whiteWaves} alt="" class="wave" />
</div>

<style>
	.wave {
		width: 100%;
		height: 20px;
	}

	.logo {
		display: flex;
		align-items: center;
		color: var(--grey);
		font-weight: 700;
		font-size: 1.5rem;
	}

	.logo span {
		color: var(--red);
	}
	.logo:visited {
		color: var(--grey);
	}
	img {
		width: 50px;
		padding-right: 5px;
	}

	.navbar {
		position: fixed;
		top: 0;
		width: 100%;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 12px;
		padding-bottom: 12px;
		font-size: 1.2rem;

		padding-left: 20%;
		padding-right: 20%;
		background-color: white;
		box-sizing: border-box;
		font-weight: 500;
		color: var(--violet);
		user-select: none;
		text-align: center;
	}

	li {
		list-style: none;
		display: inline-block;
		padding-left: 20px;
		padding-right: 20px;
	}

	a {
		text-decoration: none;
		transition: 0.2s;
		color: var(--violet);
	}

	li a:hover {
		color: var(--violet-dark);
	}

	a:visited {
		color: var(--violet);
	}

	button {
		border: none;
		background-color: var(--red);
		color: white;
		border-radius: 14px;
		width: 100%;
		font-size: 1.2rem;
		padding: 5px 30px 5px 30px;
		cursor: pointer;
		transition: 0.2s;
	}

	button:hover {
		background-color: var(--red-dark);
	}

	button:active {
		transform: translateY(2px);
	}
</style>
