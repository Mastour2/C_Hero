<script>
    import Container from "./Container.svelte";
</script>
<header class="border-b border-border1 bg-prime">
    <Container>
        <nav class="flex items-center justify-between">
            <section class="text-text select-none flex items-center gap-2">
                <a class="flex items-center gap-3 font-semibold" href="/">
                    <img class="flex-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/570px-C_Programming_Language.svg.png?20201031132917" width="16px" height="16px" alt="c">
                    <p>Hero</p>
                </a>
            </section>
            <section class="flex items-center gap-4">
                <ul class="flex gap-4">
                    <li class="text-sm text-text/70 capitalize hover:text-text">
                        <a href="/learn">learn</a>
                    </li>
                    <li class="text-sm text-text/70 capitalize hover:text-text">
                        <a href="/playground">playground</a>
                    </li>
                    <li class="text-sm text-text/70 capitalize hover:text-text">
                        <a href="/exercise">exercise</a>
                    </li>
                    <li class="text-sm text-text/70 capitalize hover:text-text">
                        <a href="/reference">reference</a>
                    </li>
                </ul>
            </section>
        </nav>
    </Container>
</header>