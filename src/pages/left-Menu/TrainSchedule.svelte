<script>
  import { Navbar, Page, BlockTitle } from 'framework7-svelte';

  // Define your variables here (assuming these are arrays)
  let itemDates = ["Sousse", "22:00", "23:00", "16:00", "18:00", "22 DEC"];
  let stations = ["Mahdia", "14:00", "15:00", "17:00", "19:00", "Station 6"];
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
