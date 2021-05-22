import './about-title.css';
import { BaseComponent } from '../base-component';

export class AboutTitle extends BaseComponent {
  constructor() {
    super('div', ['about__title']);
    this.element.innerHTML = 'How to play?';
  }
}
