import { html, nothing } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map.js';
import { WiredDivider } from "wired-elements";

const style = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '1em',
    paddingRight: '1em',
}

export const AppBar = (title, actionButton) => {
    return html`
    <style>
        .header {
          background-color: white;
        }
    </style>
    <header class="header">
        <div  style=${styleMap(style)}>
            <h2>${title}</h2>
            ${actionButton || nothing}
        </div>
        <wired-divider elevation="2"></wired-divider>
    </header>
`;
}