import { BaseComponent } from '../../base-component';
import './score-list.css';

export class ScoreList extends BaseComponent {
  constructor() {
    super('div', ['score-list']);
  }

  addContent(content: HTMLElement[]): void {
    content.forEach(cont => this.element.appendChild(cont));
  }
}
