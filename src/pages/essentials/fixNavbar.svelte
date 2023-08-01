<script>
  import {
    Toolbar,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
  } from "framework7-svelte";

  const page = true;
</script>

<Toolbar sliding={false} bgColor="yellow">
  <NavLeft>
    <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
  </NavLeft>
  <NavTitleLarge>Wasalni</NavTitleLarge>
  <NavRight />
</Toolbar>
