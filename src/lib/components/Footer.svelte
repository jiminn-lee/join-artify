<script>
	import whiteWaves from '$lib/assets/whiteWaves.svg';
</script>

<div class="footer-container">
	<img src={whiteWaves} alt="" class="wave" />
	<div class="footer">testddddddddd</div>
</div>

<style>
	.wave {
		width: 100%;
		height: 20px;
		background-color: var(--blue);
		transform: rotate(180deg);
	}

	.footer {
		height: 300px;
		padding-left: 20%;
		padding-right: 20%;
		padding-top: 40px;
		padding-bottom: 12px;
	}
</style>
