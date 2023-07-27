<!-- Map.svelte -->
<script>
  import { onMount } from 'svelte';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';

  onMount(() => {
    // Create a map instance
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Add the OpenStreetMap tile layer to the map using Axios for HTTP requests
    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    L.tileLayer(url, { attribution }).addTo(map);
  });
</script>

<style>
  #map {
    width: 100%;
    height: 400px;
  }
</style>

<div id="map"></div>
