import { Button } from '../button/button';
// import { EndGamePopup } from '../end-game-popup/end-game-popup';
import './win-game-button.css';

export class WinGameButton extends Button {
  constructor() {
    super('ok', 'win-game-button');
    //   this.element.addEventListener('click', () => {
    //     popup.element.style.display = 'none';
    //   });
  }
}
