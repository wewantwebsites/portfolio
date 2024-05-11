<script lang="ts">
	import { onMount } from 'svelte';

	let { label, imgSrc }: { label: string; imgSrc: string; imgAlt: string } = $props();

	let el: HTMLElement;
	onMount(() => {
		el.style.backgroundImage = `url(${imgSrc}), radial-gradient(   at 0% 0%,   rgba(var(--color-primary-500) / 0.33) 0px,   transparent 50%  ),  radial-gradient(at 98% 10%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%)`;
		el.style.backgroundSize = 'cover';
		el.style.backgroundPosition = 'center top';
	});
</script>

<div bind:this={el} class="hero m-[-1rem] mb-[1rem] py-6 md:py-12 lg:py-24">
	<h1 class="h1 text-center mx-auto capitalize">{label}</h1>
</div>
