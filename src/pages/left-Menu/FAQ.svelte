<Page>
  <Navbar title="Famous Questions" backLink="Back" />
  
  <div class="inline-container-header">
    <Icon f7="question_circle" style="margin-top: 15px;"></Icon> 
    <BlockTitle>FAQ</BlockTitle>
  </div>  

  <BlockTitle>Most Frequently Asked Question</BlockTitle>
  <List strong outlineIos dividersIos insetMd accordionList accordionOpposite>
    <ListItem accordionItem title="Drivers not answering?">
      <AccordionContent>
        <Block>
          <p>
            If the driver does not respond to your ride request:<br>
            Try increasing the price of the flight,and then submit your request again.<br>
            Keep in mind that drivers are busier during rush hour?<br>
            So expect to pay more for the flight.
          </p>
        </Block>
      </AccordionContent>
    </ListItem>

    <ListItem accordionItem title="How can I file a complaint?">
      <AccordionContent>
        <Block>
          <p>
            If you do not enjoy your trip or if you have a conflict with the driver, write to us:<br>
            open a chat with support via the side menu.
          </p>
        </Block>
      </AccordionContent>
    </ListItem>

    <ListItem accordionItem title="How do I find my forgotten belongings?">
      <AccordionContent>
        <Block>
          <p>
            If you forgotten your  belongings:<br>
            send the support team a ticket and mention some informations about the tour.
          </p>
        </Block>
      </AccordionContent>
    </ListItem>

    </List>




</Page>
<script>
  import { Page, Navbar, Block, BlockTitle,Icon,List , ListItem,AccordionContent  } from 'framework7-svelte';
</script>
<style>
  .inline-container-header {
    display: flex;
    align-items: center;
    gap: 1px;
    margin-left: 10px;
    }
</style>