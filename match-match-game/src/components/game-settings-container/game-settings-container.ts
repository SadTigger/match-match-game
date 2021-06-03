import { BaseComponent } from '../base-component';
import { ConfirmSettingsButton } from '../confirm-settings-button/confirm-settings-button';
import { SettingItem } from '../setting-item/setting-item';
import './game-settings-container.css';

export class GameSettingsContainer extends BaseComponent {
  constructor() {
    super('div', ['game-settings-container']);
  }

  addSettings(content: SettingItem[]): void {
    content.forEach(setting => this.element.appendChild(setting.element));
  }

  addButton(button: ConfirmSettingsButton): void {
    this.element.appendChild(button.element);
  }
}
