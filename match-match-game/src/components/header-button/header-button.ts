import { Button } from '../button/button';
import { PopupModal } from '../popup-modal/popup-modal';
import './header-button.css';

export class HeaderButton extends Button {
  constructor(modal: PopupModal) {
    super('Register new player', 'header-button');
    this.element.addEventListener('click', () => {
      modal.element.style.display = 'flex';
    });
  }
}
