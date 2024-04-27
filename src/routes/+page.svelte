<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import OutlineCard from '$lib/OutlineCard.svelte';
	import { Mail } from 'lucide-svelte';

	let { data } = $props();
	const { blogPosts, featureFlags, tags } = data;
	const { blogFlag, projectsFlag } = featureFlags;
	const bigHairUri = '/img/big-hair.jpg';
	const storyTellingUri = '/img/story-telling.jpg';
	let normalImg = $state(true);

	function photoSwap(node: Node, { img }) {
		const handleMouseEnter = () => (img = false);
		const handleMouseLeave = () => (img = true);
		node.addEventListener('mouseenter', handleMouseEnter);
		node.addEventListener('mouseleave', handleMouseLeave);

		return {
			destroy() {
				node.removeEventListener('mouseenter', handleMouseEnter);
				node.removeEventListener('mouseleave', handleMouseLeave);
			}
		};
	}
</script>

<div class="container mx-auto grid md:grid-cols-2 gap-12 lg:gap-24">
	<div class="flex flex-col justify-center space-y-4">
		<div class="prose space-y-4 py-4">
			<span class="chip variant-ghost-primary text-white">Welcome to my portfolio!</span>
			{#each tags as tag}
				<span class="chip variant-ghost-secondary text-neutral-200 pointer-events-none mr-2"
					>{tag}</span
				>
			{/each}
			<h1 class="name-heading">Hi, I'm Casimer A Guzdziol IV</h1>
			<p class="max-w-[700px] md:text-xl/relaxed text-secondary-50">
				I'm a frontend engineer with a passion for creating beautiful and accessible web
				experiences. This is my corner of the internet where I share my thoughts and projects. Enjoy
				😄
			</p>
		</div>
		<div class="flex flex-col gap-2 min-[400px]:flex-row">
			<a class="btn variant-ghost-primary" href="mailto:cas.guzdziol@wewantweb.site"
				><Mail class="mr-3" /> Email Me
			</a>
		</div>
	</div>
	<div class="flex items-center justify-center">
		<Avatar
			src={storyTellingUri}
			initials={'CG'}
			width="w-full"
			rounded="rounded-full"
			border="border-4 border-primary-500"
		/>
	</div>
	{#if projectsFlag && data.blogPosts.length > 0}
		<section class="col-span-full grid subgrid gap-3">
			{#each data.blogPosts as post}
				<a href="/blog/{post.slug}" data-sveltekit-preload-data>
					<OutlineCard
						heading={post.title}
						subheading={post.description}
						options={{
							backgroundUri: post.image,
							backgroundAlt: post.title,
							bannerUri: post.image,
							bannerAlt: post.title
						}}
					/>
				</a>
			{/each}
		</section>
	{/if}
</div>

{#if blogFlag}
	<div class="mx-auto items-start gap-8 md:gap-12">
		<div class="py-4">
			<h2 class="h2 tracking-tighter">My Latest Posts</h2>
			<p>What I have been thinking most recently</p>
		</div>
		<section class="grid gap-4">
			{#each blogPosts as post}
				<OutlineCard {...post} />
			{/each}
		</section>
	</div>
{/if}

<style lang="postcss">
	.name-heading {
		@apply h1 tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-br from-primary-500 to-secondary-300 bg-clip-text text-transparent box-decoration-clone !important;
	}
</style>
