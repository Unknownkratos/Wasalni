<script context="module">
  import {
    View,
    Panel,
    Page,
    Navbar,
    BlockTitle,
    List, ListItem,
    Link,
    Block,
    Icon,
  } from 'framework7-svelte';
</script>

<Panel left reveal dark >
  <View>
    <Page>
      <Navbar title="Left Panel"  />
      <List>
        
        <ListItem link="/Account/" view=".view-main" panelClose title="Account"/>
        <ListItem link="/Settings/" view=".view-main" panelClose title="Settings"/>
        <ListItem link="/FAQ/" view=".view-main" panelClose title="FAQ"/>
        <ListItem link="/Privacy&Policy/" view=".view-main" panelClose title="Privacy&Policy"/>
        <ListItem link="/Messages/" view=".view-main" panelClose title="Messages"/>
        <ListItem link="/BusSchedule/" view=".view-main" panelClose title="Bus Schedule"/>
        <ListItem link="/TrainSchedule/" view=".view-main" panelClose title="Train Schedule"/>
        <ListItem link="/about/" view=".view-main" panelClose title="About"/>




      </List>
    </Page>
  </View>
</Panel>