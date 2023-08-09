<script>
  import { onMount } from "svelte";
  import L from "leaflet";
  import { Block, Page } from "framework7-svelte";
  import WasalniNavBar from "../essentials/fixNavbar.svelte";

  let currentLocation = { latitude: 35.77357411124573, longitude: 10.8236195434839 }; // Default location

  const otherMarkers = [
    { id: 2, latitude: 35.75, longitude: 10.8 },
    { id: 3, latitude: 35.7, longitude: 10.85 },
    { id: 4, latitude: 35.75, longitude: 10.8 },
    { id: 5, latitude: 35.7, longitude: 10.85 },
    { id: 6, latitude: 35.75, longitude: 10.8 },
    { id: 7, latitude: 35.7, longitude: 10.85 },
    { id: 8, latitude: 35.75, longitude: 10.8 },
    { id: 9, latitude: 35.7, longitude: 10.85 },
    { id: 10, latitude: 35.75, longitude: 10.8 },
    { id: 11, latitude: 35.7, longitude: 10.85 },
    { id: 12, latitude: 35.75, longitude: 10.8 },
    { id: 13, latitude: 35.7, longitude: 10.85 },
    { id: 14, latitude: 35.75, longitude: 10.8 },
    { id: 15, latitude: 35.7, longitude: 10.85 },
    { id: 16, latitude: 35.75, longitude: 10.8 },
    { id: 17, latitude: 35.7, longitude: 10.85 },
    { id: 18, latitude: 35.75, longitude: 10.8 },
    { id: 19, latitude: 35.7, longitude: 10.85 },
    { id: 20, latitude: 35.75, longitude: 10.8 },
    { id: 21, latitude: 35.7, longitude: 10.85 },
    { id: 22, latitude: 35.75, longitude: 10.8 },
    { id: 23, latitude: 35.7, longitude: 10.85 },
    { id: 24, latitude: 35.75, longitude: 10.8 },
    { id: 25, latitude: 35.7, longitude: 10.85 },
    { id: 26, latitude: 35.75, longitude: 10.8 },
    { id: 27, latitude: 35.7, longitude: 10.85 },
    { id: 28, latitude: 35.75, longitude: 10.8 },
    { id: 29, latitude: 35.7, longitude: 10.85 },
    { id: 30, latitude: 35.75, longitude: 10.8 },
    { id: 31, latitude: 35.7, longitude: 10.85 },
    { id: 32, latitude: 35.75, longitude: 10.8 },
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
    otherMarkers.forEach(marker => {
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
        longitude: position.coords.longitude
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
