import './registration-form-header.css';
import { BaseComponent } from '../base-component';

export class RegistrationFormHeader extends BaseComponent {
  constructor(private title: string) {
    super('div', ['registration-form__header']);
    this.element.innerHTML = `<p class="registration-form__title">${title}</p>`;
  }
}
