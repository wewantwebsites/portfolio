<script lang="ts">
	import OutlineCard from './OutlineCard.svelte';
	type Project = {
		title: string;
		description: string;
		image: string;
		link: string;
	};

	type ProjectsProps = {
		projects: Project[];
	};
	let { projects }: ProjectsProps = $props();
</script>

<div class="container mx-auto py-12 md:py-24 lg:py-32">
	<div class="grid max-w-6xl gap-10 md:grid-cols-2 lg:gap-16">
		<div class="flex flex-col justify-center space-y-4">
			<div class="space-y-2 p-4">
				<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
				<p class="max-w-[600px] md:text-xl/relaxed">
					Here are a few projects I've been working on. Click on the project to learn more.
				</p>
			</div>
		</div>
		<div class="grid gap-4 sm:gap-6 lg:order-last">
			{#each projects as project}
				<OutlineCard
					heading={project.title}
					subheading={project.description}
					options={{
						backgroundUri: project.image,
						backgroundAlt: project.title,
						bannerUri: project.image,
						bannerAlt: project.title
					}}
				/>
			{/each}
		</div>
	</div>
</div>
