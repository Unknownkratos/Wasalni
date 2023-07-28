<!-- homeDriver.svelte -->
<script>
  import WasalniNavBar from '../essentials/fixNavbar.svelte';
  import WelcomePage from '../main/welcome.svelte';
  import Formtaxi from '../main/taxi/form.svelte';
  import Welcome from '../main/welcome.svelte';
  import Start from '../main/user/start.svelte';
  import logint from './logintest.svelte';
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

  import IdentityVerf from '../main/taxi/IdentityVerf.svelte';
  import Map from './Maptry.svelte';
    import Maptry from './Maptry.svelte';
    import Logintest from './logintest.svelte';
    import Login from '../main/login.svelte';
  import TripConfig from '../main/user/trip_config.svelte';
  import TaxiLicense from '../main/taxi/taxi_license.svelte';
  import PrimaryInfo from '../main/taxi/primary_info.svelte';
</script>

<Page name="homeDriver" bgColor="white">
  <!-- Top Navbar -->
  <WasalniNavBar />

  <!-- Page content -->
  <br /><br />
  <!-- <Welcome/> -->
  <Maptry/>
</Page>

