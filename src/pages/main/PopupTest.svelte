<script context="module">
  import {
    View,
    Popup,
    Page,
    Navbar,
    NavRight,
    Link,
    Block,
  } from 'framework7-svelte';
</script>


<!-- Popup -->
<Popup id="my-popup">
  <View>
    <Page>
      <Navbar title="Popup">
        <NavRight>
          <Link popupClose>Close</Link>
        </NavRight>
      </Navbar>
      <Block>
        <p>Popup content goes here.</p>
      </Block>
    </Page>
  </View>
</Popup>