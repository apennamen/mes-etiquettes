import { html } from 'lit-html';
// eslint-disable-next-line no-unused-vars
import { WiredIcon } from 'wired-icon';

const roughConfig = {
  fillStyle: 'zigzag',
  fill: 'grey',
  hachureGap: 1.5,
  fillWeight: 1,
};

export const SettingsButton = html`
  <style>
    .icon {
      width: 50px;
    }
  </style>
  <a href="/settings">
    <wired-icon class="icon" icon="settings" config=${JSON.stringify(roughConfig)}> </wired-icon>
  </a>
`;
