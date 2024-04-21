<script>
	import { page } from '$app/stores';
	import { actions } from '$lib/actions';
</script>

<a href="/" data-sveltekit-preload-data>
	<article class="card card-hover variant-ghost-error">
		<section class="p-4 text-center">
			<h1 class="h1">{$page.status}: {$page.error?.message}</h1>
			<p>Click this card to go home</p>
		</section>
	</article>
</a>
