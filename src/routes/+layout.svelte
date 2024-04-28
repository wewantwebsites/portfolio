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
	import { text } from 'stream/consumers';

	let { children } = $props();
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
				<li><a class="hover:text-tertiary-500" href="/">Home</a></li>
				<li><a class="hover:text-tertiary-500" href="/about">About</a></li>
				<!-- <li><a href="/contact">Contact Me</a></li> -->
			</ul>
		</section>
		<section class="py-3 border-b border-b-surface-700 md:border-none">
			<h3 class="h3">Influenced By:</h3>
			<ul>
				<li><a class="hover:text-tertiary-500" href="https://svelte.dev">Svelte</a></li>
				<li><a class="hover:text-tertiary-500" href="https://tailwindcss.com">Tailwind CSS</a></li>
			</ul>
			<h3 class="h3">Social</h3>
			<ul>
				<li><a class="hover:text-tertiary-500" href="https://linkedin.com">LinkedIn</a></li>
				<li><a class="hover:text-tertiary-500" href="https://github.com">GitHub</a></li>
				<li><a class="hover:text-tertiary-500" href="https://twitter.com">Twitter</a></li>
			</ul>
		</section>
		<section class="py-3 col-span-full md:col-span-1">
			<h3 class="h3">Contact</h3>
			<p>For any inquiries, please contact me at:</p>
		</section>
	</article>
</footer>
