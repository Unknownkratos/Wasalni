
<App { ...f7params }>
  <PanelLft />
  <PanelRght />

  <!-- Your main view, should have "view-main" class -->
  <View main class="safe-areas" url="/taxi/HomeDriver/" />

  <PopupTest />

  <Login />

</App>

<script>
  import PanelLft from '../pages/main/PanelLeft.svelte';
  import PanelRght from '../pages/main/PanelRight.svelte';
  import Login from '../pages/main/login.svelte';
  import PopupTest from '../pages/main/PopupTest.svelte';
  import { onMount } from 'svelte';
  import { getDevice }  from '../js/framework7-custom.js';
  import {
    f7,
    f7ready,
    App,
    Panel,
    Views,
    View,
    Popup,
    Page,
    Navbar,
    Toolbar,
    NavRight,
    Link,
    Block,
    BlockTitle,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListItem,
    ListInput,
    ListButton,
    BlockFooter
  } from 'framework7-svelte';

  import capacitorApp from '../js/capacitor-app';
  import routes from '../js/routes';
  import store from '../js/store';

  const device = getDevice();
  // Framework7 Parameters
  let f7params = {
    name: 'Wasalni', // App name
    theme: 'auto', // Automatic theme detection
    colors: {
      primary: '#0079FF',
    },

    // App store
    store: store,
    // App routes
    routes: routes,

    // Register service worker (only on production build)
    serviceWorker: process.env.NODE_ENV ==='production' ? {
      path: '/service-worker.js',
    } : {},
    // Input settings
    input: {
      scrollIntoViewOnFocus: device.capacitor,
      scrollIntoViewCentered: device.capacitor,
    },
    // Capacitor Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };

  onMount(() => {
    f7ready(() => {

      // Init capacitor APIs (see capacitor-app.js)
      if (f7.device.capacitor) {
        capacitorApp.init(f7);
      }
      // Call F7 APIs here
    });
  })
</script>