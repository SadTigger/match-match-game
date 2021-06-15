import { BaseComponent } from '../../base-component';
import './about-title.css';

export class AboutTitle extends BaseComponent {
  constructor() {
    super('div', ['about__title']);
    this.element.innerHTML = AboutTitle.getTemplate();
  }

  static getTemplate(text = 'How to play?'): string {
    return text;
  }
}
