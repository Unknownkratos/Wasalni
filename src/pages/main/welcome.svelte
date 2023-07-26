<Page style="background-color: hsl(48, 85%, 50%);">  
    <Block inset outlineIos class="center">
        <img src="img/logo.svg" alt="Wasalni Logo" style="width: 100px; height: 100px; position: relative; bottom: -150px; left: 128px;" />

  
      <Button
        class="center"
        style="font-size: 10px; padding: 4px 8px; min-width: 50px; position: relative; bottom: -200px; background-color :hsl(211, 78%, 23%)"
        strong outline inset color="white" href='/signup/'
      >
        Enter
      </Button>
    </Block>
  
    <Block>
      {#if showButtons == true}
      <div class="grid grid-cols-2 grid-gap">
        <Button
          raised
          tonal
          outline
          round
          iconF7="ticket_fill"
          style="font-size: 10px; padding: 4px 8px; min-width: 50px ;"
        >
          Bus
        </Button>
        <Button
          raised
          tonal
          outline
          round
          iconF7="tram_fill"
          style="font-size: 10px; padding: 4px 8px; min-width: 50px;"
        >
          Train
        </Button>
      </div>
      {/if}
      <br>
      <Button
        raised
        tonal
        outline
        round
        iconF7="archivebox_fill"
        on:click={toggleButtons}
        style="
          font-size: 8px;
          padding: 2px 4px;
          min-width: 40px;
          position: absolute;
          bottom: -480px;
          right: 5px;
        "
      >
        Schedule
      </Button>
    </Block>
  </Page>
  
  <script>
    import { Page, Navbar, Block, Button } from 'framework7-svelte';
    let showButtons = false;
  
    function toggleButtons() {
      showButtons = !showButtons;
    }
  </script>
  