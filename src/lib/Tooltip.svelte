<script lang="ts">
	import { createTooltip, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	// import { Plus } from '$icons/index.js';

	let { text = '' } = $props();

	const {
		elements: { trigger, content, arrow },
		states: { open }
	} = createTooltip({
		positioning: {
			placement: 'top'
		},
		openDelay: 0,
		closeDelay: 0,
		closeOnPointerDown: false,
		forceVisible: true
	});
</script>

<div use:melt={$trigger}>
	<slot />
</div>

{#if $open}
	<div
		use:melt={$content}
		transition:fade={{ duration: 100 }}
		class=" z-10 rounded-lg bg-white shadow"
	>
		<div use:melt={$arrow} />
		<p class="px-4 py-1 text-primary-700">{text}</p>
	</div>
{/if}

<style lang="postcss">
	.trigger {
		@apply inline-flex h-9 w-9 items-center justify-center rounded-full bg-white;
		@apply text-primary-900 transition-colors hover:bg-white/90;
		@apply focus-visible:ring focus-visible:ring-primary-400 focus-visible:ring-offset-2;
		@apply p-0 text-sm font-medium;
	}
</style>
