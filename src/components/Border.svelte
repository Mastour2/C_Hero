<script>
    const {title = "program", children} = $props()

</script>

<section class="border border-border2 flex flex-col w-[186px] h-[86px] mt-4 select-none bg-prime">
    <header class="text-text flex items-center justify-center text-xs w-full min-h-[32px] border-b-border2 border-b capitalize">
        {title}
    </header>
    <div class="grid place-items-center flex-1 text-text">
        {@render children?.()}
    </div>
</section>

<!-- <code class="text-sm">
    <a href="/learn">void* start()</a>
</code> -->