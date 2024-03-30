<script>
	let { as = 'p' } = $props();
</script>

<svelte:element this={as} class={as}>
	<slot />
</svelte:element>
