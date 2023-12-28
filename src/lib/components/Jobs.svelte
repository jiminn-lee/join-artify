<script>
	import blueWaves from '$lib/assets/blueWaves.svg';
</script>

<section id="jobs">
	<div class="cards-container">
		<div class="card">card</div>
		<div class="card">card</div>
		<div class="card">card</div>
	</div>
	<div class="cards-container">
		<div class="card">card</div>
		<div class="card">card</div>
	</div>
</section>
<img src={blueWaves} alt="" class="wave" />

<style>
	.wave {
		width: 100%;
		height: 60px;
		background-color: var(--violet);
	}

	#jobs {
		padding-top: 20px;
		background-color: var(--blue);
		height: 100%;
		padding-left: 20%;
		padding-right: 20%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		justify-content: center;
		align-items: center;
	}
	.cards-container {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		justify-content: center;
	}
	.card {
		background-color: white;
		width: 300px;
		height: 400px;
		border-radius: 40px;
	}

	@media (max-width: 1280px) {
		#jobs {
			padding-left: 10%;
			padding-right: 10%;
		}
	}
	@media (max-width: 1024px) {
		.cards-container {
			flex-wrap: wrap-reverse;
		}
		#jobs {
			padding-left: 5%;
			padding-right: 5%;
		}
	}
</style>
