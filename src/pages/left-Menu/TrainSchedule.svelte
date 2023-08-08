<script>
  import { Navbar, Page, BlockTitle } from 'framework7-svelte';

  // Define your variables here (assuming these are arrays)
  let itemDates = ["14:00", "22 DEC", "22 DEC", "22 DEC", "22 DEC", "22 DEC"];
  let stations = ["Mahdia", "Sousse", "Station 3", "Station 4", "Station 5", "Station 6"];
</script>

<Page>
  <Navbar title="Train Schedule" />
  <BlockTitle>Train Schedule</BlockTitle>
  <div class="timeline timeline-sides">
    {#each itemDates as date, i}
      <div class="timeline-item">
        <div class="timeline-item-date">{date} <small></small></div>
        <div class="timeline-item-divider" />
        <div class="timeline-item-content">
          <div class="timeline-item-inner">{stations[i]}</div>
        </div>
      </div>
    {/each}
  </div>
</Page>
