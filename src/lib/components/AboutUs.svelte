<script>
	import greenWaves from '$lib/assets/greenWaves.svg';
	import path from '$lib/assets/path.png';
</script>

<section id="about-us">
	<img src={path} alt="" class="path" />
	<div class="about-us-text-container">
		<h1>About Artify</h1>
		<p>
			Artify4Kids is a <span>non-profit</span> organization that aims to provide accessible
			<span>arts and crafts</span>
			education to underserved <span>children</span> in the <span>Bay Area</span>. Our mission is to
			foster <span>creativity, self-expression,</span> and <span>personal development</span>, while
			celebrating cultural diversity and promoting inclusivity in our art programs. Join us in
			empowering <span>young artists!</span>
		</p>
		<hr />
	</div>

	<div class="text-container">
		<iframe
			title="Bay Area Map"
			src="https://snazzymaps.com/embed/577090"
			width="100%"
			height="600px"
			style="border:none;"
		/>
		<div class="text">
			<h1>Where?</h1>
			<p>Artify is based in the <span>Bay Area</span></p>
		</div>
	</div>
	<div class="text-container" id="right">
		<img src="/photos/how-we-work.webp" alt="" class="photo" id="hidden" />
		<div class="text">
			<h1>How We Work</h1>
			<p>
				We have weekely meetings to discuss current and future plans. Join us as we plan and carry
				out each <span>fundraiser</span>, <span>community events</span>, and
				<span>volunteer opportunities</span>.
			</p>
		</div>
		<img src="/photos/how-we-work.webp" alt="" class="photo" />
	</div>
	<div class="clear" />
	<div class="btn-container">
		<a
			href="https://artify4kids.wixsite.com/my-site/about"
			target="_blank"
			rel="noopener noreferrer"
			id="apply"><button class="btn">Learn More</button></a
		>
	</div>
</section>
<img src={greenWaves} alt="" class="wave" />

<style>
	#hidden {
		display: none;
	}
	button {
		width: 160px;
	}
	.btn-container {
		display: flex;
		justify-content: center;
		margin-top: 40px;
	}
	a {
		color: var(--violet);
	}
	.about-us-text-container {
		text-align: center;
		width: 70%;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 200px;
	}
	.text-container {
		display: flex;
		align-items: center;
		width: 70%;
		margin-top: 100px;
		margin-bottom: 90px;
	}
	.text {
		width: 60%;
		overflow-wrap: break-word;
	}
	.photo {
		width: 40%;
		border-radius: 18px;
		margin-left: 40px;
		margin-right: 40px;
	}
	iframe {
		width: 40%;
		border-radius: 18px;
		margin-left: 40px;
		margin-right: 40px;
		height: 200px;
	}
	#right {
		text-align: right;
		float: right;
	}
	img {
		user-select: none;
	}
	span {
		color: var(--violet);
	}
	h1 {
		font-weight: 750;
		font-size: 2rem;
		line-height: 1.8em;
	}
	p {
		line-height: 1.5rem;
		margin-bottom: 20px;
	}
	hr {
		border: 0;
		border-top: 1px solid black;
		width: 60%;
		margin: auto;
	}
	.path {
		margin-top: 110px;
		height: 900px;
		position: absolute;
		top: 50%;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden;
	}
	.clear {
		clear: both;
	}
	#about-us {
		height: 1200px;
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
		.about-us-text-container {
			width: 80%;
		}
		.text-container {
			width: 80%;
		}
	}
	@media (max-width: 1024px) {
		#about-us {
			padding-left: 5%;
			padding-right: 5%;
		}
		.about-us-text-container {
			width: 100%;
		}
	}
	@media (max-width: 768px) {
		.text-container {
			width: 90%;
		}
		#about-us {
			font-size: 1rem;
		}
		h1 {
			font-size: 1.8rem;
		}
		.text-container {
			margin-bottom: 85px;
			margin-top: 85px;
		}
	}
	@media (max-width: 640px) {
		.path {
			display: none;
		}
		.text-container {
			width: 100%;
			flex-direction: column;
			margin-top: 10px;
			margin-bottom: 10px;
			text-align: center;
		}
		#right {
			text-align: center;
		}
		.about-us-text-container {
			margin-bottom: 60px;
		}
		#hidden {
			display: inline;
		}
		.photo {
			display: none;
		}
		.photo,
		iframe {
			width: 80%;
			margin-bottom: 20px;
		}
		.text {
			width: 100%;
		}
	}
</style>
