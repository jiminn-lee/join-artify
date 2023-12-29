<script>
	import whiteWaves from '$lib/assets/whiteWaves.svg';
</script>

<div class="footer-container">
	<img src={whiteWaves} alt="" class="wave" />
	<div class="footer">
		<a
			href="https://artify4kids.wixsite.com/my-site"
			target="_blank"
			rel="noopener noreferrer"
			class="logo-container"
		>
			<img src="/favicon.png" alt="" class="logo" />
			<h1>Artify</h1>
		</a>
		<div class="column-container">
			<div class="column">
				<h2>Menu</h2>
				<ul class="menu">
					<li class="menu-item"><a href="/#benefits">Benefits</a></li>
					<li class="menu-item"><a href="/#jobs">Jobs</a></li>
					<li class="menu-item"><a href="/#about-us">About Us</a></li>
				</ul>
			</div>
			<div class="column">
				<h2>Social</h2>
				<ul class="menu">
					<li class="special-item" id="instagram">
						<a
							href="https://www.instagram.com/Artify4kids"
							target="_blank"
							rel="noopener noreferrer"
							class="logo-container">Instagram</a
						>
					</li>
					<li class="special-item" id="twitter">
						<a
							href="https://twitter.com/artify4kids"
							target="_blank"
							rel="noopener noreferrer"
							class="logo-container">X (Twitter)</a
						>
					</li>
					<li class="special-item" id="linkedin">
						<a
							href="https://www.linkedin.com/company/artify4kids/"
							target="_blank"
							rel="noopener noreferrer"
							class="logo-container">LinkedIn</a
						>
					</li>
					<li class="special-item" id="tiktok">
						<a
							href="https://www.tiktok.com/@artify6"
							target="_blank"
							rel="noopener noreferrer"
							class="logo-container">TikTok</a
						>
					</li>
				</ul>
			</div>
			<div class="column">
				<h2>Contact Us</h2>
				<ul class="menu">
					<li class="special-item" id="location">1290 Parkmoor Ave, San Jose, CA 95126</li>
					<li class="special-item" id="phone"><a href="tel:+16692369166">669-236-9166</a></li>
					<li class="special-item" id="email">
						<a href="mailto:artify4kids@gmail.com">artify4kids@gmail.com</a>
					</li>
				</ul>
			</div>
		</div>
		<hr />
		<p>
			Website created by <a
				href="https://www.instagram.com/jiminn.lee/"
				target="_blank"
				rel="noopener noreferrer">Jimin L.</a
			>
			&
			<a href="" target="_blank" rel="noopener noreferrer">Sam M.</a>
		</p>
	</div>
</div>

<style>
	.wave {
		width: 100%;
		height: 20px;
		background-color: rgba(255, 0, 0, 0);
		transform: rotate(180deg);
	}
	.footer-container {
		margin-top: -20px;
	}
	.footer {
		height: 330px;
		padding-left: 20%;
		padding-right: 20%;
		padding-top: 40px;
		padding-bottom: 12px;
		background-color: white;
		font-weight: 500;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: var(--grey);
	}
	.column-container {
		display: flex;
		flex-direction: row;
	}
	.column {
		width: 100%;
	}
	.logo-container {
		display: flex;
		align-items: center;
		margin-bottom: 30px;
		user-select: none;
	}
	h1 {
		font-weight: 700;
		font-size: 1.5rem;
	}
	h2 {
		font-weight: 600;
		font-size: 1.2rem;
		user-select: none;
	}
	.logo {
		width: 50px;
		padding-right: 5px;
	}
	.menu-item {
		margin-top: 20px;
		margin-bottom: 20px;
		color: var(--violet);
	}
	a {
		color: var(--violet);
	}
	a:visited {
		color: inherit;
	}
	a:hover {
		text-decoration-line: underline;
		text-decoration-style: wavy;
		-webkit-text-decoration-line: underline;
		-webkit-text-decoration-style: wavy;
	}
	.special-item {
		list-style: none;
		color: var(--violet);
		margin-top: 20px;
		padding-left: 25px;
		background-repeat: no-repeat;
		background-position: left center;
		background-size: 15px;
	}
	#instagram {
		background-image: url('$lib/assets/instagram.svg');
	}
	#twitter {
		background-image: url('$lib/assets/x-twitter.svg');
	}
	#linkedin {
		background-image: url('$lib/assets/linkedin-in.svg');
	}
	#tiktok {
		background-image: url('$lib/assets/tiktok.svg');
	}
	#location {
		background-image: url('$lib/assets/location-dot-solid.svg');
	}
	#phone {
		background-image: url('$lib/assets/phone-solid.svg');
	}
	#email {
		background-image: url('$lib/assets/envelope-solid.svg');
	}
	hr {
		border-top: 1px solid;
		border-radius: 5px;
		width: 60%;
		margin-top: 0px;
		margin-bottom: 10px;
	}
	p {
		font-size: 0.8rem;
		color: var(--red);
	}

	@media (max-width: 1280px) {
		.footer {
			padding-left: 10%;
			padding-right: 10%;
		}
	}
	/* lg */
	@media (max-width: 1024px) {
		.footer {
			padding-left: 5%;
			padding-right: 5%;
		}
	}
	@media (max-width: 640px) {
		.footer {
			padding-left: 0;
			padding-right: 0;
		}
		h1 {
			font-size: 1.2rem;
		}
		h2 {
			font-size: 1rem;
		}
		.menu-item,
		.special-item {
			font-size: 0.8rem;
		}
		p {
			font-size: 0.6rem;
		}
	}
</style>
