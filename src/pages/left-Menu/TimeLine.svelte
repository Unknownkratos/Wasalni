<script>
  import { onMount } from "svelte";
  import { Navbar, Page, Block, Button, BlockTitle } from "framework7-svelte";

  let sName = sessionStorage.getItem("sName");
  // Define your variables here (assuming these are arrays)
  let itemDates = ["12:00", "13:00", "16:00", "18:00", "22:00", "23:00"];
  let stations = ["Mahdia", "Sousse", "Mahdia", "Sousse", "Mahdia", "Sousse"];

  onMount(async () => {
    try {
      const response = await fetch(
        "http://api.wasalni.tn/api/wasalni/stations/mean/1?include=triptimes"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const obj = await response.json();
      console.log(obj.data);

      // for (let i = 0; i < obj.data.length; i++) {
      //   if (obj.data[i].name === sName) {
      //     console.log(obj.data[i].name);
      //   }
      // }
    } catch (error) {
      console.error("Error fetching station data:", error);
    }
  });
</script>

<Page>
  <Navbar title="TimeLine" backLink="Back" />
  <BlockTitle>Train Schedule for {sName}</BlockTitle>
  <div class="timeline timeline-sides">
    {#each itemDates as date, i}
      <div class="timeline-item">
        <div class="timeline-item-date">{date}</div>
        <div class="timeline-item-divider" />
        <div class="timeline-item-content"> {stations[i]}
          <!-- <div class="timeline-item-inner">{stations[i]}</div> -->
        </div>
      </div>
    {/each}
  </div>
</Page>
