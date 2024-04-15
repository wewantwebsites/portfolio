<script>
	let { heading, subheading, backgroundURI = '' } = $props();
</script>

<div
	class="rounded overflow-none shadow-sm p-[1px] relative bg-white transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:variant-gradient-primary-secondary"
>
	<div class="p-4 md:p-6 rounded bg-surface-900">
		<div class="grid gap-2 text-white">
			<h3 class="text-xl font-bold">{heading}</h3>
			<p class="text-sm">{subheading}</p>
		</div>
	</div>
</div>
