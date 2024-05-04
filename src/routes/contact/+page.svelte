<script>
	// [ ] add form validation
	// [ ] add form submission
	// [ ] add form submission success message
	// [ ] add form submission error message
	// [ ] add form submission loading state
	// [ ] add form submission error state
	// [ ] add form submission success state
	// TODO: see how much the items below satisfy the above requirements
	// [ ] superforms & zod https://superforms.rocks/get-started/zod
	// [ ] formsnap https://formsnap.dev/

	import ClassicHero from '$lib/ClassicHero.svelte';

	let name = '';
	let email = '';
	let message = '';

	function handleSubmit() {
		console.count();
		console.group('Form Submission');
		console.log('Name:', name);
		console.log('Email:', email);
		console.log('Message:', message);
		console.groupEnd();
	}
</script>

<ClassicHero label="Contact Me" />
<main>
	<form on:submit|preventDefault|stopPropagation={handleSubmit}>
		<legend>* indicates a required field</legend>
		<label class="label">
			Name<sup>*</sup>:
			<input class="input" type="text" bind:value={name} required />
		</label>

		<label class="label">
			Email<sup>*</sup>:
			<input class="input email" type="email" bind:value={email} required />
		</label>
		<label class="label">
			Message:
			<textarea class="textarea" bind:value={message}></textarea>
		</label>
		<button class="btn variant-filled-primary w-full md:max-w-[7rem]" type="submit">Submit</button>
	</form>
</main>
