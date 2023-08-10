<script>
  import { onMount } from "svelte";
  import "leaflet/dist/leaflet.css";
  import L from "leaflet";
  import { Block, Page, Navbar, Fab, Icon } from "framework7-svelte";
  import WasalniNavBar from "../essentials/fixNavbar.svelte";

  onMount(() => {
    // Create a map instance
    const map = L.map("map").setView(
      [35.7388751335931855, 10.792127960471236],
      12
    );

    // Add the OpenStreetMap tile layer to the map using Axios for HTTP requests
    const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const attribution =
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    L.tileLayer(url, { attribution }).addTo(map);

    //if you want to change icon you use it
    var myIcon = L.icon({
      iconUrl: "img/locationtaxi.png",
      iconSize: [38, 50],
      iconAnchor: [, 50],
      popupAnchor: [-3, -50],
      shadowSize: [68, 50],
      shadowAnchor: [22, 50],
    });
    var myIcon2 = L.icon({
      iconUrl: "img/locationblue.png",
      iconSize: [38, 50],
      iconAnchor: [, 50],
      popupAnchor: [-3, -50],
      shadowSize: [68, 50],
      shadowAnchor: [22, 50],
    });

    // location icons
    var maker = L.marker([35.68421135126204, 10.841596169918398]).addTo(map);
    var maker4 = L.marker([35.69545115396475, 10.835915977288757]).addTo(map);
    var maker5 = L.marker([35.68078374871716, 10.840729537730486]).addTo(map);
    var maker6 = L.marker([35.678264640148534, 10.837587728419553], {
      icon: myIcon,
    }).addTo(map);
    var maker7 = L.marker([35.69098301791562, 10.839347780667117], {
      icon: myIcon,
    }).addTo(map);
    var maker8 = L.marker([35.67436984770924, 10.835038687233427], {
      icon: myIcon2,
    }).addTo(map);
    var maker9 = L.marker([35.690008873630944, 10.839286363714564], {
      icon: myIcon2,
    }).addTo(map);
  });
</script>

<Page>
  <br />

  <!-- <Navbar title="Map" backLink="Back" /> -->
  <WasalniNavBar />
  <Block>
    <div id="map" />
    <Fab position="center-bottom" text="Wasalni" color="yellow">
      <Icon ios="f7:add" md="material:add" />
    </Fab>
  </Block>
</Page>

<style>
  #map {
    width: 100%;
    height: 650px;
  }
</style>
