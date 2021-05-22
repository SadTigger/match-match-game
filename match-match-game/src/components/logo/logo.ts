import { BaseComponent } from '../base-component';
import './logo.css';

export class Logo extends BaseComponent {
  constructor() {
    super('div', ['logo']);
    this.element.innerHTML = `
    <div class="upper-logo">match</div>
    <div class="lower-logo">match</div>`;
  }
}
