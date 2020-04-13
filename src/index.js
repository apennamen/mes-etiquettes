import { Router } from '@vaadin/router';

import './home-view.js';

(function initRouter() {
  const router = new Router(document.querySelector('main'));
  router.setRoutes([
    {
      path: '/',
      component: 'home-view',
    },
    {
      path: '/settings',
      component: 'app-settings',
      action: () => import('./app-settings'),
    },
    {
      path: '/politique',
      component: 'mes-etiquettes',
      action: () => import('./mes-etiquettes'),
    },
    {
      path: '(.*)',
      component: 'not-found',
      action: () => import('./not-found'),
    },
  ]);
})();
