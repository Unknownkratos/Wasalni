<script>
  import { onMount } from "svelte";
  import axios from "axios";

  const API_KEY = "USR-34995f44f1393a63cc229c5ee9dae473fb194b42";
  let data = {};

  onMount(async () => {
    try {
      const response = await axios.get(
        "http://wasalni.apidb.ovh/api/content/items/Test",
        {
          headers: {
            "api-key": `${API_KEY}`,
          },
        }
      );
      data = response.data;
      console.log("Success", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    // data.push({ phone: 20600505, _id: "64c922800f869e9f530b6101", _state: 1 });
  });

  async function sendData(phone) {
    try {
      const response = await fetch(
        "http://wasalni.apidb.ovh/api/content/item/Test",
        {
          method: "POST",
          headers: {
            "api-key": `${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              _state: 1,
              phone: phone,
            },
          }),
        }
      );
      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // sendData('20202050');

  // function getData(phone) {
  //   const apiUrl = `http://wasalni.apidb.ovh/api/content/items/Test?filter={phone:"${phone}"}`;
  //   fetch(apiUrl, {
  //     method: "GET",
  //     headers: {
  //       "api-key": `${API_KEY}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((error) => console.error("Error:", error));
  // }

  async function getData(phone) {
    try {
      const response = await fetch(
        `http://wasalni.apidb.ovh/api/content/items/Test?filter={phone:"${phone}"}`,
        {
          method: "GET",
          headers: {
            "api-key": `${API_KEY}`,
          },
        }
      );
      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // Calling the function to fetch Cockpit data
  getData("34567888");
</script>

<main>
  {#if data.length > 0}
    <h1>{data[0].phone}</h1>
    <p>{data[1].phone}</p>
  {:else}
    <p>Loading...</p>
  {/if}
</main>
