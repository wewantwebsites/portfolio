<script lang="ts">
	import TimelineItem from './TimelineItem.svelte';
	import { timeline } from './data/timeline.json';

	type TimelineItem = {
		id: string;
		date: string;
		title: string;
		description: string;
		mobile?: boolean;
	};
	export let timelineItems: TimelineItem[] = timeline.map((item) => ({
		...item,
		id: crypto.randomUUID()
	}));

	// TODO: on resive event filter out non mobile items
</script>

<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
	{#each timelineItems as item, idx}
		<TimelineItem {...item} even={idx % 2 === 0} />
	{/each}
</ul>
