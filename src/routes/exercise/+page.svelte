<script>
    import Container from "../../components/Container.svelte";
    import Footer from "../../components/Footer.svelte";
    import Navbar from "../../components/Navbar.svelte";
    import Title from "../../components/Title.svelte";

</script>

<section class="flex flex-col h-full">
    <Navbar/>
    <Container>
        <Title title="programs (build program)"/>
        <section class="flex gap-2 flex-wrap ">
            <div class="text-text grid place-content-center font-semibold text-3xl flex-1 h-32 border border-text hover:bg-text hover:text-white">1</div>
            <div class="text-text grid place-content-center font-semibold text-3xl flex-1 h-32 border border-text hover:bg-text hover:text-white">2</div>
            <div class="text-text grid place-content-center font-semibold text-3xl flex-1 h-32 border border-text hover:bg-text hover:text-white">3</div>
            <div class="text-text grid place-content-center font-semibold text-3xl flex-1 h-32 border border-text hover:bg-text hover:text-white">4</div>
            <div class="text-text grid place-content-center font-semibold text-3xl flex-1 h-32 border border-text hover:bg-text hover:text-white">5</div>
        </section>
        <Title title="exercises (small function)"/>
        <section class="flex gap-2 flex-wrap ">
            <div class="text-text grid place-content-center font-semibold text-3xl flex-1 h-32 border border-text hover:bg-text hover:text-white">1</div>
            <div class="text-text grid place-content-center font-semibold text-3xl flex-1 h-32 border border-text hover:bg-text hover:text-white">2</div>
            <div class="text-text grid place-content-center font-semibold text-3xl flex-1 h-32 border border-text hover:bg-text hover:text-white">2</div>
            <div class="text-text grid place-content-center font-semibold text-3xl flex-1 h-32 border border-text hover:bg-text hover:text-white">3</div>
            <div class="text-text grid place-content-center font-semibold text-3xl flex-1 h-32 border border-text hover:bg-text hover:text-white">5</div>
        </section>
        <Title title="implementation (algorithm)"/>
        <section class="flex gap-2 flex-wrap ">
            <div class="text-text grid place-content-center font-semibold text-3xl flex-1 h-32 border border-text hover:bg-text hover:text-white">1</div>
            <div class="text-text grid place-content-center font-semibold text-3xl flex-1 h-32 border border-text hover:bg-text hover:text-white">2</div>
            <div class="text-text grid place-content-center font-semibold text-3xl flex-1 h-32 border border-text hover:bg-text hover:text-white">3</div>
            <div class="text-text grid place-content-center font-semibold text-3xl flex-1 h-32 border border-text hover:bg-text hover:text-white">4</div>
            <div class="text-text grid place-content-center font-semibold text-3xl flex-1 h-32 border border-text hover:bg-text hover:text-white">5</div>
        </section>
        <Title title="quiz (Test)"/>
    </Container>
    <Footer/>
</section>