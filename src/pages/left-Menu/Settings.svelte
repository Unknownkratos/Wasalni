<script>
  import { Page, Navbar, Block, BlockTitle, List, ListItem, Label, Input, Button } from 'framework7-svelte';

  // Sample station data
  let stations = [
    { name: 'Station A', time: '08:00' },
    { name: 'Station B', time: '09:15' },
    { name: 'Station C', time: '10:30' },
    // Add more stations here
  ];

  let selectedStationA;
  let selectedStationB;
  let selectedTime;
  let calculatedTime;

  function calculateTimeDifference() {
    // ... Same calculation code as before ...

    // Set the calculated time as a reactive variable
    calculatedTime = `${hours}:${minutes}`;
  }
</script>

<Page>
  <Navbar title="Train Timeline" backLink="Back" />
  <BlockTitle>About My App</BlockTitle>
  <Block>
    <!-- List of stations to choose from -->
    <List>
      <ListItem>
        <Label>From</Label>
        <Input type="select" value={selectedStationA} on:change={(e) => (selectedStationA = e.target.value)}>
          {#each stations as station}
            <option value={station.name}>{station.name}</option>
          {/each}
        </Input>
      </ListItem>
      <ListItem>
        <Label>To</Label>
        <Input type="select" value={selectedStationB} on:change={(e) => (selectedStationB = e.target.value)}>
          {#each stations as station}
            <option value={station.name}>{station.name}</option>
          {/each}
        </Input>
      </ListItem>
      <ListItem>
        <Label>Time at From Station</Label>
        <Input type="time" value={selectedTime} on:change={(e) => (selectedTime = e.target.value)} />
      </ListItem>
    </List>

    <Button onClick={calculateTimeDifference}>Calculate Time</Button>
    {#if calculatedTime}
      <div style="margin: 20px;">Time at Destination Station: {calculatedTime}</div>
    {/if}
  </Block>
</Page>
