import { BaseComponent } from '../base-component';
import { Option } from '../option/option';
import './select.css';

export class Select extends BaseComponent {
  constructor(private nameId: string) {
    super('select', [`${nameId}`]);
  }

  addOptions(options: Option[]): void {
    options.forEach(option => this.element.appendChild(option.element));
  }
}
