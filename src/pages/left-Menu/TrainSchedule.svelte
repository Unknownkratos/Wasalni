<script>
  import { onMount } from "svelte";
  import L from "leaflet";
  import { Block, Page } from "framework7-svelte";
  import WasalniNavBar from "../essentials/fixNavbar.svelte";
  
  onMount(async () => {
    // Create a map instance
    const map = L.map("map").setView([35.66, 10.85], 12);
    const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const attribution =
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    L.tileLayer(url, { attribution }).addTo(map);

    try {
      const response = await fetch(
        "http://api.wasalni.tn/api/wasalni/stations/mean/1"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      obj = await response.json();
      console.log(obj.data);
    } catch (error) {
      console.error("Error fetching station data:", error);
    }

    // Update current location variable every 5 seconds
    // setInterval(updateCurrentLocation, 5000);

    getCurrentPosition(map);

    addMarkers(map);
  });

  async function getCurrentPosition(map) {
    const coordinates = await Geolocation.getCurrentPosition();

    var myIcon2 = L.icon({
      iconUrl: "img/locationblue.png",
      iconSize: [38, 50],
      iconAnchor: [, 50],
      popupAnchor: [-3, -50],
      shadowSize: [68, 50],
      shadowAnchor: [22, 50],
    });

    L.marker([coordinates.coords.latitude, coordinates.coords.longitude], {
      icon: myIcon2,
    }).addTo(map);

    map.setView(
      new L.LatLng(coordinates.coords.latitude, coordinates.coords.longitude)
    );
  }

  function addMarkers(map) {
    // Add other markers
    obj.data.forEach((marker) => {
      L.marker([marker.gps_x, marker.gps_y])
        .addTo(map)
        .on("click", () => {
          f7router.navigate("/TimeLine/");
          sessionStorage.setItem("sName", marker.name);
        });
    });
  }

  // async function updateCurrentLocation() {
  //   try {
  //     const position = await getCurrentPosition();
  //     currentLocation = {
  //       latitude: position.coords.latitude,
  //       longitude: position.coords.longitude,
  //     };
  //   } catch (error) {
  //     console.error("Error getting position:", error);
  //   }
  // }
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
