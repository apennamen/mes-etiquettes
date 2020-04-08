import { LitElement, html } from 'lit-element';
import { WiredButton, WiredProgress, WiredDialog, WiredDivider } from "wired-elements";
import { connect } from 'pwa-helpers';

import { AppBar } from './layout/AppBar';
import { AppCard } from './layout/AppCard';
import { store } from './redux/store';
import { selectChoice } from './redux/actions'

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
    </wired-button>`;

export class MesEtiquettes extends connect(store)(LitElement) {
  static get properties() {
    return {
      choices: { type: Array },
      title: { type: String },
      progress: { type: Number },
    };
  }

  stateChanged({choices, layout, progress, selectedChoices}) { 
      this.choices = choices;
      this.title = layout.title;
      this.progress = progress;
      this.selectedChoices = selectedChoices;
  }

  render() {
    return html`
      <style>
        .content {
          padding: 1em;
          margin-bottom: 72px;
          display: flex;
        }
        .footer {
          width: 100%;
          padding: 1em;
          background-color: white;
          position: fixed;
          bottom: 0;
        }
        .card:hover {
            cursor: pointer;
        }
      </style>
      <div>
        ${AppBar(this.title, actionButton)}
        <div class="content">
          ${
            this.progress === 100 ?
              html`<div>Vous avez terminé toutes les étapes !</div>` :
              this.choices.map(choice => AppCard(choice.title, choice.img, onSelectChoice))
          }
        </div>
        <footer class="footer">
          <wired-divider elevation="2"></wired-divider>
          <wired-progress value=${this.progress} ?percentage=${true}></wired-progress>
        </footer>
      </div>
      
      <wired-dialog
          id="choice-modal"
          title="Vos choix"
          >
          ${
            this.selectedChoices.length ?
              this.selectedChoices.map(choice => html`<p>${choice}</div>`) :
              html`<p>Aucun choix effectué</div>`
          }
          <wired-button @click=${onToggleDialog}>Fermer</wired-button>
        </wired-dialog>
    `;
  }

  /**
   * Trick to prevent the use of Shadow DOM
   */
  createRenderRoot() {
      // We don't want shadow dom in order to use Amber css
      return this;
    }
}
