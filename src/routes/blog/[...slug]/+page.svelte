<script>
	import CursorHero from '$lib/CursorHero.svelte';
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
	let { data } = $props();
	console.log(data);
</script>

<svete:head>
	<title>{data.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
	<meta property="og:keywords" content={data.categories} />
	<meta name="description" content={data.description} />
	<meta name="keywords" content={data.categories} />
	<meta name="twitter:title" content={data.title} />
	<meta name="twitter:description" content={data.description} />
</svete:head>

<CursorHero bannerStyles="m-[-1rem] mx-[-3rem] mb-[1rem] py-1 md:py-6">
	<h1 class="h1 text-center mx-auto capitalize">{data.title}</h1>
</CursorHero>

<article class="grid gap-2 md:grid-cols-[3fr_1fr]">
	<section class="mb-5 md:hidden">
		<TableOfContents />
	</section>
	<main class="container ml-auto prose" use:tocCrawler={{ mode: 'generate' }}>
		<svelte:component this={data.content} />
	</main>
	<aside class="hidden md:block ml-10">
		<TableOfContents />
	</aside>
</article>

<style lang="postcss">
	:global(.prose, .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6) {
		@apply text-secondary-50;
	}
</style>