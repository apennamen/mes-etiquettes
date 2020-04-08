import { html } from 'lit-html';
import { WiredImage } from "wired-elements";
import '@amber-ds/components/card';

export const AppCard = (title, img, onClick) =>  html`
    <div class="card" @click=${() => onClick(title)}>
        <wired-image src="/img/${img}">
        </wired-image>
        <!--<amber-card
            title=${title}
            taxonomy="Morale"
            background="light"
            media="/img/${img}"
            >
        </amber-card>-->
    </div>
`;
