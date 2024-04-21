<script>
	import CursorHero from '$lib/CursorHero.svelte';
	let { children, data } = $props();
</script>

<CursorHero bannerStyles="m-[-1rem]">
	<h1>Blog</h1>
</CursorHero>
{@render children()}
