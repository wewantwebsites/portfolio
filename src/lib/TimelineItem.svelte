<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import TextOverflow from './TextOverflow.svelte';

	type TimelineItemProps = {
		id: string;
		date: string;
		title: string;
		description: string;
		even?: boolean;
		mobile?: boolean;
	};

	let { id, date, title, description, even = false }: TimelineItemProps = $props();

	const MAX_DESCRIPTION_LENGTH = 120;
	const position = even ? 'start' : 'end';
	const leftAlignedStyle = even ? 'md:text-end' : '';
</script>

<li id="timeline-{id}">
	<div class="timeline-middle">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"
			><path
				fill-rule="evenodd"
				d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
				clip-rule="evenodd"
			/></svg
		>
	</div>
	<div class="mb-10 timeline-{position} {leftAlignedStyle}">
		<time class="font-mono italic">{date}</time>
		<div class="text-lg font-black">{title}</div>
		{#if description?.length > MAX_DESCRIPTION_LENGTH}
			<TextOverflow text={description} clamp={MAX_DESCRIPTION_LENGTH} />
		{:else}
			{description}
		{/if}
	</div>
	<hr />
</li>
