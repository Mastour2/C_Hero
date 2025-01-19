<script>
    import Container from "../../components/Container.svelte";
import Navbar from "../../components/Navbar.svelte";
    import SubText from "../../components/SubText.svelte";
    import Title from "../../components/Title.svelte";
</script>


<section class="flex flex-col h-full">
    <div class="flex items-center border-b border-border1 h-11 px-6">
        <a href="/">
            out
        </a>
    </div>
    <div class="flex h-full overflow-hidden">
        <section class="flex flex-col flex-1 border-r border-border1">
            <div class="flex items-center border-b border-border1 h-11 ">
                <ul class="flex h-full">
                    <li class="grid text-sm place-content-center border-r border-border1 h-full px-6">main.c</li>
                    <li class="grid text-sm text-text/40 place-content-center border-r border-border1 h-full px-6">util.c</li>
                    <li class="grid text-sm text-text/40 place-content-center border-r border-border1 h-full px-6">player.c</li>
                </ul>
            </div>
            <!-- svelte-ignore element_invalid_self_closing_tag -->
            <textarea 
                class="flex-1 p-6 text-sm w-full h-full border-0 resize-none font-code bg-prime text-text"
                defaultValue={`void main(void) {\n\n   return(0); \n}`}
                placeholder="code here"
                spellcheck="false"
            />
        </section>
        <section class="flex-1 flex flex-col">
            <div class="h-full border-b border-border1 bg-black grid place-content-center">hello ray!</div>
            <div class="h-full p-3">
                <p class="text-sm font-code">> init raylib ok!</p>
            </div>
        </section>
    </div>
</section>

