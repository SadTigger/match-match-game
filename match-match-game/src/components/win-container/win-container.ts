import { BaseComponent } from '../base-component';
import { WinGameButton } from '../win-game-button/win-game-button';
import './win-container.css';

export class WinContainer extends BaseComponent {
  constructor() {
    super('div', ['win-container']);
  }

  addText(time: string): void {
    this.element.innerHTML = `<p>Congratulations! You successfully found all matches on ${time} minutes.</p>`;
  }

  addButton(button: WinGameButton): void {
    this.element.appendChild(button.element);
  }
}
