import './page-content.css';
import { BaseComponent } from '../base-component';

export class PageContent extends BaseComponent {
  constructor() {
    super('div', ['content']);
  }

  addContent(content: HTMLElement[]): void {
    content.forEach(cont => this.element.appendChild(cont));
  }
}
