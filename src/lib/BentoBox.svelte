<script>
	import BlogCard from './BlogCard.svelte';
	import OutlineCard from './OutlineCard.svelte';
</script>

<div class="box">
	<div class="left">
		<BlogCard imgSrc="https://placehold.co/2100x900.png" />
	</div>
	<div class="top">
		<OutlineCard heading="Skeleton is Awesome!" subheading="Announcements" />
	</div>
	<div class="bottom">
		<OutlineCard heading="Skeleton is Awesome!" subheading="Announcements" />
	</div>
</div>

<style>
	.box {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 1rem;
		grid-row-gap: 3rem;
	}

	.left {
		grid-area: 1 / 1 / 6 / 3;
	}
	.top {
		grid-area: 1 / 3 / 3 / 5;
	}
	.bottom {
		grid-area: 3 / 3 / 5 / 5;
	}
</style>
