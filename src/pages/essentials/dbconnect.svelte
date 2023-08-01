<script>
    import { onMount } from "svelte";
    import axios from "axios";
  
    const API_KEY = "USR-34995f44f1393a63cc229c5ee9dae473fb194b42"; // Replace 'YOUR_API_KEY' with your actual API key
    let data = {};
  
    onMount(async () => {
      try {
        const response = await axios.get(
          "http://wasalni.apidb.ovh/api/content/items/Taxis",
          {
            headers: {
              'api-key': 'USR-34995f44f1393a63cc229c5ee9dae473fb194b42',
            }
          }
        );
        data = response.data;
        console.log("Success", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });
  </script>
  
  <main>
    {#if data.length > 0}
      <h1>{data[0].driver._model}</h1>
      <p>{data.description}</p>
    {:else}
      <p>Loading...</p>
    {/if}
  </main>
  