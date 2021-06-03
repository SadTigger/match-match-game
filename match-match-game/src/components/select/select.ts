import { BaseComponent } from '../base-component';
import { Option } from '../option/option';
import './select.css';

export class Select extends BaseComponent {
  constructor(private nameId: string, private defaultValue: string) {
    super('select', [], [{ name: `${nameId}`, value: `${nameId}` }]);
    this.element.innerHTML = Select.addSelectValue(defaultValue);
  }

  static addSelectValue(value: string): string {
    return `<option value='' disabled selected>${value}</option>`;
  }

  addOptions(options: Option[]): void {
    options.forEach(option => this.element.appendChild(option.element));
  }
}
