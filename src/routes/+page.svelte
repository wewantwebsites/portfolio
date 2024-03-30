<script lang="ts">
	import Accordion from '$lib/Accordion.svelte';
	import Text from '$lib/Text.svelte';
	import Timeline from '$lib/Timeline.svelte';
</script>

<Text as="h1">My Portfolio</Text>
<Accordion />
<Text>
	Welcome to my portfolio! I'm a full-stack web developer with a passion for creating beautiful,
	responsive websites. I specialize in front-end development with HTML, CSS, and JavaScript, and
	back-end development with Node.js, Express, and MongoDB. I'm also experienced with Svelte,
	Tailwind CSS, and Supabase. I'm excited to work with you on your next project!
</Text>
<section class="p-10">
	<Timeline />
</section>
