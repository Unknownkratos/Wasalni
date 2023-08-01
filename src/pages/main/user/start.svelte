<script>
  import { Page, Navbar, Block, Button } from "framework7-svelte";
  let showButtons = false;

  function toggleButtons() {
    showButtons = !showButtons;
  }
</script>

<Page
  style="background-color: hsl(48, 85%, 50%); display: flex;
flex-direction: column;
align-items: center;
justify-content: center;"
>
  <!-- Loader Animation -->
  {#if !showButtons}
    <div class="loader">
      <div class="bar1" />
      <div class="bar2" />
      <div class="bar3" />
      <div class="bar4" />
      <div class="bar5" />
      <div class="bar6" />
    </div>
  {/if}

  <Block
    inset
    outlineIos
    class="center"
    style="display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;"
  >
    <img
      id="logo"
      src="img/logo.svg"
      alt="Wasalni Logo"
      style="width: 100px; height: 100px;"
    />
    <img
      id="text"
      src="img/Text.svg"
      alt="Wasalni Logo"
      style="width: 100px; height: 100px;"
    />
  </Block>

  <Block>
    {#if showButtons}
      <div>
        <!-- Your Buttons or other content here -->
        <Button raised tonal outline round iconF7="ticket_fill">Bus</Button>
        <Button raised tonal outline round iconF7="tram_fill">Train</Button>
      </div>
    {/if}
    <br />
  </Block>
</Page>

<style>
  /* Loader styles */
  .loader {
    margin: 0 auto;
    width: 60px;
    height: 50px;
    text-align: center;
    font-size: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(380%) translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader > div {
    height: 100%;
    width: 8px;
    display: inline-block;
    margin-left: 2px;
    animation: delay 0.8s infinite ease-in-out;
  }

  .loader .bar1 {
    background-color: hsl(211, 78%, 23%);
  }
  .loader .bar2 {
    background-color: hsl(211, 78%, 23%);
    animation-delay: -0.7s;
  }
  .loader .bar3 {
    background-color: hsl(211, 78%, 23%);
    animation-delay: -0.6s;
  }
  .loader .bar4 {
    background-color: hsl(211, 78%, 23%);
    animation-delay: -0.5s;
  }
  .loader .bar5 {
    background-color: hsl(211, 78%, 23%);
    animation-delay: -0.4s;
  }
  .loader .bar6 {
    background-color: hsl(211, 78%, 23%);
    animation-delay: -0.3s;
  }

  @keyframes delay {
    0%,
    40%,
    100% {
      transform: scaleY(0.05);
    }
    20% {
      transform: scaleY(1.2);
    }
  }
  img {
    padding-top: 15px;
  }
</style>
