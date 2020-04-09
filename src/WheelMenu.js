import { LitElement, html, css } from 'lit-element';
import rough from 'roughjs';

export class WheelMenu extends LitElement {
  static get styles() {
    return css`
      #svg {
        width: 100%;
      }
    `;
  }

  static get properties() {
    return {
      menuItems: { type: Array },
    };
  }

  constructor() {
    super();

    this.menuItems = [];
  }

  firstUpdated() {
    const svg = this.shadowRoot.getElementById('svg');
    const rc = rough.svg(svg);

    this.menuItems.forEach(({ title, color, url }, i) => {
      // Custom event to navigate from url
      const event = new CustomEvent('navigate', {
        detail: {
          url,
        },
      });
      // Quarter of circle
      const quart = rc.path('M0,0 L0,-200  A200,200 0 0,1  200,000  z', { fill: color });

      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.textContent = title;
      label.setAttribute('transform', `translate(50, -50) scale(1.5) rotate(-45)`);

      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      group.appendChild(quart);
      group.appendChild(label);
      group.setAttribute('transform', `translate(210,210) rotate(${i * 90})`);
      group.onclick = () => this.dispatchEvent(event);

      svg.appendChild(group);
    });
  }

  render() {
    return html`
      <svg id="svg" viewBox="0 0 420 420"></svg>
    `;
  }
}
