<script>
	import blueWaves from '$lib/assets/blueWaves.svg';
</script>

<section id="benefits">
	<div class="slide-container">
		<div class="slide" style="--t:80s">
			<div>
				<img src="/photos/colby-1.png" alt="" class="colby" id="colby-1" />
				<img src="/photos/colby-2.png" alt="" class="colby" id="colby-2" />
				<img src="/photos/colby-3.png" alt="" class="colby" id="colby-3" />
				<img src="/photos/colby-4.png" alt="" class="colby" id="colby-4" />
				<img src="/photos/colby-5.png" alt="" class="colby" id="colby-5" />
			</div>
			<div>
				<img src="/photos/colby-1.png" alt="" class="colby" id="colby-1" />
				<img src="/photos/colby-2.png" alt="" class="colby" id="colby-2" />
				<img src="/photos/colby-3.png" alt="" class="colby" id="colby-3" />
				<img src="/photos/colby-4.png" alt="" class="colby" id="colby-4" />
				<img src="/photos/colby-5.png" alt="" class="colby" id="colby-5" />
			</div>
		</div>
	</div>
	<div class="benefits">
		<div>
			<h2>Why Artify?</h2>
			<hr />
		</div>
		<div class="benefit-container">
			<div class="img-container">
				<img src="/photos/volunteer.webp" alt="" class="photo" />
			</div>
			<div class="text-container">
				<h3>
					Gain <span>volunteer hours</span> and a unique <span>activity</span> on your resume!
				</h3>
			</div>
		</div>
		<div class="benefit-container">
			<div class="img-container">
				<img src="/photos/love.webp" alt="" class="photo" />
			</div>
			<div class="text-container">
				<h3>
					<span>Refoster</span> your love for <span>art</span> and spread that same love for art to students!
				</h3>
			</div>
		</div>
		<div class="benefit-container">
			<div class="img-container">
				<img src="/photos/children.webp" alt="" class="photo" />
			</div>
			<div class="text-container">
				<h3>Work with <span>childen</span> and develop close <span>bonds</span> with them!</h3>
			</div>
		</div>
	</div>
	<div class="slide-container">
		<div class="slide" style="--t:80s">
			<div>
				<img src="/photos/colby-5.png" alt="" class="colby" id="colby-5" />
				<img src="/photos/colby-4.png" alt="" class="colby" id="colby-4" />
				<img src="/photos/colby-3.png" alt="" class="colby" id="colby-3" />
				<img src="/photos/colby-2.png" alt="" class="colby" id="colby-2" />
				<img src="/photos/colby-1.png" alt="" class="colby" id="colby-1" />
			</div>
			<div>
				<img src="/photos/colby-5.png" alt="" class="colby" id="colby-5" />
				<img src="/photos/colby-4.png" alt="" class="colby" id="colby-4" />
				<img src="/photos/colby-3.png" alt="" class="colby" id="colby-3" />
				<img src="/photos/colby-2.png" alt="" class="colby" id="colby-2" />
				<img src="/photos/colby-1.png" alt="" class="colby" id="colby-1" />
			</div>
		</div>
	</div>
</section>
<img src={blueWaves} alt="" class="wave" />

<style>
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
	.slide-container {
		user-select: none;
		overflow: hidden;
		height: 100%;
		-webkit-mask-image: linear-gradient(180deg, transparent, #fff, 20%, #fff 90%, transparent);
		width: 20%;
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

	span {
		color: white;
	}

	.colby {
		width: 800px;
		opacity: 0.5;
		margin-top: 40px;
		margin-bottom: 40px;
	}

	.photo {
		border-radius: 18px;
		transition: 0.5s;
		margin-bottom: 30px;
	}
	.photo:hover {
		transform: scale(105%);
	}
	h3 {
		font-weight: 600;
		font-size: 1.5rem;
	}
	.benefit-container {
		margin-top: 80px;
		margin-bottom: 80px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.benefits {
		width: 100%;
	}
	.img-container {
		width: 50%;
	}
	.text-container {
		width: 60%;
	}

	.wave {
		width: 100%;
		height: 60px;
		background-color: var(--violet);
	}
	.text-container {
		text-align: center;
	}
	hr {
		margin: auto;
		width: 40%;
	}

	#benefits {
		padding-top: 60px;
		background-color: var(--blue);
		height: 1500px;
		padding-left: 20%;
		padding-right: 20%;
		position: relative;
		color: var(--grey);

		display: flex;
	}
	h2 {
		text-align: center;
	}
	@media (max-width: 1280px) {
		#benefits {
			padding-left: 10%;
			padding-right: 10%;
		}
	}
	@media (max-width: 1024px) {
		#benefits {
			padding-left: 5%;
			padding-right: 5%;
			height: 1350px;
		}
	}
	@media (max-width: 768px) {
		h2 {
			font-size: 1.8rem;
		}
		h3 {
			font-size: 1.2rem;
		}
		#benefits {
			height: 1200px;
		}
	}
	@media (max-width: 640px) {
		.slide-container {
			display: none;
		}
		.img-container {
			width: 60%;
		}
		#benefits {
			height: 1300px;
		}
	}
	@media (max-width: 475px) {
		.img-container {
			width: 70%;
		}
	}
</style>
