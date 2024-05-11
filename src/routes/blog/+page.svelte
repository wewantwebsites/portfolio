<script>
	import OutlineCard from '$lib/OutlineCard.svelte';
	let { data } = $props();

	console.log('data: ', data.blogPosts);
</script>

<section class="container mx-auto">
	<h1 class="h1 mb-3">What I've been up to</h1>

	<p class="mb-4">Frontend development, php, & golang for the tech gang.</p>

	{#each data.blogPosts as post}
		<a class="inline-block w-full mb-4" href="/blog/{post.slug}" data-sveltekit-preload-data>
			<OutlineCard
				heading={post.title}
				subheading={post.description}
				options={{
					bannerUri: post.imgSrc,
					bannerAlt: post.imgAlt,
					imgHeight: 200,
					imgWidth: 200
				}}
			/>
		</a>
	{/each}
</section>
