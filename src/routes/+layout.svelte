<script>
    import "../app.css";

    let { children } = $props();
</script>

<header>
    <nav>
        <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
        </ul>
    </nav>
</header>
{@render children()}