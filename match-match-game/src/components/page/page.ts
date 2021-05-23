import { BaseComponent } from '../base-component';
import './page.css';

export class Page extends BaseComponent {
  constructor() {
    super('section', ['page']);
  }

  addToPage(content: HTMLElement): void {
    this.element.appendChild(content);
  }
}
