<!-- Directions.svelte -->
<script>
  import { Page, Navbar, Block, BlockTitle, List, ListItem, Input, Button } from 'framework7-svelte';

  let fromLocation = '';
  let toLocation = '';
  let trainStations = []; // This will hold the fetched train stations data

  function searchDirections() {
    // Implement the logic to fetch train stations data from the database using an API call
    // and display the available train stations on the page based on the "from" and "to" locations.
    // You can use JavaScript fetch or other methods to make API calls to your backend server.

    // For demonstration, we are using some dummy data.
    // Replace this with the actual API call to fetch train stations from the backend.
    trainStations = [
      { name: 'Station A', time: '08:00 AM' },
      { name: 'Station B', time: '09:30 AM' },
      { name: 'Station C', time: '11:15 AM' },
      { name: 'Station D', time: '12:45 PM' },
    ];
  }
  async function sendGetRequest(trainScheduleId) {
  try {
    const response = await fetch(
      `http://wasalni.apidb.ovh/api/collections/get/TrainSchedules?filter[_id]=${trainScheduleId}`,
      {
        method: "GET",
        headers: {
          "api-key": "USR-34995f44f1393a63cc229c5ee9dae473fb194b42",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("Success:", data);
    // Process the data as needed
  } catch (error) {
    console.error("Error:", error);
  }
}

</script>

<Page name="directions">
  <Navbar title="Directions" />
  <Block>
    <BlockTitle>Train Schedule</BlockTitle>
    <List>
      <ListItem>
        <Input
          type="text"
          placeholder="From"
          value={fromLocation}
          on:input={(e) => (fromLocation = e.target.value)}
        />
      </ListItem>
      <ListItem>
        <Input
          type="text"
          placeholder="To"
          value={toLocation}
          on:input={(e) => (toLocation = e.target.value)}
        />
      </ListItem>
    </List>
    <Button fill onClick={searchDirections}>Search Directions</Button>
  </Block>

  {#if trainStations.length > 0}
    <Block>
      <BlockTitle>Vertical Train Schedule Timeline</BlockTitle>
      <div class="timeline">
        {#each trainStations as station}
          <div class="timeline-item">
            <div class="timeline-item-content">
              <div class="timeline-item-time">{station.time}</div>
              <div class="timeline-item-text">{station.name}</div>
            </div>
          </div>
        {/each}
      </div>
    </Block>
  {/if}

  <!-- Horizontal Timeline Component -->
  <!-- ... (previous code) ... -->

  <!-- Horizontal Timeline Component -->
  <Block>
    <BlockTitle>Train Schedule Timeline</BlockTitle>
    <div class="timeline timeline-horizontal timeline-cols-3 medium-timeline-cols-6">
      <div class="timeline-year">
        <div class="timeline-year-title"><span>2023</span></div>
        <div class="timeline-month">
          <div class="timeline-month-title"><span>August</span></div>
          <!-- Train Schedule for 20th August 2023 -->
          <div class="timeline-item">
            <div class="timeline-item-date">20</div>
            <div class="timeline-item-content">
              <div class="timeline-item-time">08:00 AM</div>
              <div class="timeline-item-text">Departure from Station A</div>
              <div class="timeline-item-time">09:30 AM</div>
              <div class="timeline-item-text">Arrival at Station B</div>
              <div class="timeline-item-time">11:15 AM</div>
              <div class="timeline-item-text">Departure from Station B</div>
              <div class="timeline-item-time">12:45 PM</div>
              <div class="timeline-item-text">Arrival at Station C</div>
              <div class="timeline-item-time">10:00 AM</div>
              <div class="timeline-item-text">Departure from Station C</div>
              <div class="timeline-item-time">11:30 AM</div>
              <div class="timeline-item-text">Arrival at Station F</div>
            </div>
          </div>
          <!-- Train Schedule for 21st August 2023 -->
          <div class="timeline-item">
            <div class="timeline-item-date">21</div>
            <div class="timeline-item-content">
              <div class="timeline-item-time">09:00 AM</div>
              <div class="timeline-item-text">Departure from Station C</div>
              <div class="timeline-item-time">10:30 AM</div>
              <div class="timeline-item-text">Arrival at Station D</div>
              <div class="timeline-item-time">10:00 AM</div>
              <div class="timeline-item-text">Departure from Station D</div>
              <div class="timeline-item-time">11:30 AM</div>
              <div class="timeline-item-text">Arrival at Station E</div>
            </div>
          </div>
          <!-- Train Schedule for 22nd August 2023 -->
          <div class="timeline-item">
            <div class="timeline-item-date">23</div>
            <div class="timeline-item-content">
              <div class="timeline-item-time">10:00 AM</div>
              <div class="timeline-item-text">Departure from Station D</div>
              <div class="timeline-item-time">11:30 AM</div>
              <div class="timeline-item-text">Arrival at Station E</div>
              <div class="timeline-item-time">10:00 AM</div>
              <div class="timeline-item-text">Departure from Station D</div>
              <div class="timeline-item-time">11:30 AM</div>
              <div class="timeline-item-text">Arrival at Station E</div>
              
            </div>
          </div>
          
        </div>
      </div>
      <!-- Continue adding other timeline years and months here -->
    </div>
  </Block>

</Page>

<style>
  /* Your existing CSS styles here */

  /* Custom CSS for the timeline */
  .timeline {
    display: flex;
    flex-direction: row; /* Set the flex direction to row for horizontal layout */
    overflow-x: auto; /* Enable horizontal scrolling for overflow content */
    margin-top: 20px;
  }

  .timeline-item {
    /* Adjust other styles as needed for horizontal layout */
    margin-right: 20px; /* Add spacing between timeline items */
    border-top: 2px solid #007aff; /* Use top border for horizontal separation */
    border-left: none; /* Remove the left border to make it horizontal */
  }

  .timeline-item-content {
    padding-left: 20px;
  }

  .timeline-item-time {
    font-weight: bold;
  }

  .timeline-item-text {
    color: #999;
  }
</style>
