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
  <img
    src="img/Text.svg"
    alt="Wasalni Logo"
    style="width: 120px; height: 120px; position: relative left:-20px"
  />
  <NavRight />
</Toolbar>
