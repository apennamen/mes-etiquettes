import { WiredProgress } from 'wired-elements';

export class AppProgress extends WiredProgress {
  constructor() {
    super();
    this.style.setProperty('max-width', '300px');
    this.style.setProperty('font-family', 'inherit');
  }
}
