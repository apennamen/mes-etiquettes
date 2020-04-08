import { Router } from '@vaadin/router';

import './mes-etiquettes.js';

function initRouter() {
  const router = new Router(document.querySelector('main'));
  router.setRoutes([
    {
      path: '/',
      component: 'mes-etiquettes',
    },
    {
      path: '/settings',
      component: 'app-settings',
      action: () => import('./app-settings'),
    },
    {
      path: '(.*)',
      component: 'not-found',
      action: () => import('./not-found'),
    },
  ]);
}

window.addEventListener('load', () => {
  initRouter();
});
