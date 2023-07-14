<Page name="home">
  <!-- Top Navbar -->
  <Navbar large sliding={false}>
    <NavLeft>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
    </NavLeft>
    <NavTitle sliding>Wasalni</NavTitle>
    <NavRight>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
    </NavRight>
    <NavTitleLarge>Wasalni</NavTitleLarge>
  </Navbar>
  <!-- Toolbar -->
  <Toolbar bottom>
    <Link>Left Link</Link>
    <Link>Right Link</Link>
  </Toolbar>
  <!-- Page content -->
  <Block>
    <p>This is an example of split view application layout, commonly used on tablets. The main approach of such kind of layout is that you can see different views at the same time.</p>

    <p>Each view may have different layout, different navbar type (dynamic, fixed or static) or without navbar.</p>

    <p>The fun thing is that you can easily control one view from another without any line of JavaScript just using "data-view" attribute on links.</p>
    
    <Link onClick={() => ali()}>About</Link>
    <Link onClick={() => f7router.back()}>Go Back</Link>
  
  </Block>

  <BlockTitle>Navigation</BlockTitle>
  <List strong inset dividersIos>
    <ListItem link="/about/" title="About"/>
    <ListItem link="/form/" title="Form"/>
  </List>
  {#if isConnected}
    <p>User Connected</p>
  {/if}
  <BlockTitle>Modals</BlockTitle>
  <Block class="grid grid-cols-2 grid-gap">
    <Button fill popupOpen="#my-popup">Popup</Button>
    <Button fill loginScreenOpen="#my-login-screen">Login Screen</Button>
    <Button fill on:click={() => f7router.navigate('/some-page/')} >Test</Button>
  </Block>

  <BlockTitle>Panels</BlockTitle>
  <Block class="grid grid-cols-2 grid-gap">
    <Button fill panelOpen="left">Left Panel</Button>
    <Button fill panelOpen="right">Right Panel</Button>
  </Block>

  <List strong inset dividersIos>
    <ListItem
      title="Dynamic (Component) Route"
      link="/dynamic-route/blog/45/post/125/?foo=bar#about"
    />
    <ListItem
      title="Default Route (404)"
      link="/load-something-that-doesnt-exist/"
    />
    <ListItem
      title="Request Data & Load"
      link="/request-and-load/user/123456/"
    />
  </List>
</Page>
<script context="module">
  import {
    f7,
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Button
  } from 'framework7-svelte';
  
  f7.store.state.user.push({id: '45'});
  

  // assignemt to new value - REACTIVE
  f7.store.state.utilisateurs = [{idd: '44'}];

  console.log(f7.store.state.user);
  
  console.log(f7.store.state.utilisateurs);

  import { onMount } from 'svelte';

  // Router component will receive f7router prop with current Router instance
  export let f7router;
  // Router component will receive f7route prop with current route data
  export let f7route;

  export const isConnected = writable(false);

  onMount(() => {
    // output current route data
    console.log(f7route); // -> { url: '/foo/', query: { id: 3 }, ... }
  });
  function ali( ) {
    f7router.navigate('/about/');
  }
</script>