<script>
	import yellowWaves from '$lib/assets/yellowWaves.svg';
	let words = ['child', 'artist', 'innovator'];
	let currentIndex = 0;
	function updateWord() {
		currentIndex = (currentIndex + 1) % words.length;
	}
	setInterval(updateWord, 1000);
</script>

<section id="introduction">
	<div class="text-container">
		<br /> <br />
		<h1>
			<span id="span-1"> Create, Inspire, Transform </span>
			<span id="span-2"
				><br />One <span id="changing-word">{words[currentIndex]}</span> at a time</span
			>
		</h1>
		<br /><br />
		<p>Be a catalyst for creativity, celebrate diversity, and empower young artists with us</p>
	</div>
</section>
<img src={yellowWaves} alt="" class="wave" />

<style>
	#introduction {
		background-color: var(--yellow);
		color: var(--grey);
		height: 100vh;
		display: flex;
		align-items: center;
		padding-left: 20%;
		padding-right: 20%;
	}
	.text-container {
		text-align: left;
		width: 50%;
		user-select: none;
		font-size: 1.2rem;
	}
	#span-1 {
		font-weight: 750;
		font-size: 2.5rem;
		line-height: 1.2em;
	}
	#span-2 {
		font-weight: 600;
		font-size: 2rem;
		line-height: 1.2em;
	}
	#changing-word {
		text-decoration-line: underline;
		text-decoration-style: wavy;
		-webkit-text-decoration-line: underline;
		-webkit-text-decoration-style: wavy;
		color: var(--violet);
	}
	.wave {
		width: 100%;
		height: 60px;
		background-color: var(--green);
	}

	/* xl */
	@media (max-width: 1280px) {
		#introduction {
			padding-left: 10%;
			padding-right: 10%;
		}
	}

	/* lg */
	@media (max-width: 1024px) {
		#introduction {
			padding-left: 5%;
			padding-right: 5%;
		}
	}

	/* md */
	@media (max-width: 768px) {
		#span-1 {
			font-size: 2.2rem;
		}
		#span-2 {
			font-size: 1.4rem;
		}
		.text-container {
			font-size: 1rem;
		}
	}

	/* sm */
	@media (max-width: 640px) {
	}
</style>
