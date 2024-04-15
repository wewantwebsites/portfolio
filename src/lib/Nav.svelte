<script>
	import { page } from '$app/stores';
	const routes = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Blog', href: '/blog' }
	];
</script>

<nav>
	<ul class="flex gap-4">
		{#each routes as { name, href }}
			<li>
				<a
					{href}
					class:active={$page.url.pathname === href ?? $page.url.pathname.includes(href)}
					data-sveltekit-preload-data="hover">{name}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<style lang="postcss">
	a:hover {
		@apply text-secondary-300;
	}
	.active {
		@apply text-secondary-500;
	}
</style>
