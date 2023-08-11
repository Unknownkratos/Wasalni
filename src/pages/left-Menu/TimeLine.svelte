<script>
  import { onMount } from "svelte";
  import { Navbar, Page, Block, Button, BlockTitle } from "framework7-svelte";

  let sName = sessionStorage.getItem("sName");
  // Define your variables here (assuming these are arrays)
  let itemDates = ["Sousse", "22:00", "23:00", "16:00", "18:00", "22 DEC"];
  let stations = ["Mahdia", "14:00", "15:00", "17:00", "19:00", "Station 6"];

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
    } catch (error) {
      console.error("Error fetching station data:", error);
    }
  });
</script>

<Page>
  <Navbar title="TimeLine" backLink="./TrainSchedule.svelte" />
  <BlockTitle>Train Schedule for {sName}</BlockTitle>
  <div class="timeline timeline-sides">
    {#each itemDates as date, i}
      <div class="timeline-item">
        <div class="timeline-item-date">{date} <small /></div>
        <div class="timeline-item-divider" />
        <div class="timeline-item-content">
          <div class="timeline-item-inner">{stations[i]}</div>
        </div>
      </div>
    {/each}
  </div>
</Page>
