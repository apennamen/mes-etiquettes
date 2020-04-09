import { html } from 'lit-html';
// eslint-disable-next-line no-unused-vars
import { WiredButton } from 'wired-elements';
import '@material/mwc-icon';

export const SettingsButton = html`
  <a href="/settings">
    <wired-button elevation="2" style="color: black">
      Param
    </wired-button>
  </a>
`;
