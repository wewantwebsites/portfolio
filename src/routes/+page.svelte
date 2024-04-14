<script>
	import BentoBox from '$lib/BentoBox.svelte';
	import { Avatar } from '@skeletonlabs/skeleton';

	const avatarURI =
		'https://vurjyxyenyiktfbofpzm.supabase.co/storage/v1/object/public/wewantwebsites_public/img/_73b5b146-8133-4d8f-9a2f-ae894da6619f.jpeg';
</script>

<div class="grid md:grid-cols-2 gap-12 lg:gap-24 p-4">
	<div class="flex flex-col justify-center space-y-4">
		<div class="prose space-y-4 py-4">
			<span class="chip variant-filled">Skeleton UI</span>
			<span class="chip variant-filled">Tailwind CSS</span>
			<span class="chip variant-filled">SvelteKit</span>
			<h1
				class="h1 tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-br from-tertiary-500 to-tertiary-300 bg-clip-text text-transparent box-decoration-clone"
			>
				Hi, I'm Casimer A Guzdziol IV
			</h1>
			<p class="max-w-[700px] md:text-xl/relaxed text-secondary-50">
				I'm a frontend engineer with a passion for creating beautiful and accessible web
				experiences. This is my corner of the internet where I share my thoughts and projects.
			</p>
		</div>
		<div class="flex flex-col gap-2 min-[400px]:flex-row">
			<a class="btn variant-filled" href="#"> Contact Me </a>
		</div>
	</div>
	<div class="flex items-center justify-center">
		<Avatar src={avatarURI} initials={'CG'} width="w-[90%]" rounded="rounded-full" />
	</div>
</div>
<div class="container py-12 md:py-24 lg:py-32">
	<div class="grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
		<div class="flex flex-col justify-center space-y-4">
			<div class="space-y-2 p-4">
				<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
				<p class="max-w-[600px] md:text-xl/relaxed">
					Here are a few projects I've been working on. Click on the project to learn more.
				</p>
			</div>
		</div>
		<div class="grid gap-4 sm:gap-6 lg:order-last">
			<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
				<div class="p-4 md:p-6">
					<div class="grid gap-2">
						<h3 class="text-xl font-bold">Brand 360</h3>
						<p class="text-sm">Link to UWM Brand 360 project</p>
					</div>
				</div>
			</div>
			<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
				<div class="p-4 md:p-6">
					<div class="grid gap-2">
						<h3 class="text-xl font-bold">BOLT</h3>
						<p class="text-sm">Link to UWM BOLT project</p>
					</div>
				</div>
			</div>
			<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
				<div class="p-4 md:p-6">
					<div class="grid gap-2">
						<h3 class="text-xl font-bold">Personal Project</h3>
						<p class="text-sm">Link to it</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="mx-auto grid p-4 items-start gap-10 md:gap-16">
	<div class="space-y-2 p-4">
		<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Latest Posts</h2>
		<p class="">Thoughts on the web.</p>
	</div>
	<!-- TODO: bento box my latest posts, biggest box is most recent | smaller boxes are rest posts -->
	<BentoBox />
</div>
