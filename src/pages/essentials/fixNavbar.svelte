<!-- Top Navbar -->

<Navbar sliding={false} color='red'>
    <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left"/>
    </NavLeft>
    <NavTitle sliding>Wasalni</NavTitle>
    <NavRight>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
    </NavRight>
    <NavTitleLarge>Wasalni</NavTitleLarge>
</Navbar>

<script>
import {
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    
} from 'framework7-svelte';
</script>
