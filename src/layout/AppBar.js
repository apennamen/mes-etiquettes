import { html } from 'lit-html';
// eslint-disable-next-line no-unused-vars
import { WiredDivider } from 'wired-elements';

import { SettingsButton } from './SettingsButton.js';

export const AppBar = (title, actionButton) => html`
  <style>
    .header {
      background-color: white;
    }
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 1em;
      padding-right: 1em;
    }
  </style>
  <header class="header">
    <div class="header-content">
      <h2>${title}</h2>
      ${actionButton || SettingsButton}
    </div>
    <wired-divider elevation="2"></wired-divider>
  </header>
`;
