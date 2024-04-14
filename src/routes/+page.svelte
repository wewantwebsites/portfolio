<script>
	import { Avatar } from '@skeletonlabs/skeleton';

	const avatarURI =
		'https://vurjyxyenyiktfbofpzm.supabase.co/storage/v1/object/public/wewantwebsites_public/img/_73b5b146-8133-4d8f-9a2f-ae894da6619f.jpeg';
</script>

<div class="grid md:grid-cols-2 gap-12 lg:gap-24 min-h-[100vh] px-4">
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
	<div class="grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
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
						<h3 class="text-xl font-bold">
							Example Project: The Complete Guide to Beautiful Websites
						</h3>
						<p class="text-sm">
							Learn how to create stunning websites with this comprehensive and easy-to-follow
							guide.
						</p>
					</div>
				</div>
			</div>
			<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
				<div class="p-4 md:p-6">
					<div class="grid gap-2">
						<h3 class="text-xl font-bold">
							Example Project: The Complete Guide to Beautiful Websites
						</h3>
						<p class="text-sm">
							Learn how to create stunning websites with this comprehensive and easy-to-follow
							guide.
						</p>
					</div>
				</div>
			</div>
			<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
				<div class="p-4 md:p-6">
					<div class="grid gap-2">
						<h3 class="text-xl font-bold">
							Example Project: The Complete Guide to Beautiful Websites
						</h3>
						<p class="text-sm">
							Learn how to create stunning websites with this comprehensive and easy-to-follow
							guide.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="mx-auto grid max-w-4xl items-start gap-10 px-4 md:gap-16 md:px-6">
	<div class="space-y-2 p-4">
		<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Latest Posts</h2>
		<p class="">Thoughts on the web.</p>
	</div>
	<div class="divide-y">
		<div class="grid items-start gap-4 py-4 md:grid-cols-[1fr_200px]">
			<div class="space-y-2">
				<h3 class="text-xl font-bold hover:underline">
					Introducing shadcn: AI-powered design components
				</h3>
				<p class="text-sm">
					Meet the team behind the components. Learn more about our journey and how we created the
					tools that can help you build beautiful apps.
				</p>
			</div>
			<div class="flex flex-col items-start gap-1 text-sm">
				<time class="font-medium" datetime="2022-03-15"> March 15, 2022 </time>
				<a class="underline underline-offset-2" href="#"> Read </a>
			</div>
		</div>
		<div class="grid items-start gap-4 py-4 md:grid-cols-[1fr_200px]">
			<div class="space-y-2">
				<h3 class="text-xl font-bold hover:underline">The Future of Web Development: AI and You</h3>
				<p class="text-sm">
					We're excited to announce the launch of our new AI-powered design components. With shadcn,
					you can create stunning, modern interfaces with just a few lines of code.
				</p>
			</div>
			<div class="flex flex-col items-start gap-1 text-sm">
				<time class="font-medium" datetime="2022-03-10"> March 10, 2022 </time>
				<a class="underline underline-offset-2" href="#"> Read </a>
			</div>
		</div>
	</div>
</div>
