<script>
	import whiteWaves from '$lib/assets/whiteWaves.svg';
</script>

<div class="footer-container">
	<img src={whiteWaves} alt="" class="wave" />
	<div class="footer" />
</div>

<style>
	.wave {
		width: 100%;
		height: 20px;
		background-color: rgba(255, 0, 0, 0);
		color: aqua;
		transform: rotate(180deg);
	}

	.footer {
		height: 300px;
		padding-left: 20%;
		padding-right: 20%;
		padding-top: 40px;
		padding-bottom: 12px;
		background-color: white;
	}

	.footer-container {
		margin-top: -20px;
	}
</style>
