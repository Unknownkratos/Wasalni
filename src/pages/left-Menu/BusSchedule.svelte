<script>
  import { onMount } from "svelte";
  import L from "leaflet";
  import { Block, Page, Navbar, Fab, Icon } from "framework7-svelte";
  import WasalniNavBar from "../essentials/fixNavbar.svelte";

  onMount(() => {
    // Create a map instance
    const map = L.map("map").setView([35.66, 10.79], 11);

    // Add the OpenStreetMap tile layer to the map using Axios for HTTP requests
    const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const attribution =
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    L.tileLayer(url, { attribution }).addTo(map);

    L.marker([35.68421135126204, 10.841596169918398])
      .addTo(map)
      .on("click", () => alert("Clicked on ${station.name}"));
  });
</script>

<Page>
  <br />
  <WasalniNavBar />
  <Block>
    <div id="map" />
  </Block>
</Page>

<style>
  #map {
    width: 100%;
    height: 650px;
  }
</style>
