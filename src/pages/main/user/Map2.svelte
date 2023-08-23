<script>
    import { onMount } from "svelte";
    import L from "leaflet";
  
    export let markers = [];
  
    onMount(() => {
      // Create a map instance
      const map = L.map("map").setView([35.66, 10.79], 11);
  
      // Add the OpenStreetMap tile layer to the map using Axios for HTTP requests
      const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
      const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
      L.tileLayer(url, { attribution }).addTo(map);
  
      // Add markers
      addMarkers(map);
    });
  
    function addMarkers(map) {
      markers.forEach((marker) => {
        L.marker([marker.latitude, marker.longitude])
          .addTo(map)
          .on("click", () => alert(`Marker ${marker.id} clicked`));
      });
    }
  </script>
  
  <div id="map" style="width: 100%; height: 650px;"></div>
  
  <style>
    #map {
      width: 100%;
      height: 650px;
    }
  </style>
  