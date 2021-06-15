import './game-field-container.css';
import { BaseComponent } from '../../base-component';
import { GameField } from '../game-field/game-field';

export class GameFieldContainer extends BaseComponent {
  private field?: GameField;

  constructor() {
    super('div', ['game-field__container']);
  }

  addField(field: GameField): void {
    this.field = field;
    this.element.appendChild(this.field.element);
  }
}
