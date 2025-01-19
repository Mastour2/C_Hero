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
        <section class="flex-1">
            <div class="border-b border-border1 h-11 px-6">
    
            </div>
            <Container>
                <Title title="Multiplication"/>
                <SubText text="You can also have multiple outputs together in a single 'printf()' function."/>
            </Container>
        </section>
        <section class="flex flex-col flex-1 border-l border-border1">
            <div class="border-b border-border1 h-11 px-6">
    
            </div>
            <!-- svelte-ignore element_invalid_self_closing_tag -->
            <textarea 
                class="flex-1 p-6 text-sm w-full h-full border-0 resize-none font-code bg-prime text-text"
                defaultValue={`void main(void) {\n\n   return(0); \n}`}
                placeholder="code here"
            />
            <div class="border-t border-border1 h-11 px-6">
    
            </div>
        </section>
    </div>
</section>

