<script lang="ts">
	import { createToolbar, melt } from '@melt-ui/svelte';

	const {
		elements: { root, separator },
		builders: { createToolbarGroup }
	} = createToolbar();
	const {
		elements: { group: fontGroup, item: fontItem }
	} = createToolbarGroup({
		type: 'multiple'
	});
	const {
		elements: { group: alignGroup, item: alignItem }
	} = createToolbarGroup();
</script>

<div
	use:melt={$root}
	class="flex min-w-max items-center gap-4 rounded-md bg-white px-3 py-3 text-neutral-700 shadow-sm dark:bg-primary-200"
>
	<div class="flex items-center gap-1" use:melt={$fontGroup}>
		<slot name="head" />
	</div>
	{#if $$slots.body}
		{#if $$slots.head}
			<div class="separator" use:melt={$separator} />
		{/if}
		<div class="flex items-center gap-1" use:melt={$alignGroup}>
			<div class="item">
				<slot name="body" />
			</div>
		</div>
	{/if}
	{#if $$slots.tail}
		{#if $$slots.body || $$slots.head}
			<div class="separator" use:melt={$separator} />
		{/if}
		<div class="flex items-center gap-1">
			<slot name="tail" />
		</div>
	{/if}

	{#if $$slots.action}
		<div class="flex items-center gap-1 ml-auto">
			<slot name="action" />
		</div>
	{/if}
</div>

<style lang="postcss">
	.item {
		padding: theme('spacing.1');
		border-radius: theme('borderRadius.md');

		&:hover {
			background-color: theme('colors.primary.100');
		}

		&[data-state='on'] {
			background-color: theme('colors.primary.200');
			color: theme('colors.primary.900');
		}

		&:focus {
			@apply ring-2 ring-primary-400;
		}
	}

	.separator {
		width: 1px;
		background-color: theme('colors.neutral.300');
		align-self: stretch;
	}
</style>
