import { Button } from '../button/button';
import { PopupModal } from '../popup-modal/popup-modal';
import './cancel-button.css';

export class CancelButton extends Button {
  constructor(modal: PopupModal) {
    super('cancel', 'cancel-button');
    this.element.addEventListener('click', () => {
      modal.element.style.display = 'none';
    });
  }
}
