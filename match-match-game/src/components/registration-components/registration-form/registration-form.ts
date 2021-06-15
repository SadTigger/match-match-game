import { AttributesModel } from '../../../models/attributes-model';
import { BaseComponent } from '../../base-component';
import './registration-form.css';

export class RegistrationForm extends BaseComponent {
  constructor(
    private options: AttributesModel[] = [{ name: 'method', value: 'get' }],
  ) {
    super('form', ['registration-form'], [...options]);
    this.element.addEventListener('submit', e => {
      e.preventDefault();
    });
  }

  addContent(contentElements: HTMLElement[]): void {
    contentElements.forEach(element => this.element.appendChild(element));
  }
}
