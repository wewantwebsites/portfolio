<script context="module">
	export const routes = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Blog', href: '/blog' }
	];
</script>

<script>
	import { page } from '$app/stores';
</script>

<nav>
	<ul class="flex align-center gap-4">
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
