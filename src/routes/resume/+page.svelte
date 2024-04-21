<script>
	import CursorHero from '$lib/CursorHero.svelte';
</script>

<div class="flex flex-col min-h-[100dvh]">
	<header class="bg-primary-800 text-white mb-4">
		<div class="container mx-auto flex flex-col items-center text-center py-8 px-4 md:px-6">
			<h1 class="h1 mb-2">Casimer A. Guzdziol IV</h1>
			<h2 class="h2 mb-4">Software Engineer, Web UI Guru</h2>
			<div class="flex items-center space-x-4">
				<a href="mailto:cas.guzdziol@wewantweb.site" class="hover:underline"
					>cas.guzdziol@wewantweb.site</a
				>
				<span>|</span>
				<a
					href="https://www.linkedin.com/in/casimer-guzdziol-iv-785276100/"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:underline"
				>
					LinkedIn
				</a>
			</div>
		</div>
	</header>
	<main class="container mx-auto py-12 px-4 md:px-6">
		<section class="mb-12">
			<h2 class="h2 mb-4">Work Experience</h2>
			<div class="space-y-8">
				<div>
					<h3 class="h3 mb-2">UI Architect</h3>
					<p class="text-gray-500 mb-2">
						United Wholesale Mortgage | 2018 - Feb, 2020 / July, 2020 - Present
					</p>
					<ul class="list-disc pl-6 space-y-2">
						<li>
							Developed and maintained web applications using React, VueJS, and .NET Razor MVC
						</li>
						<li>Collaborated with cross-functional teams to design and implement new features.</li>
						<li>Participated in code reviews and provided feedback to improve code quality.</li>
						<li>Mentored younger developers and encouraged good career practices</li>
					</ul>
				</div>
				<div>
					<h3 class="h3 mb-2">Software Engineer</h3>
					<p class="text-gray-500 mb-2">Tyler Technologies | Feb, 2020 - July, 2020</p>
					<ul class="list-disc pl-6 space-y-2">
						<li>Assisted with the development of a Records Management System</li>
						<li>
							Worked with strong cross collaborative teams and assisted in the breakdown of work
							over 16 week periods
						</li>
						<li>Participated in daily stand-up meetings and sprint planning sessions.</li>
						<li>Documented missing updates to the onboarding guides</li>
					</ul>
				</div>
			</div>
		</section>
		<section class="mb-12">
			<h2 class="h2 mb-4">Education</h2>
			<div>
				<h3 class="h3 mb-2">Associate of Science in Computer Science</h3>
				<p class="text-gray-500 mb-2">University of Example | 2015 - 2019</p>
				<p>Graduated with a GPA of 3.4 and received the Dean's List award my last 4 semesters.</p>
			</div>
		</section>
		<section class="mb-12">
			<h2 class="h2 mb-4">Skills</h2>
			<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
				<div class="card card-hover variant-ghost-primary rounded-md p-4">
					<h3 class="h3 mb-2">Programming Languages</h3>
					<ul class="list-disc pl-6 space-y-2">
						<li>Java/TypeScript</li>
						<li>Golang</li>
						<li>PHP</li>
					</ul>
				</div>
				<div class="card card-hover variant-ghost-primary rounded-md p-4">
					<h3 class="h3 mb-2">Frameworks and Libraries</h3>
					<ul class="list-disc pl-6 space-y-2">
						<li>React, Vue, Angular, Svelte</li>
						<li>Node, Deno, Bun</li>
						<li>Express, Koa</li>
						<li>SvelteKit</li>
						<li>TailwindCSS, BEM, SMACCS, SCSS/LESS</li>
					</ul>
				</div>
				<div class="card card-hover variant-ghost-primary rounded-md p-4">
					<h3 class="h3 mb-2">Tools and Technologies</h3>
					<ul class="list-disc pl-6 space-y-2">
						<li>Git</li>
						<li>Docker</li>
						<li>AWS</li>
						<li>npm, pnpm, yarn</li>
						<li>husky</li>
						<li>vite, vitest/jest</li>
					</ul>
				</div>
			</div>
		</section>
		<section class="mb-12">
			<h2 class="h2 mb-4">Projects</h2>
			<div class="space-y-8">
				<div>
					<h3 class="h3 mb-2">BOLT</h3>
					<p class="text-gray-500 mb-2">2021 - Present</p>
					<p>
						Company project to build a new web application for use by Underwriters & Brokers. Built
						with React & Chakra UI.
					</p>
				</div>
				<div>
					<h3 class="h3 mb-2">Brand 360</h3>
					<p class="text-gray-500 mb-2">2019 - 2021</p>
					<p>
						Built a tool for customizing broker and realtor marketing materials. Built with Vue and
						all hand-rolled components
					</p>
				</div>
			</div>
		</section>
	</main>
</div>

<style>
	h1,
	h2,
	h3 {
		font-family: 'IBM Plex Sans', sans-serif;
		--font-sans: 'IBM Plex Sans';
	}
	:global(body) {
		font-family: 'Libre Franklin', sans-serif;
		--font-sans: 'Libre Franklin';
	}
</style>
