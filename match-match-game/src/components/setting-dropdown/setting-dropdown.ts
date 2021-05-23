import './setting-dropdown.css';
import { BaseComponent } from '../base-component';
import { Select } from '../select/select';

export class SettingDropdown extends BaseComponent {
  constructor() {
    super('div', ['setting-dropdown']);
  }

  addSelect(select: Select): void {
    this.element.appendChild(select.element);
  }
}
