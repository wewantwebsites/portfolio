<script lang="ts">
	type AccordionEl = {
		title: string;
		content: string;
	};
	type AccordionProps = {
		contents: AccordionEl[];
	};

	let { contents }: AccordionProps = $props();
</script>

{#each contents as { title, content }, i}
	<div class="collapse collapse-plus bg-base-200">
		<input type="radio" name="my-accordion-3" checked="checked" />
		<div class="collapse-title text-xl font-medium">{title}</div>
		<div class="collapse-content">
			<p>{content}</p>
		</div>
	</div>
{/each}
