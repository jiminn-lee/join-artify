<!-- Import necessary assets -->
<script>
	import yellowWaves from '$lib/assets/yellowWaves.svg';

	// Words to cycle through in the introduction text
	let words = ['child', 'artist', 'innovator'];
	let currentIndex = 0;

	// Function to update the current word
	function updateWord() {
		currentIndex = (currentIndex + 1) % words.length;
	}
	// Change the word every second
	setInterval(updateWord, 1000);
</script>

<!-- Introduction section -->
<section id="introduction">
	<!-- Container for the text content -->
	<div class="text-container">
		<br /> <br />
		<!-- Main heading with dynamic word -->
		<h1>
			<span id="span-1"> Create, Inspire, Transform </span>
			<span id="span-2">
				<br />One <span id="changing-word">{words[currentIndex]}</span> at a time
			</span>
		</h1>
		<br /><br />
		<!-- Subheading -->
		<p>Be a catalyst for creativity, celebrate diversity, and empower young artists with us</p>
	</div>
	<!-- Container for the image slides -->
	<div class="img-container">
		<!-- Slide 1 -->
		<div class="slide" style="--t:60s" id="slide-1">
			<div>
				<img src="/photos/portrait-1.webp" alt="" class="portrait" />
				<img src="/photos/portrait-2.webp" alt="" class="portrait" />
				<img src="/photos/portrait-3.webp" alt="" class="portrait" />
				<img src="/photos/portrait-4.webp" alt="" class="portrait" />
			</div>
			<div>
				<img src="/photos/portrait-1.webp" alt="" class="portrait" />
				<img src="/photos/portrait-2.webp" alt="" class="portrait" />
				<img src="/photos/portrait-3.webp" alt="" class="portrait" />
				<img src="/photos/portrait-4.webp" alt="" class="portrait" />
			</div>
		</div>
		<!-- Slide 2 -->
		<div class="slide" style="--t:50s" id="slide-2">
			<div>
				<img src="/photos/portrait-5.webp" alt="" class="portrait" />
				<img src="/photos/portrait-6.webp" alt="" class="portrait" />
				<img src="/photos/portrait-7.webp" alt="" class="portrait" />
				<img src="/photos/portrait-8.webp" alt="" class="portrait" />
				<img src="/photos/portrait-9.webp" alt="" class="portrait" />
			</div>
			<div>
				<img src="/photos/portrait-5.webp" alt="" class="portrait" />
				<img src="/photos/portrait-6.webp" alt="" class="portrait" />
				<img src="/photos/portrait-7.webp" alt="" class="portrait" />
				<img src="/photos/portrait-8.webp" alt="" class="portrait" />
				<img src="/photos/portrait-9.webp" alt="" class="portrait" />
			</div>
		</div>
		<!-- Slide 3 -->
		<div class="slide" style="--t:60s" id="slide-3">
			<div>
				<img src="/photos/portrait-10.webp" alt="" class="portrait" />
				<img src="/photos/portrait-11.webp" alt="" class="portrait" />
				<img src="/photos/portrait-12.webp" alt="" class="portrait" />
				<img src="/photos/portrait-13.webp" alt="" class="portrait" />
			</div>
			<div>
				<img src="/photos/portrait-10.webp" alt="" class="portrait" />
				<img src="/photos/portrait-11.webp" alt="" class="portrait" />
				<img src="/photos/portrait-12.webp" alt="" class="portrait" />
				<img src="/photos/portrait-13.webp" alt="" class="portrait" />
			</div>
		</div>
	</div>
</section>
<!-- Decorative wave image -->
<img src={yellowWaves} alt="" class="wave" />

<style>
	/* Introduction section styling */
	#introduction {
		background-color: var(--yellow);
		color: var(--grey);
		height: 100vh;
		display: flex;
		align-items: center;
		padding: 0 20%;
	}
	/* Text container styling */
	.text-container {
		text-align: left;
		width: 40%;
		user-select: none;
		font-size: 1.2rem;
		z-index: 999;
	}
	/* First span styling in heading */
	#span-1 {
		font-weight: 750;
		font-size: 2.5rem;
		line-height: 1.2em;
	}
	/* Second span styling in heading */
	#span-2 {
		font-weight: 600;
		font-size: 2rem;
		line-height: 1.2em;
	}
	/* Dynamic word styling */
	#changing-word {
		text-decoration-line: underline;
		text-decoration-style: wavy;
		-webkit-text-decoration-line: underline;
		-webkit-text-decoration-style: wavy;
		color: var(--violet);
	}
	/* Image container styling */
	.img-container {
		width: 60%;
		overflow: hidden;
		height: 80vh;
		-webkit-mask-image: linear-gradient(180deg, transparent, #fff, 20%, #fff 90%, transparent);
		display: flex;
		justify-content: right;
		gap: 10px;
		padding-right: 10px;
	}
	/* Slide container styling */
	.slide {
		position: relative;
	}


	

	/* Slide content styling */
	.slide div {
		white-space: nowrap;
		display: flex;
		flex-direction: column;
		animation: animate var(--t) linear infinite;
		animation-delay: calc(var(--t) * -1);
	}
	/* Alternate slide animation */
	.slide div:nth-child(2) {
		animation: animate2 var(--t) linear infinite;
		animation-delay: calc(var(--t) / -2);
	}




	/* Portrait image styling */
	.portrait {
		width: 180px;
		margin: 3%;
		display: inline-flex;
		border-radius: 14px;
		user-select: none;
		transition: 0.5s;
	}
	/* Portrait hover effect */
	.portrait:hover {
		transform: scale(105%);
	}
	/* Keyframe animation for slides */
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
	/* Decorative wave image styling */
	.wave {
		width: 100%;
		height: 60px;
		background-color: var(--green);
	}

	/* Responsive styling for different screen sizes */
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
		#slide-3 {
			display: none;
		}
	}
	@media (max-width: 475px) {
		#span-1 {
			font-size: 1.8rem;
		}
		#span-2 {
			font-size: 1rem;
		}
		.portrait {
			width: 145px;
		}
	}
</style>