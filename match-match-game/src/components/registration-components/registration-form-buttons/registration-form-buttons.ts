import './registration-form-buttons.css';
import { BaseComponent } from '../../base-component';
import { Button } from '../../button/button';

export class RegistrationFormButtons extends BaseComponent {
  constructor() {
    super('div', ['registration-form__buttons']);
  }

  addButtons(buttons: Button[]): void {
    buttons.forEach(button => this.element.appendChild(button.element));
  }
}
