<script>
  import {
    Page,
    Navbar,
    Subnavbar,
    Block,
    BlockTitle,
    Button,
    Link,
  } from "framework7-svelte";

  let name = "",
    surname = "",
    dateOfBirth = "",
    eMail = "",
    avatar,
    fileinput;

  const onFileSelected = (e) => {
    let image = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      avatar = e.target.result;
    };
  };
</script>

<Page>
  <br />
  <Block inset outlineIos class="center">
    <div id="app">
      <h3>Primary Information</h3>
      {#if avatar}
        <img class="avatar" src={avatar} alt="d" />
      {:else}
        <img class="avatar" src="/pics/fish.svg" alt="User" />
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
      <br />
      <input bind:value={name} placeholder="Name" />
      <br />
      <input bind:value={surname} placeholder="Surname" />
      <br />
      <input bind:value={dateOfBirth} placeholder="Date Of Birth" />
      <br />
      <input bind:value={eMail} placeholder="E-mail" />
      <br />
      <!-- <button  style="background-color: #39c41f">Next</button> -->
      <Button
        class="center"
        size="xs"
        width="120"
        height="120"
        strong
        large
        outline
        inset
        bgColor="blue"
        color="white"
        href="/enter/"
        text="Next"
      />
    </div>
  </Block>
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
