import { BaseComponent } from '../base-component';
import { Player } from '../player/player';
import './score-list-items.css';

export class ScoreListItems extends BaseComponent {
  constructor() {
    super('div', ['score-list__items']);
  }

  addItems(scores: Player[]): void {
    scores.sort((a, b) => b.score - a.score);
    scores.forEach(score => this.element.appendChild(score.element));
  }
}
