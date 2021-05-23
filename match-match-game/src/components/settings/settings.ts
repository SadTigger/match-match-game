import { BaseComponent } from '../base-component';
import { GameSettingsContainer } from '../game-settings-container/game-settings-container';
import { GameSettings } from '../game-settings/game-settings';
import { Header } from '../header/header';
import { Logo } from '../logo/logo';
import { Page } from '../page/page';
import { SettingItem } from '../setting-item/setting-item';
import { SettingDropdown } from '../setting-dropdown/setting-dropdown';
import { Option } from '../option/option';
import { Select } from '../select/select';

export class Settings extends BaseComponent {
  private readonly header: Header;

  private readonly logo: Logo;

  private readonly page: Page;

  private readonly gameSettings: GameSettings;

  private readonly gameSettingsContainer: GameSettingsContainer;

  private readonly settingItem1: SettingItem;

  private readonly settingDropdown1: SettingDropdown;

  private readonly select1: Select;

  private readonly settingItem2: SettingItem;

  private readonly settingDropdown2: SettingDropdown;

  private readonly select2: Select;

  private readonly option1: Option;

  private readonly option2: Option;

  private readonly option3: Option;

  private readonly option4: Option;

  private readonly option5: Option;

  constructor() {
    super();
    this.header = new Header();
    this.logo = new Logo();
    this.page = new Page();
    this.gameSettings = new GameSettings();
    this.gameSettingsContainer = new GameSettingsContainer();
    // first setting
    this.settingDropdown1 = new SettingDropdown();
    this.settingItem1 = new SettingItem('Game cards');
    this.settingItem1.addDropdown(this.settingDropdown1);
    this.select1 = new Select('cards', 'select game cards type');
    this.option1 = new Option({
      name: 'fate grand order',
      value: 'fate grand order',
    });
    this.option2 = new Option({
      name: 'fate servants',
      value: 'fate servants',
    });
    this.settingDropdown1.addSelect(this.select1);
    this.select1.addOptions([this.option1, this.option2]);
    // second setting
    this.settingDropdown2 = new SettingDropdown();
    this.settingItem2 = new SettingItem('Difficulty');
    this.settingItem2.addDropdown(this.settingDropdown2);
    this.select2 = new Select('difficulty', 'select game type');
    this.option3 = new Option({ name: '4x4', value: '4x4' });
    this.option4 = new Option({ name: '6x6', value: '6x6' });
    this.option5 = new Option({ name: '8x8', value: '8x8' });
    this.settingDropdown2.addSelect(this.select2);
    this.select2.addOptions([this.option3, this.option4, this.option5]);
    this.element.appendChild(this.header.element);
    this.header.addLogo(this.logo);
    this.element.appendChild(this.page.element);
    this.page.addToPage(this.gameSettings.element);
    this.gameSettings.element.appendChild(this.gameSettingsContainer.element);
    this.gameSettingsContainer.addSettings([
      this.settingItem1,
      this.settingItem2,
    ]);
  }
}
