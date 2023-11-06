<script>
	import { onMount } from 'svelte';
	import yellowWaves from '$lib/assets/yellowWaves.svg';
	import greenWaves from '$lib/assets/greenWaves.svg';

	onMount(() => {
		window.addEventListener('hashchange', () => window.history.pushState({}, '', '/'), {});
	});
</script>

<section id="introduction">
	<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, molestiae.</h1>
</section>
<img src={yellowWaves} alt="" class="wave" id="yellow" />

<section id="benefits">Benefits</section>
<img src={greenWaves} alt="" class="wave" id="green" />

<section id="jobs" />
<section id="about-us" />

<style>
	.wave {
		width: 100%;
		height: 60px;
	}

	#yellow {
		background-color: var(--green);
	}

	#green {
		background-color: var(--blue);
	}

	#introduction {
		background-color: var(--yellow);
		color: var(--grey);
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-left: 20%;
		padding-right: 20%;
	}

	#introduction h1 {
		font-weight: 700;
		text-align: center;
		font-size: xx-large;
	}

	#benefits {
		padding-top: 60px;
		background-color: var(--green);
		height: 900px;
		padding-left: 20%;
		padding-right: 20%;
	}
	#jobs {
		padding-top: 60px;
		background-color: var(--blue);
		height: 900px;
		padding-left: 20%;
		padding-right: 20%;
	}
</style>
