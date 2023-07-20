<Page>
    <Navbar title="Welcome Page" backLink="Back" />
    <Block  inset  outlineIos class="center">
        <h1 >Wasalni Logo</h1>

            <Button class='center'  strong large outline inset bgColor="blue" color="white" href='/signup/' >
            Enter
            
            </Button> 
        
    </Block>


       
  <Block >
    {#if showButtons==true}
        <div class="grid grid-cols-2 grid-gap">
            <Button raised tonal small size="1"  outline round iconF7="ticket_fill" >Bus</Button>
            <Button raised tonal small size="1"  outline round iconF7="tram_fill" >Train</Button>
        </div>
    {/if}
    <br>
    <Button raised tonal small size="1" outline round iconF7="archivebox_fill"  on:click={toggleButtons} >
        Schudle
        </Button>
  </Block>





  </Page>
  <script>
    import { Page, Navbar, Block, BlockTitle,Button,Link } from 'framework7-svelte';
    let showButtons = false;

    function toggleButtons() {
        showButtons = !showButtons;
        }




  </script>
  