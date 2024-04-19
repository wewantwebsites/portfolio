<script lang="ts">
	import type { BlogCardProps } from './type';

	let {
		heading = 'Skeleton is Awesome!',
		subheading = 'Announcements',
		description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident
				eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam iure
				molestias cum expedita architecto itaque quae rem.`,
		imgSrc = '',
		imgAlt = 'Placeholder Image',
		target = '#',
		publishDate = '4/20/2024',
		author = {
			name: 'Casimer A Guzdziol IV',
			imgSrc:
				'https://vurjyxyenyiktfbofpzm.supabase.co/storage/v1/object/public/wewantwebsites_public/img/_73b5b146-8133-4d8f-9a2f-ae894da6619f.jpeg',
			imgAlt: 'Casimer A Guzdziol IV'
		}
	}: BlogCardProps = $props();
</script>

<a class="card bg-initial card-hover overflow-hidden" href={target}>
	{#if imgSrc}
		<header>
			<img src={imgSrc} class="bg-black/50 w-full aspect-[21/9]" alt={imgAlt} />
		</header>
	{/if}
	<section class="space-y-4 {imgSrc && 'p-4'}">
		<h6 class="h6" data-toc-ignore="">{subheading}</h6>
		<h3 class="h3" data-toc-ignore="">{heading}</h3>
		<article>
			<p>{description}</p>
		</article>
	</section>
	<hr class="opacity-50" />
	<footer class="p-4 flex justify-start items-center space-x-4">
		<figure
			class="avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-8 rounded-full"
			data-testid="avatar"
		>
			<img class="avatar-image w-full object-cover" src={author.imgSrc} alt={author.imgAlt} />
		</figure>
		<div class="flex-auto flex justify-between items-center">
			<h6 class="font-bold" data-toc-ignore="">{author.name}</h6>
			<small>On {publishDate}</small>
		</div>
	</footer>
</a>

<style>
	a:hover {
		cursor: pointer;
	}
</style>
