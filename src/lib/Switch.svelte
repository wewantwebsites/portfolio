<script lang="ts">
	import { createSwitch, melt } from '@melt-ui/svelte';

	const {
		elements: { root, input }
	} = createSwitch();

	$effect(() => {
		console.log('switched: ', $input.checked);
		const htmlEl = document.querySelector('html')!;

		if ($input.checked) {
			htmlEl.classList.add('dark');
		} else {
			htmlEl.classList.remove('dark');
		}
	});
</script>

<button
	use:melt={$root}
	class="relative h-6 cursor-default rounded-full bg-primary-800 transition-colors data-[state=checked]:bg-primary-900"
	id="airplane-mode"
	aria-labelledby="airplane-mode-label"
>
	<span class="thumb block rounded-full bg-white transition" />
</button>
<input use:melt={$input} />

<style>
	button {
		--w: 2.75rem;
		--padding: 0.125rem;
		width: var(--w);
	}

	.thumb {
		--size: 1.25rem;
		width: var(--size);
		height: var(--size);
		transform: translateX(var(--padding));
	}

	:global([data-state='checked']) .thumb {
		transform: translateX(calc(var(--w) - var(--size) - var(--padding)));
	}
</style>
