<!-- Top Navbar -->
<!--  colorTheme="yellow" color='yellow' bgColor="yellow" borderTheme='yellow'  rippleColor="yellow"  -->
    
    <Toolbar sliding={false} bgColor="yellow" >
        
            <NavLeft>
                <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left"/>
            </NavLeft>
            <NavTitleLarge>Wasalni</NavTitleLarge>
            <NavRight>
                <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
            </NavRight>
    </Toolbar>

<script>
import {
    Toolbar,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    
} from 'framework7-svelte';
</script>
