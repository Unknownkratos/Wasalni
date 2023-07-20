<Page name="homeDriver"  bgColor="white" ><!-- bgColor="lightblue"  -->
  <!-- Top Navbar -->
  <WasalniNavBar  />
  <Fab position="center-bottom" text="Wasalni" color = "yellow">
    <Icon ios="f7:add" md="material:add" />
</Fab>

  <!-- Page content --><br><br>
  
  <WelcomePage />
  

</Page>

<script>
  import WasalniNavBar from '../essentials/fixNavbar.svelte';
  import  WelcomePage from '../main/welcome.svelte';
  import {
    f7,
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Button,
    Tabs,
    Tab,
    Fab,
    Icon

    
  } from 'framework7-svelte';

  import { onMount } from 'svelte';

  onMount(() => {
    // output current route data
     // -> { url: '/foo/', query: { id: 3 }, ... }     
  });
</script>