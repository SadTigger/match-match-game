import { BaseComponent } from '../../base-component';
import { PageContent } from '../page-content/page-content';
import './page-wrapper.css';

export class PageWrapper extends BaseComponent {
  private pageContent?: PageContent;

  constructor() {
    super('div', ['wrapper']);
  }

  wrap(pageContent: PageContent): void {
    this.pageContent = pageContent;
    this.element.appendChild(this.pageContent.element);
  }
}
