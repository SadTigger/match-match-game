import { BaseComponent } from '../base-component';
import './logo.css';

export class Logo extends BaseComponent {
  constructor() {
    super('div', ['logo']);
    this.element.innerHTML = `
    <span class="upper-logo">match</span>
    <span class="lower-logo">match</span>`;
  }
}
