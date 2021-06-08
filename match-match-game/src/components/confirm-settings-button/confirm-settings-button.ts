import { Button } from '../button/button';
import './confirm-settings-button.css';

export class ConfirmSettingsButton extends Button {
  constructor() {
    super('confirm', 'confirm-settings-button');
    this.element.addEventListener('click', async () => {
      const cards: HTMLOptionElement = document.querySelector('.cards')!;
      const difficulty: HTMLOptionElement =
        document.querySelector('.difficulty')!;
    });
  }
}
