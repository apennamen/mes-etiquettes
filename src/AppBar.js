import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map.js';
import '@amber-ds/components/button';

const titleStyle = {
    backgroundColor: 'white',
    padding: '1em',
    borderBottom: '1px solid #e0e0e0',
}

const buttonStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
}

export const AppBar = (title, onClick) => html`
    <header class="row" style=${styleMap(titleStyle)}>
        <div class="col-8">
            <h1>${title}</h1>
        </div>
        <div class="col-4" style=${styleMap(buttonStyle)}>
            <amber-button nooutline @click=${onClick}>
                Mes choix
            </amber-button>
        </div>
    </header>
`;