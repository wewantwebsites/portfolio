<script lang="ts">
	import '../app.css';
	import Toolbar from '$lib/Toolbar.svelte';
	import Button from '$lib/Button.svelte';
	import Avatar from '$lib/Avatar.svelte';
	import Tooltip from '$lib/Tooltip.svelte';

	let ro: ResizeObserver;
	$effect(() => {
		ro = new ResizeObserver((entries) => {
			for (const entry of entries) {
				const { target } = entry;
				const { width, height } = target.getBoundingClientRect();
				console.log({ width, height });
			}
		});

		return () => {
			ro.disconnect();
		};
	});
</script>

<header>
	<section>
		<Toolbar>
			<div slot="head">
				<Tooltip text="We Want Websites, LLC owner">
					<Avatar
						initials="WWW"
						imgSrc="https://vurjyxyenyiktfbofpzm.supabase.co/storage/v1/object/public/wewantwebsites_public/img/_73b5b146-8133-4d8f-9a2f-ae894da6619f.jpeg"
					/>
				</Tooltip>
			</div>
			<div slot="body"></div>
			<div slot="tail">tail here</div>
			<div slot="action">
				<Button primary>action here</Button>
			</div>
		</Toolbar>
	</section>
</header>
<main>
	<slot>juicy content here</slot>
</main>
<section>contact form</section>

<footer>footer</footer>

<style>
	.header {
		container-name: header;
		container-type: all;
	}
</style>
