<script>
  import {
    Page,
    Navbar,
    Block,
    BlockTitle,
    BlockHeader,
    Button,
    Link,
    Icon,
    Segmented,
  } from "framework7-svelte";

  let from = "",
    to = "",
    time = "",
    offer = "",
    passanger = "",
    activeStrongButton = 0;
</script>

<Page>
  <br />
  <br />
  <div id="app">
    <Block>
      <Segmented tag="p">
        <Icon f7="map_fill" size="44px" color="blue" />
        <Button />
        <Button />
        <Button />
      </Segmented>
      <input bind:value={from} placeholder="From" />
      <br />
      <input bind:value={to} placeholder="To" />
      <Segmented strong tag="p">
        <Button
          raised
          outline
          iconF7="person"
          active={activeStrongButton === 0}
          onClick={() => (activeStrongButton = 0)}>Single</Button
        >
        <Button
          raised
          outline
          iconF7="person_3"
          active={activeStrongButton === 1}
          onClick={() => (activeStrongButton = 1)}>Group</Button
        >
      </Segmented>
      {#if activeStrongButton === 0}
      <input bind:value={time} placeholder="Time" />
      <br />
      <input bind:value={offer} placeholder="Offer" />
      {:else}
      <input bind:value={time} placeholder="Time" />
      <br />
      <input bind:value={offer} placeholder="Offer" />
      <br />
      <input bind:value={passanger} placeholder="Passanger Number" />
      {/if}

    </Block>
  </div>
</Page>

<style>
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
  }
</style>
