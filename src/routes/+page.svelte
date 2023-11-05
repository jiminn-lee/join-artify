<script>
	import { onMount } from 'svelte';

	onMount(() => {
		window.addEventListener('hashchange', () => window.history.pushState({}, '', '/'), {});
	});
</script>

<head>
	<title>Join Artify</title>
</head>

<section id="introduction">
	<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, molestiae.</h1>
</section>
<section id="benefits">Benefits</section>
<section id="jobs">Jobs</section>
<section id="about-us">About Us</section>

<style>
	#introduction {
		background-color: var(--yellow);
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#introduction h1 {
		font-weight: 700;
		text-align: center;
		font-size: xx-large;
	}

	#benefits {
		padding-top: 60px;
		background-color: var(--green);
		height: 950px;
	}
	#jobs {
		padding-top: 60px;
		background-color: var(--blue);
		height: 950px;
	}
</style>
