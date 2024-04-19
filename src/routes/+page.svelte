<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	import OutlineCard from '$lib/OutlineCard.svelte';
	import Projects from '$lib/Projects.svelte';

	let { data } = $props();
	const { avatarURI, blogPosts, featureFlags, tags } = data;
	const { blogFlag, projectsFlag } = featureFlags;
</script>

<div class="grid md:grid-cols-2 gap-12 lg:gap-24">
	<div class="flex flex-col justify-center space-y-4">
		<div class="prose space-y-4 py-4">
			<span class="chip variant-ghost-tertiary text-white">Welcome to my portfolio!</span>
			{#each tags as tag}
				<span class="chip variant-ghost-secondary text-neutral-200 pointer-events-none mr-2"
					>{tag}</span
				>
			{/each}
			<h1
				class="h1 tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-br from-primary-500 to-secondary-300 bg-clip-text text-transparent box-decoration-clone"
			>
				Hi, I'm Casimer A Guzdziol IV
			</h1>
			<p class="max-w-[700px] md:text-xl/relaxed text-secondary-50">
				I'm a frontend engineer with a passion for creating beautiful and accessible web
				experiences. This is my corner of the internet where I share my thoughts and projects. Enjoy
				😄
			</p>
		</div>
		<div class="flex flex-col gap-2 min-[400px]:flex-row">
			<a class="btn variant-ghost-primary" href="mailto:cas.guzdziol@wewantweb.site"> Email Me </a>
		</div>
	</div>
	<div class="flex items-center justify-center">
		<Avatar src={avatarURI} initials={'CG'} width="w-[90%]" rounded="rounded-full" />
	</div>
</div>

{#if projectsFlag}
	<Projects />
{/if}

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
