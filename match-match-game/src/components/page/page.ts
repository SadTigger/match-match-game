import { BaseComponent } from '../base-component';
import { PageWrapper } from '../page-wrapper/page-wrapper';
import './page.css';

export class Page extends BaseComponent {
  constructor() {
    super('section', ['page']);
  }

  addToPage(content: PageWrapper): void {
    this.element.appendChild(content.element);
  }
}