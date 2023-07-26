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

    let f_name = ""; 
    let s_name = "";  

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
                        bind:value= {f_name}
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
                        bind:value= {s_name}
                    />
                </List>
            </CardContent>
        </Card>

        
        {#if f_name != "" ||s_name != "" }
            <Button
                large
                outline
                raised
                bgColor="blue"
                color="white"
                href="/homeDriver/"
                >Continue</Button
            >
        {:else}
            <Button
                disabled
                large
                outline
                raised
                bgColor="blue"
                color="white"
               
              >Continue</Button
            >
        {/if}
   




    </Block>
</Page>
