import { BaseComponent } from '../../base-component';
import { SettingItem } from '../setting-item/setting-item';
import './game-settings-container.css';

export class GameSettingsContainer extends BaseComponent {
  constructor() {
    super('div', ['game-settings-container']);
  }

  addSettings(content: SettingItem[]): void {
    content.forEach(setting => this.element.appendChild(setting.element));
  }
}
