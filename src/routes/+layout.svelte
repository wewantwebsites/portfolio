<script>
	import '../app.css';

	let { children } = $props();
</script>

<header class="w-full">
	<nav class="container mx-auto max-w-[60%]">
		<ul class="nav flex justify-evenly">
			<li>
				<a href="/"><img src="" alt="Logo" /></a>
			</li>
			<li><a href="/about">About</a></li>
			<li><a href="/blog">Blog</a></li>
		</ul>
	</nav>
</header>
{@render children()}
