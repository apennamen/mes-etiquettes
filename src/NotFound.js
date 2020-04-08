import { html, LitElement } from 'lit-element';
import { WiredLink } from "wired-elements"

import { AppBar } from './layout/AppBar';

export class NotFound extends LitElement {
  render() {
    return html`
        ${AppBar('Vous vous êtes égaré !')}
          <p>
            <wired-link elevation="2" href="/">Retour à l'application</wired-link>
          </p>
    `;
  }

  createRenderRoot() {
      return this;
  }
}
