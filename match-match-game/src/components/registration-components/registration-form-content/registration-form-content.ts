import './registration-form-content.css';
import { BaseComponent } from '../../base-component';

export class RegistrationFormContent extends BaseComponent {
  constructor() {
    super('div', ['registration-form__content']);
  }

  addContent(contents: HTMLElement[]): void {
    contents.forEach(content => this.element.appendChild(content));
  }
}
