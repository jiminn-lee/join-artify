<script>
	import greenWaves from '$lib/assets/greenWaves.svg';
	import path from '$lib/assets/path.png';
</script>

<section id="about-us">
	<img src={path} alt="" class="path" />
	<div class="text-container">
		<h1>About Artify</h1>
		<p>
			Artify4Kids is a non-profit organization that aims to provide accessible arts and crafts
			education to underserved children in the Bay Area. Our mission is to foster creativity,
			self-expression, and personal development, while celebrating cultural diversity and promoting
			inclusivity in our art programs. Join us in empowering young artists!
		</p>
		<hr />
	</div>
	<div class="text-container" id="left">
		<h1>Where?</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, consectetur numquam! Ipsa,
			dolor laboriosam laudantium assumenda alias repudiandae beatae delectus!
		</p>
	</div>
	<div class="text-container" id="right">
		<h1>How We Work</h1>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet ab illo veritatis reiciendis
			laboriosam debitis aliquid provident voluptate fugit hic?
		</p>
	</div>
	<div class="clear" />
	<div class="text-container">
		<h1>Want To Learn More?</h1>
	</div>
</section>
<img src={greenWaves} alt="" class="wave" />

<style>
	h1 {
		font-weight: 750;
		font-size: 2rem;
		line-height: 1.8em;
	}
	p {
		line-height: 1.5em;
		margin-bottom: 20px;
	}
	hr {
		border: 0;
		border-top: 1px solid black;
		width: 60%;
		margin: auto;
	}
	.path {
		margin-top: 100px;
		max-height: 1000px;
		position: absolute;
		top: 50%;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.text-container {
		text-align: center;
		font-size: 1em;
		width: 60%;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 200px;
	}
	#left {
		text-align: left;
		margin-left: 0;
		margin-right: 0;
		width: 40%;
	}
	#right {
		text-align: right;
		margin-left: 0;
		margin-right: 0;
		width: 40%;
		float: right;
	}
	.clear {
		clear: both;
	}
	#about-us {
		height: 1400px;
		background-color: var(--green);
		padding-left: 20%;
		padding-right: 20%;
		padding-top: 60px;
		position: relative;
		color: var(--grey);
	}
	.wave {
		width: 100%;
		height: 60px;
		background-color: var(--blue);
	}

	@media (max-width: 1280px) {
		#about-us {
			padding-left: 10%;
			padding-right: 10%;
		}
	}
	@media (max-width: 1024px) {
		#about-us {
			padding-left: 5%;
			padding-right: 5%;
		}
	}
</style>
