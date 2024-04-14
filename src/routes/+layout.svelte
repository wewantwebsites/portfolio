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
</script>

<AppBar gridColumns="grid-cols-1" slotDefault="place-self-center">
	<nav>
		<ul class="flex gap-4">
			<li>
				<a class="anchor" href="/">Home</a>
			</li>
			<li>
				<a class="anchor" href="/about">About</a>
			</li>
			<li>
				<a class="anchor" href="/blog">Blog</a>
			</li>
		</ul>
	</nav>
</AppBar>

<slot />

<!-- <style lang="postcss">
	a:hover {
		@apply text-secondary-300;
	}
	a:
</style> -->
