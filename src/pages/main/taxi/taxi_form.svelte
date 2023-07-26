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
    let isTaxiCarOwner = false;

    function handleToggleChange (event) {
        isTaxiCarOwner = ! isTaxiCarOwner;
    
        if (isTaxiCarOwner) {
            window.location.href = './user_form.svelte/ ';
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
                <div  style="margin-right:10px;">
                    you are a taxi driver?
                    
                </div>
               
                <Toggle  bind:checked={isTaxiCarOwner} color="yellow" dark on:change={handleToggleChange}  />
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

        {#if password1 == password2}
            <Button
                large
                outline
                raised
                bgColor="blue"
                color="white"
                href="/homeDriver/">Continue</Button
            >
        {:else}
            <Button disabled large outline raised bgColor="blue" color="white"
                >Continue</Button
            >
        {/if}
    </Block>
</Page>
