import { BaseComponent } from '../base-component';
import { WinContainer } from '../win-container/win-container';
import './end-game-content.css';

export class EndGameContent extends BaseComponent {
  constructor() {
    super('div', ['end-game-content']);
  }

  addContainer(content: WinContainer): void {
    this.element.appendChild(content.element);
  }
}
