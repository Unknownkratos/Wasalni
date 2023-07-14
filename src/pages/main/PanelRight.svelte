<script context="module">
  import {
    View,
    Panel,
    Page,
    Navbar,
    Block,
  } from 'framework7-svelte';
</script>


<!-- Right panel with reveal effect-->
<Panel right reveal dark>
  <View>
    <Page>
      <Navbar title="Right Panel"/>
      <Block>Right panel content goes here</Block>
    </Page>
  </View>
</Panel>