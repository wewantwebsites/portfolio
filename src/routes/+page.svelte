<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import OutlineCard from '$lib/OutlineCard.svelte';
	import { Mail } from 'lucide-svelte';

	let { data } = $props();
	const { blogPosts, featureFlags, tags, avatarURI } = data;
	const { projectsFlag } = featureFlags;

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
			<h1 class="name-heading">Casimer A Guzdziol IV</h1>
			<p class="max-w-[700px] md:text-xl/relaxed text-white">
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
			src={avatarURI}
			initials={'CG'}
			width="max-w-[300px] md:max-w-full"
			rounded="rounded-full"
			border="border-4 border-primary-500"
		/>
	</div>
	{#if projectsFlag && data.blogPosts.length > 0}
		<section class="col-span-full grid subgrid gap-3">
			{#each blogPosts as post}
				<a href="/blog/{post.slug}" data-sveltekit-preload-data>
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
	{/if}
	{#if !!data?.posts.length}
		{#each data.posts as post}
			<a href="/blog/{post.slug}" data-sveltekit-preload-data>
				<h4>
					{post.title}
				</h4>
				<div>
					{post.description}
				</div>
				/>
			</a>
		{/each}
	{/if}
</div>

<style lang="postcss">
	.name-heading {
		@apply h1 tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-br from-primary-500 to-secondary-300 bg-clip-text text-transparent box-decoration-clone !important;
	}
</style>
