<script>
	let { title, content, cta } = $props();
</script>

<div
	class="hero min-h-screen"
	style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);"
>
	<div class="hero-overlay bg-opacity-75"></div>
	<div class="hero-content text-center text-lg text-slate-50">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">{title}</h1>
			<p class="mb-5">
				{content}
			</p>
			<button class="btn btn-accent">{cta}</button>
		</div>
	</div>
</div>
