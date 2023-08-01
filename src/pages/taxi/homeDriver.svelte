<script>
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
    Icon,
  } from "framework7-svelte";
  import WasalniNavBar from "../essentials/fixNavbar.svelte";
  // import ShowNavBar from "../essentials/showNavbar.sveltesvelte";
  import WelcomePage from "../main/welcome.svelte";
  import Formtaxi from "../main/taxi/form.svelte";
  import Welcome from "../main/welcome.svelte";
  import Start from "../main/user/start.svelte";
  import Panel from "../main/PanelLeft.svelte";
 import { page } from "../essentials/showNavbar.svelte";
  import logint from "./logintest.svelte";
  import IdentityVerf from "../main/taxi/IdentityVerf.svelte";
  import Map from "./Maptry.svelte";
  import Maptry from "./Maptry.svelte";
  import Logintest from "./logintest.svelte";
  import Login from "../main/login.svelte";
  import TripConfig from "../main/user/trip_config.svelte";
  import TaxiLicense from "../main/taxi/taxi_license.svelte";
  import PrimaryInfo from "../main/taxi/primary_info.svelte";
  import FixNavbar from "../essentials/fixNavbar.svelte";
  import Enter from "../main/enter.svelte";
  import DBConnect from "../essentials/dbconnect.svelte";
</script>

<Page name="homeDriver" bgColor="white">
  <div id="app">
    {#if $page}
      <WasalniNavBar />
    {/if}
    <Fab position="center-bottom" text="Wasalni" color="yellow">
      <Icon ios="f7:add" md="material:add" />
    </Fab>
    <Maptry />
  </div>
</Page>

<style>
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
  }
</style>
