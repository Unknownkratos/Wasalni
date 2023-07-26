<Page name="homeDriver"  bgColor="white" ><!-- bgColor="lightblue"  -->
  <!-- Top Navbar -->
  <WasalniNavBar  />
 

  <!-- Page content --><br><br>
  
  <Welcome/>
  

</Page>

<script>
  import WasalniNavBar from '../essentials/fixNavbar.svelte';
  import  WelcomePage from '../main/welcome.svelte';
  import Formtaxi from '../main/taxi/form.svelte';
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
    import IdentityVerf from '../main/taxi/IdentityVerf.svelte';
    import Welcome from '../main/welcome.svelte';
    import Start from '../main/user/start.svelte';

  onMount(() => {
    // output current route data
     // -> { url: '/foo/', query: { id: 3 }, ... }     
  });
</script>