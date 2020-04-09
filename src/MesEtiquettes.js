import { LitElement, html } from 'lit-element';
// eslint-disable-next-line no-unused-vars
import { WiredButton, WiredDialog, WiredDivider, WiredIconButton } from 'wired-elements';
import { connect } from 'pwa-helpers';
import '@material/mwc-icon';

import './layout/app-progress.js';
import { AppBar } from './layout/AppBar.js';
import { AppCard } from './layout/AppCard.js';
import { store } from './redux/store.js';
import { selectChoice } from './redux/actions.js';

const onSelectChoice = title => {
  store.dispatch(selectChoice(title));
};

const settingButton = html`
  <a href="/settings">
    <wired-icon-button elevation="2" style="color: black">
      <mwc-icon>settings</mwc-icon>
    </wired-icon-button>
  </a>
`;

export class MesEtiquettes extends connect(store)(LitElement) {
  static get properties() {
    return {
      choices: { type: Array },
      progress: { type: Number },
    };
  }

  stateChanged({ choices, progress, selectedChoices }) {
    this.choices = choices;
    this.progress = progress;
    this.selectedChoices = selectedChoices;
  }

  render() {
    const onToggleDialog = () => {
      const dialog = this.shadowRoot.getElementById('choice-modal');
      dialog.open = !dialog.open;
    };

    const actionButton = html`
      <wired-button elevation="2" @click=${onToggleDialog}>
        Mes choix
      </wired-button>
    `;
    return html`
      <style>
        :host {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-content: space-between;
        }
        .content {
          height: 100%;
          padding: 1em;
          display: flex;
          align-items: stretch;
        }
        .footer {
          padding-bottom: 1em;
          background-color: white;
        }
        .footer-content {
          display: flex;
          justify-content: space-around;
        }
        #divider {
          padding-bottom: 1em;
        }
      </style>
      ${AppBar('Mes étiquettes', actionButton)}
      <section class="content">
        ${this.progress === 100
          ? html`
              <div>Vous avez terminé toutes les étapes !</div>
            `
          : this.choices.map(choice => AppCard(choice.title, choice.img, onSelectChoice))}
      </section>
      <footer class="footer">
        <wired-divider id="divider" elevation="2"></wired-divider>
        <div class="footer-content">
          <app-progress value=${this.progress} percentage></app-progress>
          ${settingButton}
        </div>
      </footer>

      <wired-dialog id="choice-modal" title="Vos choix">
        ${this.selectedChoices.length
          ? this.selectedChoices.map(choice => html`<p>${choice}</div>`)
          : html`<p>Aucun choix effectué</div>`}
        <wired-button @click=${onToggleDialog}>Fermer</wired-button>
      </wired-dialog>
    `;
  }
}
