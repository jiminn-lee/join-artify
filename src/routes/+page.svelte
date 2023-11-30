<script>
	import { onMount } from 'svelte';
	import yellowWaves from '$lib/assets/yellowWaves.svg';
	import greenWaves from '$lib/assets/greenWaves.svg';

	onMount(() => {
		window.addEventListener('hashchange', () => window.history.pushState({}, '', '/'), {});
	});

	let words = ['child', 'artist', 'innovator'];
	let currentIndex = 0;
	function updateWord() {
		currentIndex = (currentIndex + 1) % words.length;
	}
	setInterval(updateWord, 1000);
</script>

<head>
	<title>Join Artify - Create, Inspire, Transform</title>
</head>

<section id="introduction">
	<div id="introduction-text">
		<br /> <br />
		<h1 id="title">
			<span id="title-1"> Create, Inspire, Transform </span>
			<span id="title-2"
				><br />One <span id="changing-word">{words[currentIndex]}</span> at a time</span
			>
		</h1>
		<br /><br />
		<p>Be a catalyst for creativity, celebrate diversity, and empower young artists with us</p>
	</div>
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
		padding-left: 20%;
		padding-right: 20%;
	}

	#introduction-text {
		text-align: left;
		width: 50%;
		user-select: none;
	}

	#introduction-text p {
		font-size: 1.2rem;
	}

	#title {
		font-weight: 600;
		font-size: 2.5rem;
		line-height: 1.2em;
	}

	#title-1 {
		font-weight: 750;
	}

	#title-2 {
		font-size: 0.9em;
	}

	#changing-word {
		text-decoration: underline wavy;
		color: var(--violet);
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
