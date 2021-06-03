import './about-title.css';
import { BaseComponent } from '../base-component';

export class AboutTitle extends BaseComponent {
  constructor() {
    super('div', ['about__title']);
    this.element.innerHTML = AboutTitle.addTitleText();
  }

  static addTitleText(text = 'How to play?'): string {
    return text;
  }
}
