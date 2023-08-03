<script>
  import { onMount } from "svelte";
  import axios from "axios";

  const API_KEY = "USR-34995f44f1393a63cc229c5ee9dae473fb194b42";
  let data = {},
    phone = "",
    _state = "";

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

  // async function sendDataToCockpit(data) {
  //   const url = "http://wasalni.apidb.ovh/api/content/item/Test";
  //   const headers = {
  //     "api-key": `${API_KEY}`,
  //     "Content-Type": "application/json",
  //     "data": {
  //       "_state": 1,
  //       "phone": 20600508
  //   }
  //   };

  //   try {
  //     // _state = data._state;
  //     // phone = data.phone;
  //     const response = await axios.post(url, data, { headers });
  //     console.log("Data sent to Cockpit", response.data);
  //   } catch (error) {
  //     console.error("Error sending data to Cockpit", error);
  //   }
  // }

  // sendDataToCockpit(data);

  fetch('http://wasalni.apidb.ovh/api/content/item/Test', {
  method: 'POST',
  headers: {
    "api-key": `${API_KEY}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
        data: {
          "_state": 1,
        "phone": 20600508
        }
  })
})
.then(response => response.json())
.then(response => console.log(response));
</script>

<main>
  {#if data.length > 0}
    <h1>{data[0].phone}</h1>
    <p>{data[1].phone}</p>
  {:else}
    <p>Loading...</p>
  {/if}
</main>
