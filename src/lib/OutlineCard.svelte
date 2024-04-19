<script lang="ts">
	let {
		heading,
		subheading,
		options = {
			backgroundUri: 'https://via.placeholder.com/150',
			backgroundAlt: 'Placeholder Image',
			bannerUri: 'https://via.placeholder.com/150',
			bannerAlt: 'Placeholder Image'
		}
	}: {
		heading: string;
		subheading: string;
		options: {
			backgroundUri: string;
			backgroundAlt: string;
			bannerUri: string;
			bannerAlt: string;
		};
	} = $props();
</script>

<!-- [ ] implement the backgroundUri so that upon hover the background zooms in slightly -->
<div
	class="rounded overflow-none shadow-sm p-[1px] relative bg-white transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:variant-gradient-primary-secondary hover:cursor-pointer"
>
	<div class="p-4 md:p-6 rounded bg-surface-900">
		<div class="grid grid-cols-[1fr_auto]">
			<div class="grid subgrid gap-2 text-white">
				<h3 class="text-xl font-bold">{heading}</h3>
				<p class="text-sm">{subheading}</p>
			</div>
			<div>
				<img src={options.bannerUri} alt={options.bannerAlt} />
			</div>
		</div>
	</div>
</div>
