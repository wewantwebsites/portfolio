<script lang="ts">
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { AppBar } from '@skeletonlabs/skeleton';
	import Nav from '$lib/Nav.svelte';

	let { children } = $props();

	// potentital styles md:bg-gradient-to-r md:from-[#546880] md:to-75% md:to-surface-900
</script>

<AppBar gridColumns="grid-cols-1" slotDefault="place-self-center">
	<Nav />
</AppBar>

<div class="mx-auto p-4">
	{@render children()}
</div>

<footer class="border-t border-t-surface-500 p-4">
	<article class="mx-auto container grid sm:grid-cols-2 md:grid-cols-3">
		<section class="py-3 border-b border-b-surface-700 md:border-none">
			<h3 class="h3">Navigation</h3>
			<ul>
				<li><a class="hover:text-secondary-500" href="/">Home</a></li>
				<li><a class="hover:text-secondary-500" href="/about">About</a></li>
				<li><a class="hover:text-secondary-500" href="/rss.xml">RSS</a></li>
				<!-- <li><a href="/contact">Contact Me</a></li> -->
			</ul>
		</section>
		<section class="py-3 border-b border-b-surface-700 md:border-none">
			<h3 class="h3">Influenced By:</h3>
			<ul>
				<li>
					<a class="hover:text-secondary-500" href="https://madprofessor.blog/"
						>Mad Professor's Blog</a
					>
				</li>
				<li><a href="https://joyofcode.xyz/" class="hover:text-secondary-500">Joy of Code</a></li>
				<li><a href="https://world.hey.com/dhh" class="hover:text-secondary-500">DHH</a></li>
			</ul>
			<h3 class="h3 pt-3">Social</h3>
			<ul>
				<li>
					<a
						class="hover:text-secondary-500"
						href="https://www.linkedin.com/in/casimer-guzdziol-iv-785276100/">LinkedIn</a
					>
				</li>
				<li>
					<a class="hover:text-secondary-500" href="https://github.com/wewantwebsites">GitHub</a>
				</li>
				<li><a class="hover:text-secondary-500" href="https://x.com/cg4dev">Twitter</a></li>
			</ul>
		</section>
		<section class="py-3 col-span-full md:col-span-1">
			<h3 class="h3">Contact</h3>
			<p>
				For any inquiries, please contact me at: <a
					class="text-tertiary-500 hover:text-tertiary-700"
					href="mailto:cas.guzdziol@wewantweb.site">cas.guzdziol@wewantweb.site</a
				>
			</p>
		</section>
	</article>
</footer>
