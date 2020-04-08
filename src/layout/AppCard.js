import { html } from 'lit-html';
import { WiredImage, WiredCard } from "wired-elements";

export const AppCard = (title, img, onClick) =>  html`
    <style>
        .card > * {
          background-color: white;
        }
        .card > wired-card:hover {
            cursor: pointer;
        }
        .card {
          padding: 1em;
          text-align: center;
        }
    </style>
    <div class="card">
        <wired-card  @click=${() => onClick(title)}>
            <wired-image src="/img/${img}">
            </wired-image>
            <p>${title}</p>
        </wired-card>
    </div>
`;
