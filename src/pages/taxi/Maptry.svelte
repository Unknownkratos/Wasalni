<script>
  import { onMount } from "svelte";
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";

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
  });
</script>

<div id="map" />

<style>
  #map {
    width: 50%;
    height: 450px;
  }
</style>
