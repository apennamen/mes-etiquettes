import { html } from 'lit-html';
import '@amber-ds/components/card';

export const AppCard = (title, img, onClick) =>  html`
    <div class="col-12 col-sm-12 col-md-4 card" @click=${() => onClick(title)}>
        <amber-card
            title=${title}
            taxonomy="Morale"
            background="light"
            media="/img/${img}"
            >
        </amber-card>
    </div>
`;
