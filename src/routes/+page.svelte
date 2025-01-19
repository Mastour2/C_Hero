<script>
    import Container from "../components/Container.svelte";
    import Footer from "../components/Footer.svelte";
    import Hero from "../components/Hero.svelte";
    import Navbar from "../components/Navbar.svelte";
</script>

<section class="flex flex-col h-full bg-prime">
    <Navbar />
    <Container>
        <Hero/>
    </Container>
    <Footer/>
</section>

