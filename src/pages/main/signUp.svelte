<script>
    import {
        Page,
        Navbar,
        Block,
        BlockTitle,
        Button,
        ListInput,
        List,
        Link
    } from "framework7-svelte";
    let num = "";
    
    function continueHandler() {
    
    localStorage.setItem('phoneNumber', num);

      }

</script>

<Page>
    <Navbar title="SignIn" backLink="Back" />
    <BlockTitle large>Pick your Number</BlockTitle>

    <List strongIos dividersIos insetIos>
        <ListInput
            
            outline
            label="Phone"
            floatingLabel
            type="tel"
            placeholder="Your phone number"
            clearButton
            on:change={continueHandler}
          
            bind:value={num}
           
        >
            <i class="icon demo-list-icon" slot="media" />
        </ListInput>


    </List>
    {#if num.length == 8}
    
    <Button  large outline raised bgColor="blue" color="white"  href='/verification/'   >Continue</Button>

    {:else}
        <Button disabled large outline raised bgColor="blue" color="white"></Button>

    {/if}
 

</Page>
