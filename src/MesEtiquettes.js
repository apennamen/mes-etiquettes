import { LitElement, html } from 'lit-element';
import '@amber-ds/components/modal';
import '@amber-ds/components/progress-bar';
import { connect } from 'pwa-helpers';

import { AppBar } from './AppBar';
import { AppCard } from './AppCard';
import { store } from './redux/store';
import { selectChoice } from './redux/actions'

const onSelectChoice = title => {
  store.dispatch(selectChoice(title));
};

const onButtonClick = () => {
  document.getElementById('choice-modal').showModal();
};

export class MesEtiquettes extends connect(store)(LitElement) {
  static get properties() {
    return {
      choices: { type: Array },
      title: { type: String },
      complete: { type: Boolean },
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
        }
        .footer {
          width: 100%;
          padding: 1em;
          border-top: 1px solid #e0e0e0;
          background-color: white;
          position: fixed;
          bottom: 0;
        }
        .card {
            border: 1px solid #e0e0e0;
        }
        .card:hover {
            border: 2px solid #e0e0e0;
            cursor: pointer;
        }
      </style>
      <div>
        ${AppBar(this.title, onButtonClick)}
        <div class="row content">
          <div class="col-2"></div>
          ${
            this.progress === 100 ?
              html`<div class="col-12">Vous avez terminé toutes les étapes !</div>` :
              this.choices.map(choice => AppCard(choice.title, choice.img, onSelectChoice))
          }
          <div class="col-2"></div>
        </div>
        <footer class="row footer">
          <amber-progress-bar
            class="col-12"
            label="Progrès"
            value=${this.progress}
          ></amber-progress-bar>
        </footer>
      </div>
      
      <amber-modal
          id="choice-modal"
          title="Vos choix"
          >
          ${
            this.selectedChoices.length ?
              this.selectedChoices.map(choice => html`<p>${choice}</div>`) :
              html`<p>Aucun choix effectué</div>`
          }
        </amber-modal>
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
