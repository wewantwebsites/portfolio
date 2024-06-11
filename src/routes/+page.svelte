<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { Mail } from 'lucide-svelte';
	import type { PageData } from './$types';
	import OutlineCard from '$lib/OutlineCard.svelte';

	type Props = {
		data: PageData;
	};
	let { data }: Props = $props();
	console.log(data);
</script>

<div class="container mx-auto grid md:grid-cols-2 gap-12 lg:gap-24">
	<div class="flex flex-col justify-center space-y-4">
		<div class="prose space-y-4 py-4">
			<span class="chip variant-ghost-primary text-white">Welcome to my portfolio!</span>
			{#each data.tags as tag}
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
			src={data.avatarURI}
			initials={'CG'}
			width="max-w-[300px] md:max-w-full"
			rounded="rounded-full"
			border="border-4 border-primary-500"
		/>
	</div>
	<section class="col-span-full grid subgrid gap-3">
		{#each data?.posts as post}
			<a href="/blog/{post.slug}" data-sveltekit-preload-data>
				<OutlineCard
					heading={post.title}
					subheading={post.description}
					options={{
						bannerUri: post.coverImage.url ?? '',
						bannerAlt: post.imgAlt ?? '',
						imgHeight: Math.min(post.coverImage.height, 200),
						imgWidth: Math.min(post.coverImage.width, 400)
					}}
				/>
			</a>
		{/each}
	</section>
</div>

<style lang="postcss">
	.name-heading {
		@apply h1 tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-br from-primary-500 to-secondary-300 bg-clip-text text-transparent box-decoration-clone !important;
	}
</style>
