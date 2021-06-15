import './end-game-popup.css';
import { BaseComponent } from '../../base-component';
import { EndGameContent } from '../end-game-content/end-game-content';

export class EndGamePopup extends BaseComponent {
  constructor() {
    super('div', ['end-game-popup'], [{ name: 'id', value: 'end-game-popup' }]);
  }

  addModalContent(content: EndGameContent): void {
    this.element.appendChild(content.element);
  }
}
