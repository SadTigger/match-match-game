import './setting-item.css';
import { BaseComponent } from '../base-component';
import { SettingDropdown } from '../setting-dropdown/setting-dropdown';

export class SettingItem extends BaseComponent {
  constructor(private settingTitle: string) {
    super('div', ['setting-item']);
    this.element.innerHTML = `<div class="setting__title">${settingTitle}</div>`;
  }

  addDropdown(settingDropdown: SettingDropdown): void {
    this.element.appendChild(settingDropdown.element);
  }
}
