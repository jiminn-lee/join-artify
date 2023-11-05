<script>
</script>

<div class="navbar">
	<nav>
		<a href="/" class="logo">
			<img src="/favicon.png" alt="" />
			<h1>Join Artify</h1>
		</a>
		<ul>
			<li><a href="/#benefits">Benefits</a></li>
			<li><a href="/#jobs">Jobs</a></li>
			<li><a href="/#about-us">About Us</a></li>
		</ul>
		<a class="apply" href="/apply"><button>Apply</button></a>
	</nav>
</div>

<style>
	.logo {
		display: flex;
		align-items: center;
		color: black;
		font-weight: 700;
	}
	.logo:visited {
		color: black;
	}
	img {
		width: 50px;
		padding-right: 5px;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 12px;
		padding-bottom: 12px;
		font-size: 1.2rem;
		position: fixed;
		top: 0;
		width: 100%;
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
	}
</style>
