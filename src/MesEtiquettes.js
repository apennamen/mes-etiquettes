import { LitElement, html } from 'lit-element';
// eslint-disable-next-line no-unused-vars
import { WiredButton, WiredDialog, WiredDivider } from 'wired-elements';
import { connect } from 'pwa-helpers';

import './layout/app-progress.js';
import { AppBar } from './layout/AppBar.js';
import { AppCard } from './layout/AppCard.js';
import { store } from './redux/store.js';
import { selectChoice } from './redux/actions.js';

const onSelectChoice = title => {
  store.dispatch(selectChoice(title));
};

const onToggleDialog = () => {
  const dialog = document.getElementById('choice-modal');
  dialog.open = !dialog.open;
};

const actionButton = html`
  <wired-button elevation="2" @click=${onToggleDialog}>
    Mes choix
  </wired-button>
`;

export class MesEtiquettes extends connect(store)(LitElement) {
  static get properties() {
    return {
      choices: { type: Array },
      title: { type: String },
      progress: { type: Number },
    };
  }

  stateChanged({ choices, layout, progress, selectedChoices }) {
    this.choices = choices;
    this.title = layout.title;
    this.progress = progress;
    this.selectedChoices = selectedChoices;
  }

  render() {
    return html`
      <style>
        .container {
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
        #divider {
          padding-bottom: 1em;
        }
        #progress {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      </style>
      <div class="container">
        ${AppBar(this.title, actionButton)}
        <div class="content">
          ${this.progress === 100
            ? html`
                <div>Vous avez terminé toutes les étapes !</div>
              `
            : this.choices.map(choice => AppCard(choice.title, choice.img, onSelectChoice))}
        </div>
        <footer class="footer">
          <wired-divider id="divider" elevation="2"></wired-divider>
          <app-progress id="progress" value=${this.progress} percentage></app-progress>
        </footer>
      </div>

      <wired-dialog id="choice-modal" title="Vos choix">
        ${this.selectedChoices.length
          ? this.selectedChoices.map(choice => html`<p>${choice}</div>`)
          : html`<p>Aucun choix effectué</div>`}
        <wired-button @click=${onToggleDialog}>Fermer</wired-button>
      </wired-dialog>
    `;
  }

  /**
   * Trick to prevent the use of Shadow DOM
   */
  createRenderRoot() {
    // We don't want shadow dom in order to use global css
    return this;
  }
}
