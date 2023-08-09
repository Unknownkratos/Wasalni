<script>
  import { onMount } from "svelte";
  import L from "leaflet";
  import { Block, Page } from "framework7-svelte";
  import WasalniNavBar from "../essentials/fixNavbar.svelte";

  let currentLocation = { latitude: 35.77357411124573, longitude: 10.8236195434839 }; // Default location

  const otherMarkers = [
    { id: 2, latitude: 35.824675334462064, longitude: 10.641686036333907},
    { id: 3, latitude: 35.817712247970874, longitude: 10.642496170215761 },
    { id: 4, latitude: 35.802281857476295, longitude: 10.649138301056135},
    { id: 5, latitude: 35.78254118536177, longitude: 10.669262982536281 },
    { id: 6, latitude: 35.76151030717877, longitude: 10.715260989814889 },
    { id: 7, latitude: 35.762781361763174, longitude: 10.74456903150163},
    { id: 8, latitude: 35.76612433619074, longitude:10.755212037291695},
    { id: 9, latitude: 35.76152771004117, longitude: 10.807912081698944},
    { id: 10, latitude: 35.74230257783415, longitude: 10.820786685267763},
    { id: 11, latitude:35.709553441693785, longitude: 10.81289026098861 },
    { id: 12, latitude: 35.68195010326676, longitude:10.842587679181227 },
    { id: 13, latitude: 35.67479397787392, longitude: 10.86848523229689},
    { id: 14, latitude: 35.672050761666824, longitude: 10.883321747298345 },
    { id: 15, latitude: 35.66783536713103, longitude: 10.888089910210704 },
    { id: 16, latitude: 35.65404833373181, longitude:10.897626236256253},
    { id: 17, latitude: 35.64732486740835, longitude: 10.901412718814516 },
    { id: 18, latitude: 35.63957508555631, longitude: 10.906461361960542 },
    { id: 19, latitude: 35.63330632988013, longitude: 10.91627816859308 },
    { id: 20, latitude: 35.635843856067304, longitude: 10.942811060940029 },
    { id: 21, latitude: 35.63892120895471, longitude: 10.962164194015601 },
    { id: 22, latitude: 35.61657921450794, longitude: 10.989090291517616 },
    { id: 23, latitude: 35.57176242889359, longitude: 11.01840046993478 },
    { id: 24, latitude: 35.539251975302356, longitude: 11.02750180323128 },
    { id: 25, latitude: 35.52236928356325, longitude: 11.027542266668425 },
    { id: 26, latitude: 35.50832885699273, longitude: 11.030627548752935},
    { id: 27, latitude: 35.501738315651025, longitude: 11.048255038088062 },
    { id: 28, latitude: 35.50230915942197, longitude: 11.065364329647627 },
    { id: 29, latitude: 35.7, longitude: 10.85 },
    { id: 30, latitude: 35.75, longitude: 10.8 },
    { id: 31, latitude: 35.7, longitude: 10.85 },
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
