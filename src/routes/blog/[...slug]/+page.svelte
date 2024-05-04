<script lang="ts">
	import ClassicHero from '$lib/ClassicHero.svelte';
	import { Accordion, AccordionItem, TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
	let { data } = $props();
	const keywords = data.keywords?.join(',') || '';

	function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
		if (!date) return '';
		const dateToFormat = new Date(date.replaceAll('-', '/'));
		const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });

		return dateFormatter.format(dateToFormat);
	}
</script>

<svete:head>
	<title>{data.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
	<meta property="og:keywords" content={keywords} />
	<meta name="description" content={data.description} />
	<meta name="keywords" content={keywords} />
	<meta name="twitter:title" content={data.title} />
	<meta name="twitter:description" content={data.description} />
</svete:head>
<!-- 
<CursorHero bannerStyles="m-[-1rem] mb-[1rem] py-1 md:py-6">
	<h1 class="h1 text-center mx-auto capitalize">{data.title}</h1>
</CursorHero> -->

<ClassicHero label={data.title!} />

<div class="container mx-auto p-4">
	<article class="grid gap-2 md:grid-cols-[3fr_1fr]">
		<section class="mb-5 md:hidden">
			<Accordion>
				<AccordionItem>
					<svelte:fragment slot="summary">Quick Links</svelte:fragment>
					<svelte:fragment slot="content">
						<TableOfContents active="text-secondary-500" />
					</svelte:fragment>
				</AccordionItem>
			</Accordion>
		</section>
		<main class="ml-auto prose" use:tocCrawler={{ mode: 'generate' }}>
			<p>published: {formatDate(data?.date)}</p>
			<svelte:component this={data.content} />
		</main>
		<aside class="hidden md:block md:ml-10">
			<div class="come-with-me">
				<TableOfContents active="text-secondary-500" />
			</div>
		</aside>
	</article>
</div>

<style lang="postcss">
	:global(.prose img) {
		@apply w-full;
	}
	:global(.prose, .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6, .prose *) {
		@apply text-white;
	}

	:global(.prose strong, .prose b, .prose em, .prose i) {
		@apply text-secondary-500;
	}

	:global(.prose code) {
		@apply text-neutral-200;
	}

	:global(.prose a) {
		@apply text-tertiary-500 hover:text-tertiary-700;
	}

	.come-with-me {
		position: sticky;
		top: 1.5rem;
	}
</style>
