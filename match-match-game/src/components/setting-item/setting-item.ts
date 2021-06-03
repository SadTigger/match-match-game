import './setting-item.css';
import { BaseComponent } from '../base-component';
import { SettingDropdown } from '../setting-dropdown/setting-dropdown';

export class SettingItem extends BaseComponent {
  constructor(private settingTitle: string) {
    super('div', ['setting-item']);
    this.element.innerHTML = SettingItem.addTitleText(settingTitle);
  }

  static addTitleText(text: string): string {
    return `<div class="setting__title">${text}</div>`;
  }

  addDropdown(settingDropdown: SettingDropdown): void {
    this.element.appendChild(settingDropdown.element);
  }
}
