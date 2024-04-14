<div class="parent">
	<div class="div1 bg-success-400">Most Recent Blog Post</div>
	<div class="div2 bg-warning-400">2nd Most Recent</div>
	<div class="div3 bg-error-400">3rd Most Recent</div>
</div>

<style>
	.parent {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}

	.div1 {
		grid-area: 1 / 1 / 6 / 3;
	}
	.div2 {
		grid-area: 1 / 3 / 3 / 5;
	}
	.div3 {
		grid-area: 3 / 3 / 5 / 5;
	}
</style>
