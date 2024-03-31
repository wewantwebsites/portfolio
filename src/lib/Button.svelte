<script lang="ts">
	type ButtonProps = {
		children: () => any;
		disabled?: boolean;
		full?: boolean;
		primary: boolean;
		className: string;
	};
	let {
		children,
		disabled = false,
		full = false,
		primary = false,
		className
	}: ButtonProps = $props();
</script>

<button
	on:click
	class="btn {className}"
	class:btn-primary={primary}
	class:btn-disabled={disabled}
	class:btn-block={full}
>
	{@render children()}
</button>
