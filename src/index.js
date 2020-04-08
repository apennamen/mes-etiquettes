import { Router } from '@vaadin/router';
import rough from 'roughjs';

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

function initCanvas() {
  const canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const rc = rough.canvas(canvas);
  rc.rectangle(0, 0, canvas.width, canvas.height, {
    stroke: 'transparent',
    fill: 'lightgrey',
    fillStyle: 'zigzag',
    hachureGap: 3,
    fillWeight: 2,
  });
}

window.addEventListener('load', () => {
  initRouter();
  initCanvas();
});
