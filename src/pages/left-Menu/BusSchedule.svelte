<script>
  import { onMount } from "svelte";
  import L from "leaflet";
  import { Block, Page } from "framework7-svelte";
  import WasalniNavBar from "../essentials/fixNavbar.svelte";

  let currentLocation = {
    latitude: 35.6894634389637,
    longitude: 10.840351068182589,
  }; // Default location

  const otherMarkers = [
    { id: 2, latitude: 35.824675334462064, longitude: 10.641686036333907 },
    { id: 3, latitude: 35.686456595938296, longitude: 10.842265948061161 },
    { id: 4, latitude: 35.802281857476295, longitude: 10.649138301056135 },
    { id: 5, latitude: 35.78254118536177, longitude: 10.669262982536281 },
    { id: 6, latitude: 35.76151030717877, longitude: 10.715260989814889 },
    { id: 7, latitude: 35.762781361763174, longitude: 10.74456903150163 },
  ];

  onMount(() => {
    // Create a map instance
    const map = L.map("map").setView([35.66, 10.79], 11);

    // Add the OpenStreetMap tile layer to the map using Axios for HTTP requests
    const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const attribution =
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    L.tileLayer(url, { attribution }).addTo(map);

    // Update current location variable every 5 seconds
    setInterval(updateCurrentLocation, 5000);

    // Add markers
    addMarkers(map);
  });

  function addMarkers(map) {
    // Add current location marker
    L.marker([currentLocation.latitude, currentLocation.longitude])
      .addTo(map)
      .on("click", () => alert("Marker clicked"));

    // Add other markers
    otherMarkers.forEach((marker) => {
      L.marker([marker.latitude, marker.longitude])
        .addTo(map)
        .on("click", () => alert(`Marker ${marker.id} clicked`));
    });
  }

  async function updateCurrentLocation() {
    try {
      const position = await getCurrentPosition();
      currentLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    } catch (error) {
      console.error("Error getting position:", error);
    }
  }

  function getCurrentPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
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
