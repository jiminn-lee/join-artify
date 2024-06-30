<script>
	let selectedPosition = "Volunteer";

	async function submit(event) {
		const form = event.target;
		const data = new FormData(form);

		await fetch('/api/application', {
			method: 'POST',
			body: data
		});
		form.reset();
	}
</script>

<section id="apply">
	<form on:submit|preventDefault={submit}>
		<div class="form-group">
			<label for="fullName">Full Name:</label>
			<input type="text" name="fullName" required />
		</div>

		<div class="form-group">
			<label for="email">Email Address:</label>
			<input type="email" name="email" required />
		</div>

		<div class="form-group">
			<label for="phoneNumber">Phone Number:</label>
			<input type="tel" name="phoneNumber" required />
		</div>

		<div class="form-group">
			<label for="school">School:</label>
			<input type="text" name="school" required />
		</div>

		<div class="form-group">
			<fieldset>
				<label for="position">Position:</label>
				<div class="options">
					<label>
						<input
							type="radio"
							value="Volunteer"
							bind:group={selectedPosition}
							required
							name="position"
							checked
						/>
						Volunteer
					</label>
					<label>
						<input
							type="radio"
							value="Website Builder Head"
							bind:group={selectedPosition}
							required
							name="position"
						/>
						Website Builder Head
					</label>
					<br>
					<label>
						<input
							type="radio"
							value="Website Builder Head"
							bind:group={selectedPosition}
							required
							name="position"
						/>
						Website Builder
					</label>
					<label>
						<input
							type="radio"
							value="Graphic Designer"
							bind:group={selectedPosition}
							required
							name="position"
							
						/>
						Graphic Designer
					</label>
					<br>
					<label>
						<input
							type="radio"
							value="PR Member"
							bind:group={selectedPosition}
							required
							name="position"
							
						/>
						PR Member
					</label>
					<label>
						<input
							type="radio"
							value="Project Designer"
							bind:group={selectedPosition}
							required
							name="position"
							
						/>
						Project Designer
					</label>
				</div>
			</fieldset>
		</div>

		<div class="form-group">
			<label class="long-question" for="artifyReason">Why do you want to join Artify?</label>
			<textarea class="long-question" required name="artifyReason" />
		</div>

		<div class="form-group">
			<label class="long-question" for="positionReason"
				>Why do you want to become a {selectedPosition.toLowerCase()}?</label
			>
			<textarea class="long-question" name="positionReason" required />
		</div>

		<button class="btn">Submit</button>
	</form>
</section>

<style>
	.options {
		margin-left: 190px;
	}
	 
	.options label {
		margin-bottom: 15px;
		margin-top: 15px;
		font-weight: normal !important;
		width: 190px !important;
	}
	
	button {
		margin-left: auto;
		margin-right: auto;
	}

	.form-group {
		margin-bottom: 20px;
	}

	.form-group label {
		display: inline-block;
		width: 190px;
		font-weight: bold;
		line-height: 20px;
	}

	.form-group input[type='text'],
	.form-group input[type='email'],
	.form-group input[type='tel'] {
		width: 200px;
		padding: 5px;
	}


	.form-group textarea {
		width: 400px;
		padding: 5px
	}

	.long-question {
		width: 100%;
		resize: none;
	}

	#apply {
		height: 1000px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--yellow);
	}

	@media (max-width: 640px) {
		form {
			width: 90%;
		}
		
	}

	@media (max-width: 455px) {
		.form-group input[type='text'],
	.form-group input[type='email'],
	.form-group input[type='tel'] {
		width: 350px;
	}
	.options {
		margin-left: 120px;
	}
	.form-group textarea {
		width: 350px;
	}
	}
</style>
