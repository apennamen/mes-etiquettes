import { html, LitElement } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map.js';
// eslint-disable-next-line no-unused-vars
import { WiredLink, WiredCard, WiredCombo } from 'wired-elements';
import { connect } from 'pwa-helpers';

import { store } from './redux/store.js';
import { selectFont } from './redux/actions.js';
import { AppBar } from './layout/AppBar.js';

const onSelectFont = event => {
  store.dispatch(selectFont(event.detail.selected));
};

export class Settings extends connect(store)(LitElement) {
  static get properties() {
    return {
      fonts: { type: Array },
      selectedFont: { type: String },
    };
  }

  stateChanged({ fonts, selectedFont }) {
    this.fonts = fonts;
    this.selectedFont = selectedFont;
    const root = document.getElementsByTagName('html')[0];
    root.style.setProperty('font-family', this.selectedFont);
  }

  render() {
    return html`
      <style>
        .setting-card {
          background-color: white;
          display: flex;
          padding: 1em;
          margin: 1em;
        }
      </style>
      ${AppBar('Paramètres')}
      <wired-card class="setting-card">
        <p>
          <wired-link elevation="2" href="/">Retour à l'application</wired-link>
        </p>
        <wired-combo selected=${this.selectedFont} @selected=${onSelectFont}>
          ${this.fonts.map(
            font => html`
              <wired-item value=${font} style=${styleMap({ fontFamily: font })}>
                ${font}
              </wired-item>
            `,
          )}
        </wired-combo>
      </wired-card>
    `;
  }

  createRenderRoot() {
    return this;
  }
}
