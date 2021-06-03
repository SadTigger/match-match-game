import './game-field.css';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';

const SHOW_TIME = 15;

export class GameField extends BaseComponent {
  private cards: Card[] = [];

  constructor() {
    super('div', ['game-field']);
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
    this.cards.forEach(card => this.element.appendChild(card.element));
    setTimeout(() => {
      this.cards.forEach(card => card.flipToBack());
    }, SHOW_TIME * 1000);
  }
}
