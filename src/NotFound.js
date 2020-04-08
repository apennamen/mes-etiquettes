import { html, LitElement } from 'lit-element';

import { AppBar } from './layout/AppBar';

export class NotFound extends LitElement {
  render() {
    return html`
        ${AppBar('Vous vous êtes égaré !')}
      <div class="container">
          <p>
            <a href="/">Retour à l'application</a>
          </p>
      </div>
    `;
  }

  createRenderRoot() {
      return this;
  }
}
