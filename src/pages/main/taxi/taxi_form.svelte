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
      Toggle
    } from "framework7-svelte";
  
    let password1 = "";
    let password2 = "";
    let license_number = "";
    let taxi_number = "";
    let id_number = "";
    let isTaxiCarOwner = true;
  
    function handleToggleChange(event) {
      isTaxiCarOwner = !isTaxiCarOwner;
  
      if (isTaxiCarOwner) {
        window.location.href = "./user_form.svelte/";
      }
    }
  
    async function sendPostRequest(password, password2, license_number, taxi_number, id_number) {
      try {
        const response = await fetch(
          "http://wasalni.apidb.ovh/content/collection/items/testtt",
          {
            method: "POST",
            headers: {
              "api-key": "USR-34995f44f1393a63cc229c5ee9dae473fb194b42",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              data: {
                password: password1,
                licensenumber: license_number,
                taxinumber: taxi_number,
                idnumber: id_number,
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
              type="password"
              placeholder="Write your password"
              clearButton
              bind:value={password1}
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
              type="password"
              placeholder="Write your password again"
              clearButton
              bind:value={password2}
            />
          </List>
        </CardContent>
      </Card>
  
      <List strongIos dividersIos insetIos>
        <Block style="display: flex; align-items: center; justify-content: center;">
          <div style="margin-right: 10px;">You are a taxi driver?</div>
          <Toggle bind:checked={isTaxiCarOwner} color="yellow" dark on:change={handleToggleChange} />
        </Block>
      </List>
  
      <Card>
        <CardContent>
          <List strongIos dividersIos insetIos>
            <ListInput
              outline
              floatingLabel
              type="number"
              placeholder="Taxi License Number"
              clearButton
              bind:value={license_number}
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
              type="number"
              placeholder="Taxi Number"
              clearButton
              bind:value={taxi_number}
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
              type="number"
              placeholder="ID Card Number"
              clearButton
              bind:value={id_number}
            />
          </List>
        </CardContent>
      </Card>
  
      {#if password1 === password2}
      <Button large outline raised bgColor="blue" color="white" href="/map/">Continue</Button>
      {:else}
      <Button disabled large outline raised bgColor="blue" color="white">Continue</Button>
      {/if}
    </Block>
  </Page>
  