<script>
  import { Page, Block } from "framework7-svelte";
  import WasalniNavBar from "../essentials/fixNavbar.svelte";
  import Map2 from "../user/Map2.svelte"
</script>

<Page>
  <br />
  <WasalniNavBar />
  <Block>
    <!-- Use the Map2 component without passing markers -->
    <Map2 />
  </Block>
</Page>
