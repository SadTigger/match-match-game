import { BaseComponent } from '../base-component';
import './start-game-link.css';

export class StartGameLink extends BaseComponent {
  constructor() {
    super(
      'a',
      ['start-game-link', 'button'],
      [
        {
          name: 'href',
          value: '#game-page',
        },
      ],
    );
    this.element.innerHTML = 'new game';
  }
}
