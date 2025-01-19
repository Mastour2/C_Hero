<script>
    import Border from "../../components/Border.svelte";
    import Container from "../../components/Container.svelte";
    import Footer from "../../components/Footer.svelte";
    import Navbar from "../../components/Navbar.svelte";
    import SubText from "../../components/SubText.svelte";
    import Title from "../../components/Title.svelte";
</script>

<section class="flex flex-col h-full">
    <Navbar/>
    <Container >
        <div>
            <Title title="Learn C Programming"/>
            <section>
                <SubText text="Learn C programming easily in our online course. You will master the basic syntax and build a solid foundation for your programming journey."/>
                <ul class="my-8 gap-2 flex">
                    <li>48 lessons</li>
                </ul>
                <a href="/course" class="grid place-content-center bg-[#fff] text-black px-3 py-2 min-w-24 mt-6">Start</a>
            </section>
        </div>
    </Container>
    <Footer/>
</section>