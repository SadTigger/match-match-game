import { Navbar } from '../../components/header-components/navbar/navbar';
import { BaseComponent } from '../../components/base-component';
import { Header } from '../../components/header-components/header/header';
import { InstructionsSteps } from '../../components/about-components/instructions-steps/instructions-steps';
import { Logo } from '../../components/header-components/logo/logo';
import { PageContent } from '../../components/page-components/page-content/page-content';
import { PageWrapper } from '../../components/page-components/page-wrapper/page-wrapper';
import { Page } from '../../components/page-components/page/page';
import { StepsRow } from '../../components/about-components/steps-row/steps-row';
import { NavbarCardList } from '../../components/header-components/navbar-card-list/navbar-card-list';
import { EmptyNavbarCard } from '../../components/header-components/empty-navbar-card/empty-navbar-card';
import { NavBarCard } from '../../components/header-components/navbar-card/navbar-card';
import { HeaderButton } from '../../components/header-components/header-button/header-button';
import { Registration } from '../../components/registration-components/registration';
import { PopupModal } from '../../components/page-components/popup-modal/popup-modal';
import { AboutTitle } from '../../components/about-components/about-title/about-title';
import { AboutInstructions } from '../../components/about-components/about-instructions/about-instructions';

export class About extends BaseComponent {
  private readonly header: Header;

  private readonly navbar: Navbar;

  private readonly navbarCardList: NavbarCardList;

  private readonly emptyNavbarCard: EmptyNavbarCard;

  private readonly aboutNavbarCard: NavBarCard;

  private readonly settingsNavbarCard: NavBarCard;

  private readonly scoresNavbarCard: NavBarCard;

  private readonly logo: Logo;

  private readonly registrationButton: HeaderButton;

  private readonly registration: Registration;

  private readonly registrationPopupModal: PopupModal;

  private readonly page: Page;

  private readonly pageWrapper: PageWrapper;

  private readonly pageContent: PageContent;

  private readonly aboutTitle: AboutTitle;

  private readonly aboutInstructions: AboutInstructions;

  private readonly instructionsSteps: InstructionsSteps;

  private readonly firstStep: StepsRow;

  private readonly secondStep: StepsRow;

  private readonly thirdStep: StepsRow;

  constructor(id: string) {
    super('div', [id]);
    // header
    this.header = new Header();
    this.navbar = new Navbar();
    this.logo = new Logo();
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
      'active',
      'about',
      'About Game',
      '#about-page',
    );
    this.settingsNavbarCard = new NavBarCard(
      '',
      'scores',
      'Best Scores',
      '#scores-page',
    );
    this.scoresNavbarCard = new NavBarCard(
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
      this.settingsNavbarCard.element,
      this.scoresNavbarCard.element,
    ]);
    // page
    this.page = new Page();
    this.pageWrapper = new PageWrapper();
    this.pageContent = new PageContent();
    this.aboutTitle = new AboutTitle();
    this.aboutInstructions = new AboutInstructions();
    this.instructionsSteps = new InstructionsSteps();
    this.firstStep = new StepsRow('Register new player in game', 1);
    this.secondStep = new StepsRow('Configure your game settings', 2);
    this.thirdStep = new StepsRow(
      'Start you new game! Remember card positions and match it before times up.',
      3,
    );
    this.element.appendChild(this.page.element);
    this.page.addToPage(this.pageWrapper.element);
    this.page.addToPage(this.registrationPopupModal.element);
    this.pageWrapper.wrap(this.pageContent);
    this.pageContent.addContent([
      this.aboutTitle.element,
      this.aboutInstructions.element,
    ]);
    this.aboutInstructions.element.appendChild(this.instructionsSteps.element);
    this.instructionsSteps.addRows([
      this.firstStep,
      this.secondStep,
      this.thirdStep,
    ]);
  }
}
