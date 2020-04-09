import { html, LitElement, css } from 'lit-element';
// eslint-disable-next-line no-unused-vars
import { WiredLink } from 'wired-elements';
import { Router } from '@vaadin/router';

import { AppBar } from './layout/AppBar.js';
import './wheel-menu.js';

const menuItems = JSON.stringify([
  { title: 'Politique', color: 'green', url: 'politique' },
  { title: 'Morale', color: 'red', url: 'unknown' },
  { title: 'Economie', color: 'blue', url: 'unknown' },
  { title: 'Yolo', color: 'grey', url: 'unknown' },
]);

const navigate = event => {
  Router.go(event.detail.url);
};

export class HomeView extends LitElement {
  static get styles() {
    return css`
      #content {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
      }

      #menu {
        flex-grow: 2;
      }

      p {
        padding: 1em;
      }
    `;
  }

  render() {
    return html`
      ${AppBar('Mes étiquettes')}
      <section id="content">
        <p>
          Bienvenue sur le site Mes étiquettes !<br />
          Choisissez ce que vous souhaitez explorer ci-dessous.
        </p>
        <wheel-menu id="menu" menuItems=${menuItems} @navigate=${navigate}></wheel-menu>
      </section>
    `;
  }
}
