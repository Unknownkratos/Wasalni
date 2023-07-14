
import HomePage from '../pages/exemples/home.svelte';
import Account from '../pages/left-Menu/Account.svelte';
import Messages from '../pages/left-Menu/Messages.svelte';
import Privacy from '../pages/left-Menu/Privacy&Policy.svelte';
import Bus from '../pages/left-Menu/BusSchedule.svelte';
import Train from '../pages/left-Menu/TrainSchedule.svelte';
import FAQ from '../pages/left-Menu/FAQ.svelte';
import Settings from '../pages/left-Menu/Settings.svelte';






import AboutPage from '../pages/exemples/about.svelte';
import FormPage from '../pages/exemples/form.svelte';

import LeftPage1 from '../pages/exemples/left-page-1.svelte';
import LeftPage2 from '../pages/exemples/left-page-2.svelte';
import DynamicRoutePage from '../pages/exemples/dynamic-route.svelte';
import RequestAndLoad from '../pages/exemples/request-and-load.svelte';
import NotFoundPage from '../pages/404.svelte';


import HomeCustomer from '../pages/taxi/homeCustomer.svelte';
import HomeDriver from '../pages/taxi/homeDriver.svelte';

var routes = [
  {
    path: '/FAQ/',
    component: FAQ,
  },
  {
    path: '/Settings/',
    component: Settings,
  },
  {
    path: '/TrainSchedule/',
    component: Train,
  },
  {
    path: '/BusSchedule/',
    component: Bus,
  },
  {
    path: '/Privacy&Policy/',
    component: Privacy,
  },
  {
    path: '/Messages/',
    component: Messages,
  },
  {
    path: '/Account/',
    component: Account,
  },
  {
    path: '/taxi/HomeDriver/',
    component: HomeDriver,
  },
  {
    path: '/taxi/HomeCustomer/',
    component: HomeCustomer,
  },
  
  
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },

  {
    path: '/left-page-1/',
    component: LeftPage1,
  },
  {
    path: '/left-page-2/',
    component: LeftPage2,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;