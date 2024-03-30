<script lang="ts">
	type ButtonProps = {
		primary: boolean;
		size?: 'sm' | 'md' | 'lg' | 'xl';
		type?: 'button' | 'submit' | 'reset';

		children: () => any;
	};
	let { primary, size = 'md', type = 'button', children }: ButtonProps = $props();
</script>

<button {type} on:click class:primary class={size}>
	{@render children()}
</button>

<style lang="postcss">
	button {
		@apply text-primary-600 font-bold inline-flex items-center justify-center leading-none shadow transition hover:opacity-75;
	}
	.primary {
		@apply bg-primary-600 text-white;
	}
	.sm {
		@apply rounded-sm text-sm px-3 py-2;
	}
	.md {
		@apply rounded-md px-4 py-3;
	}
	.lg {
		@apply rounded-lg text-lg px-5 py-4;
	}
	.xl {
		@apply rounded-xl text-xl px-6 py-5;
	}
</style>
