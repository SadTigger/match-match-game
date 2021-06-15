import { Button } from '../../button/button';
import './cancel-button.css';

export class CancelButton extends Button {
  constructor() {
    super('cancel', 'cancel-button');
    this.element.addEventListener('click', () => {
      const inputs: NodeListOf<HTMLInputElement> =
        document.querySelectorAll('input');
      for (let index = 0; index < inputs.length; index++) {
        inputs[index].value = '';
      }
    });
  }
}
