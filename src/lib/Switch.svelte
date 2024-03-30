<script lang="ts">
	import { createSwitch, melt } from '@melt-ui/svelte';
	type SwitchProps = {
		isChecked: boolean;
		id: string;
	};

	let { isChecked = $bindable(), id }: { isChecked: boolean; id: string } = $props();
	const {
		elements: { root, input }
	} = createSwitch();
</script>

<button
	{id}
	use:melt={$root}
	class="relative h-6 cursor-default rounded-full bg-primary-500 transition-colors data-[state=checked]:bg-primary-900"
	aria-labelledby="{id}-label"
>
	<span
		class="thumb block rounded-full bg-white text-primary-500 transition data-[state=checked]:text-primary-900 flex justify-center items-center"
	>
		<slot />
	</span>
</button>
<input type="checkbox" use:melt={$input} bind:checked={isChecked} />

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
