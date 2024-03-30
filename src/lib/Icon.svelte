<script lang="ts">
	import Icon from '@iconify/svelte';

	let { iconName = '' } = $props();
</script>

<Icon icon={iconName} />
