<script>
  import {
    Page,
    Navbar,
    Block,
    BlockTitle,
    Button,
    ListInput,
    List,
    CardContent,
    Card,
  } from "framework7-svelte";

  let f_name = "",
    s_name = "",
    phone = localStorage.getItem("phoneNumber");

  async function sendPostRequest(phone, name, surname) {
    try {
      const response = await fetch(
        "http://wasalni.apidb.ovh/api/content/item/Test",
        {
          method: "POST",
          headers: {
            "api-key": "USR-34995f44f1393a63cc229c5ee9dae473fb194b42",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              _state: 1,
              phone: phone,
              name: name,
              surname: surname,
            },
          }),
        }
      );
      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
</script>

<Page>
  <Navbar title="Account" backLink="Back" />
  <Block>
    <Card>
      <CardContent>
        <List strongIos dividersIos insetIos>
          <ListInput
            outline
            floatingLabel
            type="text"
            placeholder="Your first name"
            clearButton
            bind:value={f_name}
          />
        </List>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <List strongIos dividersIos insetIos>
          <ListInput
            outline
            floatingLabel
            type="text"
            placeholder="Your second name"
            clearButton
            bind:value={s_name}
          />
        </List>
      </CardContent>
    </Card>

    {#if f_name != "" && s_name != ""}
      <Button
        large
        outline
        raised
        bgColor="blue"
        color="white"
        href="/map/"
        on:click={sendPostRequest(phone, f_name, s_name)}>Continue</Button
      >
    {:else}
      <Button disabled large outline raised bgColor="blue" color="white"
        >Continue</Button
      >
    {/if}
  </Block>
</Page>
