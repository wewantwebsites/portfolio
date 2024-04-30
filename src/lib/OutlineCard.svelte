<script lang="ts">
	type OutlineCardProps = {
		heading: string;
		subheading: string;
		options: {
			bannerUri: string;
			bannerAlt: string;
			imgHeight?: number;
			imgWidth?: number;
		};
	};

	let {
		heading,
		subheading,
		options = {
			bannerUri: 'https://via.placeholder.com/150',
			bannerAlt: 'Placeholder Image',
			imgHeight: 300,
			imgWidth: 300
		}
	}: OutlineCardProps = $props();
</script>

<!-- [ ] implement the backgroundUri so that upon hover the background zooms in slightly -->
<div
	class="rounded overflow-none shadow-sm p-[1px] relative bg-white transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:variant-gradient-primary-secondary hover:animate-gradient-rotate hover:cursor-pointer hover:scale-[101%] hover:shadow-lg"
	class="rounded overflow-none shadow-sm p-[1px] relative bg-white transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:variant-gradient-primary-secondary hover:animate-gradient-rotate hover:cursor-pointer hover:scale-[101%] hover:shadow-lg"
>
	<div class="p-4 hidden md:block md:p-6 rounded bg-gradient-to-br from-surface-700 to-surface-900">
		<div class="grid gap-x-4 grid-cols-[2fr_1fr]">
			<div class="grid subgrid gap-2 text-white">
				<h3 class="text-xl font-bold">{heading}</h3>
				<p class="text-sm">{subheading}</p>
			</div>
			<img
				class="ml-auto"
				width={options.imgWidth}
				height={options.imgHeight}
				src={options.bannerUri}
				alt={options.bannerAlt}
			/>
		</div>
	</div>

	<div
		class="block rounded md:hidden bg-cover bg-[center_top_65%] bg-no-repeat"
		style="background-image: url({options.bannerUri});"
	>
		<div class="md:p-6 rounded p-4 w-full bg-surface-800 bg-opacity-80 hover:bg-opacity-65">
			<h3 class="h3 mb-3">{heading}</h3>
			<p class="text-sm">{subheading}</p>
		</div>
	</div>
</div>
