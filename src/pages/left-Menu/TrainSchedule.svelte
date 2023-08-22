<<<<<<< Updated upstream
=======
<script>
  import { onMount } from "svelte";
  import { Geolocation } from "@capacitor/geolocation";
  import L from "leaflet";
  import { Block, Page } from "framework7-svelte";
  import WasalniNavBar from "../essentials/fixNavbar.svelte";
  export let f7router;

  let obj;

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

    // getCurrentPosition(map);

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

>>>>>>> Stashed changes
<Page>
  <Navbar title="About" backLink="Back" />
  <BlockTitle>About My App</BlockTitle>
  <Block>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni molestiae laudantium dignissimos est nobis delectus nemo ea alias voluptatum architecto, amet similique, saepe iste consectetur in repellat ut minus quibusdam!</p>
    <p>Molestias et distinctio porro nesciunt ratione similique, magni doloribus, rerum nobis, aliquam quae reiciendis quasi modi. Nam a recusandae, fugiat in ea voluptates fuga eius, velit corrupti reprehenderit dignissimos consequatur!</p>
    <p>Blanditiis, cumque quo adipisci. Molestiae, dolores dolorum quos doloremque ipsa ullam eligendi commodi deserunt doloribus inventore magni? Ea mollitia veniam nostrum nihil, iusto doloribus a at! Ea molestiae ullam delectus!</p>
  </Block>
</Page>
<script>
  import { Page, Navbar, Block, BlockTitle } from 'framework7-svelte';
</script>
