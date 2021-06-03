import { GameFieldContainer } from '../game-field-container/game-field-container';
import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { GameField } from '../game-field/game-field';
import { GameTimerContainer } from '../game-timer-container/game-timer-container';
import { Timer } from '../timer/timer';
import { PageContent } from '../page-content/page-content';
import { PageWrapper } from '../page-wrapper/page-wrapper';
import { Header } from '../header/header';
import { Logo } from '../logo/logo';
import { Page } from '../page/page';
import { Navbar } from '../navbar/navbar';
import { NavbarCardList } from '../navbar-card-list/navbar-card-list';
import { EmptyNavbarCard } from '../empty-navbar-card/empty-navbar-card';
import { NavBarCard } from '../navbar-card/navbar-card';
import { ImageCategoryModel } from '../../models/image-category-model';
import { StartGameButton } from '../start-game-button/start-game-button';
import { StopGameButton } from '../stop-game-button/stop-game-button';

const FLIP_DELAY = 3000;

export class Game extends BaseComponent {
  private readonly header: Header;

  private readonly navbar: Navbar;

  private readonly navbarCardList: NavbarCardList;

  private readonly emptyNavbarCard: EmptyNavbarCard;

  private readonly aboutNavbarCard: NavBarCard;

  private readonly settingsNavbarCard: NavBarCard;

  private readonly scoresNavbarCard: NavBarCard;

  private readonly logo: Logo;

  private readonly stopGameButton: StopGameButton;

  private readonly startGameButton: StartGameButton;

  private readonly page: Page;

  private readonly pageWrapper: PageWrapper;

  private readonly pageContent: PageContent;

  private readonly gameTimerContainer: GameTimerContainer;

  private readonly gameTimer: Timer;

  private readonly gameFieldContainer: GameFieldContainer;

  private readonly gameField: GameField;

  private activeCard?: Card;

  private isAnimation = false;

  constructor(id: string) {
    super('div', [id]);
    // header
    this.header = new Header();
    this.navbar = new Navbar();
    this.logo = new Logo();
    this.stopGameButton = new StopGameButton();
    this.startGameButton = new StartGameButton();
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
      '',
      'settings',
      'Game Settings',
      '#settings-page',
    );
    this.element.appendChild(this.header.element);
    this.header.addLogo(this.logo);
    this.header.addNavigation(this.navbar);
    this.header.addButton(this.stopGameButton);
    this.header.addButton(this.startGameButton);
    this.stopGameButton.element.addEventListener('click', () => {
      this.stop();
      this.stopGameButton.element.style.display = 'none';
      this.startGameButton.element.style.display = 'block';
    });
    this.startGameButton.element.addEventListener('click', () => {
      this.start();
      this.stopGameButton.element.style.display = 'block';
      this.startGameButton.element.style.display = 'none';
    });
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
    this.gameTimerContainer = new GameTimerContainer();
    this.gameTimer = new Timer();
    this.gameFieldContainer = new GameFieldContainer();
    this.gameField = new GameField();
    this.element.appendChild(this.page.element);
    this.page.addToPage(this.pageWrapper.element);
    this.pageWrapper.wrap(this.pageContent);
    this.pageContent.addContent([
      this.gameTimerContainer.element,
      this.gameFieldContainer.element,
    ]);
    this.gameTimerContainer.addTimer(this.gameTimer);
    this.gameFieldContainer.addField(this.gameField);
  }

  newGame(images: string[], backImg: string): void {
    this.gameField.clear();
    const cards = images
      .concat(images)
      .map(url => new Card(url, backImg))
      .sort(() => Math.random() - 0.5);

    cards.forEach(card => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });

    this.gameField.addCards(cards);
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;

    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      // TODO
      // Add mask discrepancy at this.activeCard and card

      this.activeCard.setDiscrepancyMask();
      card.setDiscrepancyMask();
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
      this.activeCard.removeDiscrepancyMask();
      card.removeDiscrepancyMask();
    } else {
      // TODO
      // Add mask match at this.activeCard and card
      this.activeCard.setMatchMask();
      card.setMatchMask();
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }

  async start(): Promise<void> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[1];
    const backImage = cat.back;
    const images = cat.images.map(name => `${cat.category}/${name}`);
    this.newGame(images, backImage);
  }

  stop(): void {
    this.gameField.clear();
  }
}
