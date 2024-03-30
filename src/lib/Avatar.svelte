<script lang="ts">
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let imgAlt = 'Avatar';
	export let imgSrc =
		'https://vurjyxyenyiktfbofpzm.supabase.co/storage/v1/object/public/wewantwebsites_public/img/_73b5b146-8133-4d8f-9a2f-ae894da6619f.jpeg';
</script>

<div class="avatar">
	<div class="w-14 rounded-xl">
		<img src={imgSrc} alt={imgAlt} />
	</div>
</div>
