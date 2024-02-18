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
	<div class="img-container">
		<div class="slide" style="--t:60s" id="slide-1">
			<div>
				<img src="/photos/portrait-1.jpg" alt="" class="portrait" />
				<img src="/photos/portrait-2.png" alt="" class="portrait" />
				<img src="/photos/portrait-3.jpg" alt="" class="portrait" />
				<img src="/photos/portrait-4.jpg" alt="" class="portrait" />
			</div>
			<div>
				<img src="/photos/portrait-1.jpg" alt="" class="portrait" />
				<img src="/photos/portrait-2.png" alt="" class="portrait" />
				<img src="/photos/portrait-3.jpg" alt="" class="portrait" />
				<img src="/photos/portrait-4.jpg" alt="" class="portrait" />
			</div>
		</div>
		<div class="slide" style="--t:50s" id="slide-2">
			<div>
				<img src="/photos/portrait-5.jpg" alt="" class="portrait" />
				<img src="/photos/portrait-6.jpg" alt="" class="portrait" />
				<img src="/photos/portrait-7.jpg" alt="" class="portrait" />
				<img src="/photos/portrait-8.jpg" alt="" class="portrait" />
				<img src="/photos/portrait-9.jpg" alt="" class="portrait" />
			</div>
			<div>
				<img src="/photos/portrait-5.jpg" alt="" class="portrait" />
				<img src="/photos/portrait-6.jpg" alt="" class="portrait" />
				<img src="/photos/portrait-7.jpg" alt="" class="portrait" />
				<img src="/photos/portrait-8.jpg" alt="" class="portrait" />
				<img src="/photos/portrait-9.jpg" alt="" class="portrait" />
			</div>
		</div>
		<div class="slide" style="--t:60s" id="slide-3">
			<div>
				<img src="/photos/portrait-10.jpg" alt="" class="portrait" />
				<img src="/photos/portrait-11.jpg" alt="" class="portrait" />
				<img src="/photos/portrait-12.jpg" alt="" class="portrait" />
				<img src="/photos/portrait-13.jpg" alt="" class="portrait" />
			</div>
			<div>
				<img src="/photos/portrait-10.jpg" alt="" class="portrait" />
				<img src="/photos/portrait-11.jpg" alt="" class="portrait" />
				<img src="/photos/portrait-12.jpg" alt="" class="portrait" />
				<img src="/photos/portrait-13.jpg" alt="" class="portrait" />
			</div>
		</div>
	</div>
</section>
<img src={yellowWaves} alt="" class="wave" />

<style>
	.img-container {
		width: 60%;
		overflow: hidden;
		height: 80vh;
		-webkit-mask-image: linear-gradient(180deg, transparent, #fff, 20%, #fff 90%, transparent);
		display: flex;
		justify-content: center;
		gap: 10px;
		user-select: none;
	}

	.slide {
		position: relative;
	}

	.slide div {
		white-space: nowrap;
		display: flex;
		flex-direction: column;
		animation: animate var(--t) linear infinite;
		animation-delay: calc(var(--t) * -1);
	}
	.slide div:nth-child(2) {
		animation: animate2 var(--t) linear infinite;
		animation-delay: calc(var(--t) / -2);
	}

	@keyframes animate {
		0% {
			transform: translateY(100%);
		}
		100% {
			transform: translateY(-100%);
		}
	}
	@keyframes animate2 {
		0% {
			transform: translateY(0%);
		}
		100% {
			transform: translateY(-200%);
		}
	}

	.portrait {
		width: 180px;
		margin: 3%;
		display: inline-flex;
		border-radius: 14px;
	}

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
		z-index: 999;
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
		#slide-1 {
			display: none;
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

	@media (max-width: 640px) {
		#slide-1 {
			display: none;
		}
		#slide-3 {
			display: none;
		}
	}
</style>
