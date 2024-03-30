<script>
	import Navbar from '$lib/Navbar.svelte';
	import '../app.css';
</script>

<header class="sticky top-0 border-b-accent">
	<Navbar />
</header>

<main>
	<slot />
</main>

<footer>footer stuff</footer>
