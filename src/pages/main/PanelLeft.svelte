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


<!-- Left panel with cover effect when hidden -->
<!-- visibleBreakpoint={1060} -->

<Panel left reveal dark >
  <View>
    <Page>
      <Navbar title="Left Panel"  />
      <BlockTitle>Left View Navigation</BlockTitle>
      <List>
        <ListItem link="/left-page-1/" title="Left Page 1" />
        <ListItem link="/left-page-2/" title="Left Page 2"/>
      </List>
      <BlockTitle>Control Main View</BlockTitle>
      <List>
        
        <ListItem link="/Account/" view=".view-main" panelClose title="Account"/>
        <ListItem link="/Settings/" view=".view-main" panelClose title="Settings"/>
        <ListItem link="/FAQ/" view=".view-main" panelClose title="FAQ"/>
        <ListItem link="/Privacy&Policy/" view=".view-main" panelClose title="Privacy&Policy"/>
        <ListItem link="/Messages/" view=".view-main" panelClose title="Messages"/>
        <ListItem link="/Bus Schedule/" view=".view-main" panelClose title="Bus Schedule"/>
        <ListItem link="/Train Schedule/" view=".view-main" panelClose title="Train Schedule"/>
        <ListItem link="/about/" view=".view-main" panelClose title="About"/>




        <ListItem link="/form/" view=".view-main" panelClose title="Form"/>
        <ListItem link="#" view=".view-main" back panelClose title="Back in history"/>
      </List>
    </Page>
  </View>
</Panel>