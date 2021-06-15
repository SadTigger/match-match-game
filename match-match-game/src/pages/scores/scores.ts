import { BaseComponent } from '../../components/base-component';
import { EmptyNavbarCard } from '../../components/header-components/empty-navbar-card/empty-navbar-card';
import { HeaderButton } from '../../components/header-components/header-button/header-button';
import { Header } from '../../components/header-components/header/header';
import { Logo } from '../../components/header-components/logo/logo';
import { NavbarCardList } from '../../components/header-components/navbar-card-list/navbar-card-list';
import { NavBarCard } from '../../components/header-components/navbar-card/navbar-card';
import { Navbar } from '../../components/header-components/navbar/navbar';
import { PageContent } from '../../components/page-components/page-content/page-content';
import { PageWrapper } from '../../components/page-components/page-wrapper/page-wrapper';
import { Page } from '../../components/page-components/page/page';
import { Player } from '../../components/scores-components/player/player';
import { PopupModal } from '../../components/page-components/popup-modal/popup-modal';
import { Registration } from '../../components/registration-components/registration';
import { ScoreListItems } from '../../components/scores-components/score-list-items/score-list-items';
import { ScoreListTitle } from '../../components/scores-components/score-list-title/score-list-title';
import { ScoreList } from '../../components/scores-components/score-list/score-list';

export class Scores extends BaseComponent {
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

  private readonly pageWrapper: PageWrapper;

  private readonly pageContent: PageContent;

  private readonly scoreList: ScoreList;

  private readonly scoreListTitle: ScoreListTitle;

  private readonly scoreListItems: ScoreListItems;

  private readonly firstPlayer: Player;

  private readonly secondPlayer: Player;

  private readonly thirdPlayer: Player;

  private readonly fourthPlayer: Player;

  private readonly firstPlayer1: Player;

  private readonly secondPlayer1: Player;

  private readonly thirdPlayer1: Player;

  private readonly fourthPlayer1: Player;

  private readonly firstPlayer2: Player;

  private readonly secondPlayer2: Player;

  private readonly thirdPlayer2: Player;

  private readonly fourthPlayer2: Player;

  constructor(id: string) {
    super('div', [id]);
    // header
    this.header = new Header();
    this.logo = new Logo();
    this.navbar = new Navbar();
    this.registrationPopupModal = new PopupModal();
    this.registrationButton = new HeaderButton(this.registrationPopupModal);
    this.registration = new Registration(
      this.header,
      this.registrationButton,
      this.registrationPopupModal,
    );
    this.registrationPopupModal.addModalContent(this.registration.element);
    this.element.appendChild(this.header.element);
    this.header.addLogo(this.logo);
    this.navbarCardList = new NavbarCardList();
    this.emptyNavbarCard = new EmptyNavbarCard();
    this.aboutNavbarCard = new NavBarCard(
      '',
      'about',
      'About Game',
      '#about-page',
    );
    this.scoresNavbarCard = new NavBarCard(
      'active',
      'scores',
      'Best Scores',
      '#scores-page',
    );
    this.settingsNavbarCard = new NavBarCard(
      '',
      'settings',
      'Game Settings',
      '#settings-page',
    );
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
    this.pageWrapper = new PageWrapper();
    this.pageContent = new PageContent();
    this.scoreList = new ScoreList();
    this.scoreListTitle = new ScoreListTitle();
    this.scoreListItems = new ScoreListItems();
    this.firstPlayer = new Player(
      'Nicci Troiani',
      'nicci@gmail.com',
      456,
      '01',
    );
    this.secondPlayer = new Player(
      'George Fields',
      'jack@gmail.com',
      358,
      '02',
    );
    this.thirdPlayer = new Player(
      'Jones Dermot',
      'dermot@gamil.com',
      211,
      '03',
    );
    this.fourthPlayer = new Player('Jane Doe', 'jane.doe@gmail.com', 169, '04');
    this.firstPlayer1 = new Player(
      'Nicci Troiani',
      'nicci@gmail.com',
      456,
      '01',
    );
    this.secondPlayer1 = new Player(
      'George Fields',
      'jack@gmail.com',
      358,
      '02',
    );
    this.thirdPlayer1 = new Player(
      'Jones Dermot',
      'dermot@gamil.com',
      211,
      '03',
    );
    this.fourthPlayer1 = new Player(
      'Jane Doe',
      'jane.doe@gmail.com',
      169,
      '04',
    );
    this.firstPlayer2 = new Player(
      'Nicci Troiani',
      'nicci@gmail.com',
      456,
      '01',
    );
    this.secondPlayer2 = new Player(
      'George Fields',
      'jack@gmail.com',
      358,
      '02',
    );
    this.thirdPlayer2 = new Player(
      'Jones Dermot',
      'dermot@gamil.com',
      211,
      '03',
    );
    this.fourthPlayer2 = new Player(
      'Jane Doe',
      'jane.doe@gmail.com',
      169,
      '04',
    );
    this.element.appendChild(this.page.element);
    this.page.addToPage(this.pageWrapper.element);
    this.page.addToPage(this.registrationPopupModal.element);
    this.pageWrapper.wrap(this.pageContent);
    this.pageContent.addContent([this.scoreList.element]);
    this.scoreList.addContent([
      this.scoreListTitle.element,
      this.scoreListItems.element,
    ]);
    this.scoreListItems.addItems([
      this.firstPlayer,
      this.secondPlayer,
      this.thirdPlayer,
      this.fourthPlayer,
      this.firstPlayer1,
      this.secondPlayer1,
      this.thirdPlayer1,
      this.fourthPlayer1,
      this.firstPlayer2,
      this.secondPlayer2,
    ]);
  }
}
