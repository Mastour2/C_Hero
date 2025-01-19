<script>
    import Container from "./Container.svelte";
</script>
<header class="border-b border-border1 bg-prime">
    <Container>
        <nav class="flex items-center justify-between">
            <section class="text-text select-none flex items-center gap-2">
                <a class="flex items-center gap-3 font-semibold" href="/">
                    <img class="flex-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/570px-C_Programming_Language.svg.png?20201031132917" width="19px" height="19px" alt="c">
                    Hero
                </a>
                <span class="text-xs text-text/50 font-light hover:underline">
                    <a href="/">0.0.1</a>
                </span>
            </section>
            <section class="flex items-center gap-4">
                <ul class="flex gap-4">
                    <li class="text-sm text-text/50 capitalize hover:text-text">
                        <a href="/learn">learn</a>
                    </li>
                    <li class="text-sm text-text/50 capitalize hover:text-text">
                        <a href="/exercise">exercise</a>
                    </li>
                    <li class="text-sm text-text/50 capitalize hover:text-text">
                        <a href="/reference">reference <span class="text-[10px] text-white px-1 bg-black">C99</span></a>
                    </li>
                </ul>
            </section>
        </nav>
    </Container>
</header>