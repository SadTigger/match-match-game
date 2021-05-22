import { BaseComponent } from '../base-component';
import './score-list-title.css';

export class ScoreListTitle extends BaseComponent {
  constructor() {
    super('div', ['score-list__title']);
    this.element.innerHTML = 'Best players';
  }
}
