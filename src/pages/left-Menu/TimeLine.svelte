<script>
  import { onMount } from "svelte";
  import { Navbar, Page, Block, Button, BlockTitle } from "framework7-svelte";

  let sName = sessionStorage.getItem("sName");
  var mehdiaHours = [];
  var sousseHours = [];

  onMount(async () => {
    [mehdiaHours, sousseHours] = await getHours();
    console.log(mehdiaHours);
    console.log(sousseHours);
  });

  async function getHours() {
    const mehdiaHours = [];
    const sousseHours = [];
    try {
      const response = await fetch(
        "http://api.wasalni.tn/api/wasalni/stations/mean/1?include=triptimes"
      );
      const stations = await response.json();
      for (let i = 0; i < stations.data.length; i++) {
        if (stations.data[i].name === sName) {
          for (
            let j = 0;
            j < stations.data[i].triptimes.data[0].times.length;
            j++
          ) {
            mehdiaHours.push(
              stations.data[i].triptimes.data[0].times[j].time.substring(11, 16)
            );
          }

          for (
            let j = 0;
            j < stations.data[i].triptimes.data[1].times.length;
            j++
          ) {
            sousseHours.push(
              stations.data[i].triptimes.data[1].times[j].time.substring(11, 16)
            );
          }
        }
      }
      return [mehdiaHours, sousseHours];
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
</script>

<Page>
  <Navbar title="TimeLine" backLink="Back" />
  <BlockTitle>Train Schedule for {sName}</BlockTitle>
  <div class="timeline timeline-sides">
    <div class="timeline-item">
      <div
        class="timeline-item-date"
        style="background-color:LightSteelBlue;
                padding:2px;
                border-radius:10px;
                height:28px;"
      >
        Mehdia
      </div>
      <div class="timeline-item-divider" />
      <div
        class="timeline-item-content"
        style="background-color:LightSteelBlue;
                padding:3px;
                border-radius:10px;"
      >
        Sousse
      </div>
    </div>
    {#each { length: mehdiaHours.length } as _, i}
      <div class="timeline-item timeline-item-right">
        <div class="timeline-item-date">{mehdiaHours[i]}</div>
        <div class="timeline-item-divider" />
      </div>
      {#if sousseHours[i] != undefined}
        <div class="timeline-item timeline-item-left">
          <div class="timeline-item-date">{sousseHours[i]}</div>
          <div class="timeline-item-divider" />
        </div>
      {/if}
    {/each}
  </div>
</Page>
