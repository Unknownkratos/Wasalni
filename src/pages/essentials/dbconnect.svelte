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
    };
    data.push({ phone: 20600505 });
  });
</script>

<main>
  {#if data.length > 0}
    <h1>{data[0].phone}</h1>
    <p>{data[1].phone}</p>
  {:else}
    <p>Loading...</p>
  {/if}
</main>
