<script context="module">
	export const toggle = (x: boolean) => !x;
</script>

<script lang="ts">
	import { slide } from 'svelte/transition';
	type TextOverflowProps = { text: string; clamp?: number };

	let { text, clamp = 120 }: TextOverflowProps = $props();
	let hideOverflow = $state(true);
	const clampText = text.substring(0, clamp) + '...';
	const slideOpts = { delay: 200, duration: 300 };

	function handleClick() {
		hideOverflow = toggle(hideOverflow);
	}
</script>

<button on:click={handleClick}>
	<span>
		{#if hideOverflow}
			{clampText}
		{:else}
			{text}
		{/if}
	</span>

	<span class="ml-3 text-accent inline-block"
		>Read More {#if hideOverflow}
			&downarrow;
		{:else}
			&uparrow;
		{/if}</span
	>
</button>
