import { Router } from '@vaadin/router';

import './mes-etiquettes';

window.addEventListener('load', () => { 
    initRouter();
  });
  
  function initRouter() {
    const router = new Router(document.querySelector('main')); 
    router.setRoutes([
      {
        path: '/',
        component: 'mes-etiquettes'
      },
      {
        path: '(.*)', 
        component: 'not-found',
        action: () =>
          import('./not-found')
      }
    ]);
  }