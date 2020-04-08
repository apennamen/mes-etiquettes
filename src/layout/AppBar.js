import { html, nothing } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map.js';
import { WiredDivider } from "wired-elements";

const style = {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}

export const AppBar = (title, actionButton) => {
    return html`
    <header>
        <div  style=${styleMap(style)}>
            <h1>${title}</h1>
            ${actionButton || nothing}
        </div>
        <wired-divider elevation="2"></wired-divider>
    </header>
`;
}