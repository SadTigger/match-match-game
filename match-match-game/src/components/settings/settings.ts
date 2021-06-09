import { EmptyNavbarCard } from '../empty-navbar-card/empty-navbar-card';
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
import { Navbar } from '../navbar/navbar';
import { NavBarCard } from '../navbar-card/navbar-card';
import { NavbarCardList } from '../navbar-card-list/navbar-card-list';
import { PopupModal } from '../popup-modal/popup-modal';
import { HeaderButton } from '../header-button/header-button';
import { Registration } from '../registration/registration';

export class Settings extends BaseComponent {
  private readonly header: Header;

  private readonly navbar: Navbar;

  private readonly navbarCardList: NavbarCardList;

  private readonly emptyNavbarCard: EmptyNavbarCard;

  private readonly aboutNavbarCard: NavBarCard;

  private readonly settingsNavbarCard: NavBarCard;

  private readonly scoresNavbarCard: NavBarCard;

  private readonly logo: Logo;

  private readonly registrationPopupModal: PopupModal;

  private readonly registrationButton: HeaderButton;

  private readonly registration: Registration;

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

  constructor(id: string) {
    super('div', [id]);
    // header
    this.header = new Header();
    this.navbar = new Navbar();
    this.registrationPopupModal = new PopupModal();
    this.registrationButton = new HeaderButton(this.registrationPopupModal);
    this.registration = new Registration(
      this.header,
      this.registrationButton,
      this.registrationPopupModal,
    );
    this.registrationPopupModal.addModalContent(this.registration.element);
    this.navbarCardList = new NavbarCardList();
    this.emptyNavbarCard = new EmptyNavbarCard();
    this.aboutNavbarCard = new NavBarCard(
      '',
      'about',
      'About Game',
      '#about-page',
    );
    this.scoresNavbarCard = new NavBarCard(
      '',
      'scores',
      'Best Scores',
      '#scores-page',
    );
    this.settingsNavbarCard = new NavBarCard(
      'active',
      'settings',
      'Game Settings',
      '#settings-page',
    );
    this.logo = new Logo();
    this.header.addLogo(this.logo);
    this.header.addNavigation(this.navbar);
    // TODO
    // if (!this.registered)
    this.header.addButton(this.registrationButton);
    // else
    // this.header.removeButton(this.registrationButton);
    // this.header.addButton(this.startGameButton);
    this.navbar.element.appendChild(this.navbarCardList.element);
    this.navbarCardList.addItems([
      this.emptyNavbarCard.element,
      this.aboutNavbarCard.element,
      this.scoresNavbarCard.element,
      this.settingsNavbarCard.element,
    ]);
    // page
    this.page = new Page();
    this.gameSettings = new GameSettings();
    this.gameSettingsContainer = new GameSettingsContainer();
    // first setting
    this.settingDropdown1 = new SettingDropdown();
    this.settingItem1 = new SettingItem('Game cards');
    this.settingItem1.addDropdown(this.settingDropdown1);
    this.select1 = new Select('cards');
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
    this.select2 = new Select('difficulty');
    this.option3 = new Option({ name: '4x4', value: '4x4' });
    this.option4 = new Option({ name: '6x6', value: '6x6' });
    this.option5 = new Option({ name: '8x8', value: '8x8' });
    this.settingDropdown2.addSelect(this.select2);
    this.select2.addOptions([this.option3, this.option4, this.option5]);
    this.element.appendChild(this.header.element);
    this.element.appendChild(this.page.element);
    this.page.addToPage(this.gameSettings.element);
    this.page.addToPage(this.registrationPopupModal.element);
    this.gameSettings.element.appendChild(this.gameSettingsContainer.element);
    this.gameSettingsContainer.addSettings([
      this.settingItem1,
      this.settingItem2,
    ]);
  }

  getSettings(): string[] {
    const cards: HTMLOptionElement = this.element.querySelector('.cards')!;
    const difficulty: HTMLOptionElement =
      this.element.querySelector('.difficulty')!;

    return [cards.value, difficulty.value];
  }
}
