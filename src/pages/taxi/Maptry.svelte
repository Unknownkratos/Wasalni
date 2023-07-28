<!-- Map.svelte -->
<script>
  import { onMount } from 'svelte';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';

  onMount(() => {
    const map = L.map('map').setView([10.6973, -0.09], 13);

    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    L.tileLayer(url, { attribution }).addTo(map);

    // Add the coordinates as markers
    const coordinates = [
      [35.7889, 10.7999],
      [35.6791, 10.8603]
    ];

    for (const coord of coordinates) {
      L.marker(coord).addTo(map);
    }
  });
</script>

<style>
  #map {
    width: 45%;
    height: 500px;
  }
</style>

<div id="map"></div>
