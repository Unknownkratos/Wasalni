<script>
  import {
    Page,
    Navbar,
    Block,
    BlockTitle,
    BlockHeader,
    Button,
    Link,
  } from "framework7-svelte";

  let avatar, fileinput;

  const onFileSelected = (e) => {
    let image = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      avatar = e.target.result;
    };
  };
</script>

<Page >
  <br>
  <br>
  <div id="app">
    <Block outline inset>
      <br>
      <h3>Taxi License (optional)</h3>
      {#if avatar}
        <img class="avatar" src={avatar} alt="d" />
      {:else}
        <img class="avatar" src="/pics/fish.svg" alt="License" />
      {/if}
      <br />
      <Button
        onClick={() => {
          fileinput.click();
        }}
        class="center"
        strong
        small
        outline
        round
        inset
        bgColor="blue"
        color="white"
        text="Upload Image"
      />
      <input
        style="display:none"
        type="file"
        accept=".jpg, .jpeg, .png"
        on:change={(e) => onFileSelected(e)}
        bind:this={fileinput}
      />
      <br>
    </Block>
    <Button
      class="center"
      large
      strong
      outline
      round
      inset
      bgColor="blue"
      color="white"
      href="/enter/"
      text="Next"
    />
  </div>
</Page>

<style>
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
  }
  .avatar {
    display: flex;
    height: 200px;
    width: 200px;
  }
</style>
