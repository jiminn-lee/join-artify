<script>
	import yellowWaves from '$lib/assets/yellowWaves.svg';
	import img1 from '$lib/images/01.jpg';
	import img2 from '$lib/images/02.jpg';
	import img3 from '$lib/images/03.jpg';
	import img4 from '$lib/images/04.jpg';
	import img5 from '$lib/images/05.jpg';
	import img6 from '$lib/images/06.jpg';
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
	<div class="image-container">
		<img src={img1} alt="" class="img-main" />
		<img src={img2} alt="" class="img-small" id="small-1" />
		<img src={img3} alt="" class="img-small" id="small-2" />
		<img src={img4} alt="" class="img-small" id="small-3" />
		<img src={img5} alt="" class="img-small" id="small-4" />
		<img src={img6} alt="" class="img-small" id="small-5" />
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
		padding: 0 20%;
	}
	.text-container {
		text-align: left;
		width: 40%;
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
	.image-container {
		width: 60%;
		position: relative;
	}
	.img-main {
		margin-left: auto;
		margin-right: auto;
		object-fit: cover;
		width: 450px;
		height: 450px;
		border-radius: 100%;
		background-position: 20% center;
	}
	.img-small {
		position: absolute;
		border-radius: 100%;
		object-fit: cover;
		width: 150px;
		height: 150px;
	}
	#small-1 {
		top: -100px;
		left: 0;
		width: 25%;
	}
	#small-2 {
		top: -100px;
		right: 0;
		width: 25%;
	}
	#small-3 {
		bottom: -150px;
		left: 100px;
	}
	#small-4 {
		top: -160px;
		left: 220px;
	}
	#small-5 {
		bottom: -150px;
		right: 100px;
	}
	.wave {
		width: 100%;
		height: 60px;
		background-color: var(--green);
	}

	@media (max-width: 1280px) {
		#introduction {
			padding-left: 10%;
			padding-right: 10%;
		}
	}
	@media (max-width: 1024px) {
		#introduction {
			padding-left: 5%;
			padding-right: 5%;
		}
	}
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
</style>
