<script>
	import blueWaves from '$lib/assets/blueWaves.svg';
</script>

<section id="jobs">
	<div class="cards-container">
		<div class="card">
			<h1>Website Builder Head</h1>
			<ul class="card-list">
				<li>Bullet Point 1</li>
				<li>Bullet Point 2</li>
				<li>Bullet Point 3</li>
			</ul>
		</div>
		<div class="card">
			<h1>Website Builder / Designer</h1>
			<ul class="card-list">
				<li>Work with a team to update and design the website</li>
				<li>Develop your website design skills</li>
			</ul>
		</div>
	</div>
	<div class="cards-container">
		<div class="card">
			<h2 class="asterisk">*</h2>
			<h1 class="special-h1">Graphic Designer</h1>
			<ul class="card-list">
				<li>Work as a team with PR & Digital Marketing to make drawings for posts or stickers.</li>
				<li>Draw Colby!</li>
			</ul>
		</div>
		<div class="card">
			<h2 class="asterisk">*</h2>
			<h1 class="special-h1">PR Member</h1>
			<ul class="card-list">
				<li>Post on different social media accounts</li>
				<li>Coordinate with Graphic Designers and Digital Marketing</li>
			</ul>
		</div>
		<div class="card">
			<h2 class="asterisk">*</h2>
			<h1 class="special-h1">Project Designer</h1>
			<ul class="card-list">
				<li>Come up with your project</li>
				<li>Launch the project with Artify</li>
				<li>Gain leadership experience</li>
			</ul>
		</div>
	</div>
	<p>* These require less commitment</p>
	<a href="/apply" id="apply"><button class="btn">Apply</button></a>
</section>

<style>
	#jobs {
		background-color: var(--violet);
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		justify-content: center;
		align-items: center;
		padding: 60px 0;
	}
	.cards-container {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		justify-content: center;
		flex-wrap: wrap;
	}
	.card {
		background-color: white;
		width: 300px;
		height: 400px;
		border-radius: 40px;
		transition: 0.2s;
	}
	.card:hover {
		transform: translateY(-5px);
	}
	.asterisk {
		color: var(--red-dark);
		margin: 30px 0 0 30px;
		font-size: 2rem;
		user-select: none;
	}
	.card h1 {
		text-align: center;
		font-weight: 700;
		font-size: 1.8rem;
		color: var(--red);
		user-select: none;
		padding: 0 25px;
		margin: 80px 0 50px 0;
	}
	.special-h1 {
		margin-top: 30px !important;
	}
	.card-list {
		list-style: disc;
		color: var(--violet);
		font-size: 1.2rem;
		padding: 0 50px;
	}
	.card-list li {
		margin: 10px 0;
	}
	p {
		text-align: center;
		color: var(--red-dark);
		background-color: white;
		width: 300px;
		font-weight: 500;
		border-radius: 40px;
		padding: 15px 0 15px 0;
	}
</style>
