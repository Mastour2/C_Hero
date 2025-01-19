<script>
    import Container from "../../components/Container.svelte";
    import Footer from "../../components/Footer.svelte";
    import Navbar from "../../components/Navbar.svelte";
    import Title from "../../components/Title.svelte";
</script>

<section class="flex flex-col h-full">
    <Navbar/>
    <Container>
        <Title title="reference c99"/>
        <section class="grid grid-cols-4 gap-2">
            <div class="w-full">
                <p class="text-lg mb-2 font-semibold">Basic</p>
                <ul>
                    <li>variables</li>
                    <li>data types</li>
                    <li>pointer</li>
                    <li>array</li>
                    <li>string</li>
                    <li>slice string</li>
                </ul>
            </div>
            <div class="w-full">
                <p class="text-lg mb-2 font-semibold">Basic types</p>
                <ul>
                    <li>int</li>
                    <li>float</li>
                    <li>double</li>
                    <li>long double</li>
                    <li>char</li>
                </ul>
            </div>
            <div class="w-full">
                <p class="text-lg mb-2 font-semibold">Operators</p>
                <ul>
                    <li>+</li>
                    <li>-</li>
                    <li>*</li>
                    <li>/</li>
                    <li>%</li>
                    <li>++</li>
                    <li>--</li>
                </ul>
            </div>
            <div class="w-full">
                <p class="text-lg mb-2 font-semibold">Bitwise Operators</p>
                <ul>

                </ul>
            </div>
            <div class="w-full">
                <p class="text-lg mb-2 font-semibold">Control flow</p>
                <ul>
                    <li>if</li>
                    <li>for loop</li>
                    <li>while loop</li>
                    <li>do while loop</li>
                </ul>
            </div>
            <div class="w-full">
                <p class="text-lg mb-2 font-semibold">Structures & Enumerations</p>
                <ul>
                    <li>variables</li>
                    <li>data types</li>
                    <li>pointer</li>
                    <li>array</li>
                    <li>string</li>
                    <li>slice string</li>
                </ul>
            </div>
            <div class="w-full">
                <p class="text-lg mb-2 font-semibold">Functions</p>
                <ul>
                    <li>void</li>
                    <li>return type</li>
                    <li>return pointer</li>
                    <li>return function</li>
                </ul>
            </div>
            <div class="w-full">
                <p class="text-lg mb-2 font-semibold">Pointers</p>
                <ul>

                </ul>
            </div>
            <div class="w-full">
                <p class="text-lg mb-2 font-semibold">Memory Management</p>
                <ul>
         
                </ul>
            </div>
            <div class="w-full">
                <p class="text-lg mb-2 font-semibold">Standard Library</p>
                <ul>
                    <li>stdio</li>
                    <li>stdlib</li>
                    <li>assert</li>
                    <li>ctype</li>
                    <li>math</li>
                    <li>string</li>
                    <li>stdbool</li>
                    <li>stdint</li>
                    <li>threads</li>
                    <li>time</li>
                    <li>signal</li>
                    <li>limits</li>
                    <li>complex</li>
                </ul>
            </div>
        </section>
    </Container>
    <Footer/>
</section>