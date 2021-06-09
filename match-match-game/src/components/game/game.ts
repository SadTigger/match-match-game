import { ClockFace } from '../clock-face/clock-face';
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
import { EndGamePopup } from '../end-game-popup/end-game-popup';
import { WinGameButton } from '../win-game-button/win-game-button';
import { EndGameContent } from '../end-game-content/end-game-content';
import { WinContainer } from '../win-container/win-container';
import { TimeToString } from '../../shared/time-to-string';
import { Settings } from '../settings/settings';

const FLIP_DELAY = 3000;
const TIMER_START = 15;
// for tests
// const TIMER_START = 2;

export const enum CardsImages {
  FGO = 'fate grand order',
  FSN = 'fate servants',
}

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

  private readonly clockFace: ClockFace;

  private readonly gameFieldContainer: GameFieldContainer;

  private readonly gameField: GameField;

  private readonly endGamePopup: EndGamePopup;

  private readonly winGameButton: WinGameButton;

  private readonly endGameContent: EndGameContent;

  private readonly winContainer: WinContainer;

  private activeCard?: Card;

  private isAnimation = false;

  private scores = 0;

  private mistakes = 0;

  private steps = 0;

  private startTime = 0;

  private elapsedTime = 0;

  private timerInterval = 0;

  private startInterval = 0;

  private count_down = 15;

  private cardSetting = 0;

  private readonly settings: Settings;

  constructor(id: string, settingsPage: Settings) {
    super('div', [id]);
    this.settings = settingsPage;
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
      clearInterval(this.timerInterval);
      this.stop();
      this.stopGameButton.element.style.display = 'none';
      this.startGameButton.element.style.display = 'block';
    });
    this.startGameButton.element.addEventListener('click', () => {
      this.start(this.settings.getSettings());
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
    this.clockFace = new ClockFace();
    this.gameTimer.addClockFace(this.clockFace);
    this.gameFieldContainer = new GameFieldContainer();
    this.gameField = new GameField();
    this.endGamePopup = new EndGamePopup();
    this.endGameContent = new EndGameContent();
    this.winGameButton = new WinGameButton();
    this.winContainer = new WinContainer();
    this.endGameContent.addContainer(this.winContainer);
    this.endGamePopup.addModalContent(this.endGameContent);
    this.element.appendChild(this.page.element);
    this.page.addToPage(this.pageWrapper.element);
    this.page.addToPage(this.endGamePopup.element);
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

    // count down
    this.clockFace.changeTime('00:15');
    this.startInterval = window.setInterval(() => {
      this.count_down--;
      if (this.count_down >= 10) {
        this.clockFace.changeTime(`00:${this.count_down}`);
      } else {
        this.clockFace.changeTime(`00:0${this.count_down}`);
      }
      if (this.count_down <= 0) clearInterval(this.startInterval);
    }, 1000);

    // timer
    setTimeout(() => {
      this.startTime = Date.now() - this.elapsedTime;
      this.timerInterval = window.setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime;
        this.clockFace.changeTime(TimeToString(this.elapsedTime));
      }, 10);
    }, TIMER_START * 1000);
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

    this.steps += 1;

    if (this.activeCard.image !== card.image) {
      this.mistakes += 1;
      this.activeCard.setDiscrepancyMask();
      card.setDiscrepancyMask();
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
      this.activeCard.removeDiscrepancyMask();
      card.removeDiscrepancyMask();
    } else {
      this.activeCard.setMatchMask();
      card.setMatchMask();
    }

    this.activeCard = undefined;
    this.isAnimation = false;
    const fieldLength = document.querySelectorAll('.card').length;
    const matchedCards = document.querySelectorAll('.match').length;
    if (fieldLength === matchedCards) {
      this.endGamePopup.element.style.display = 'flex';
      this.scores =
        (this.steps - this.mistakes) * 100 -
        Math.floor(this.elapsedTime * 0.001) * 10;
      if (this.scores < 0) this.scores = 0;
      clearInterval(this.timerInterval);
      this.winContainer.addText(TimeToString(this.elapsedTime));
      this.winContainer.addButton(this.winGameButton);
      this.winGameButton.element.addEventListener('click', () => {
        this.endGamePopup.element.style.display = 'none';
        this.stop();
        this.stopGameButton.element.style.display = 'none';
        this.startGameButton.element.style.display = 'block';
      });
    }
  }

  async start(setupSettings: string[]): Promise<void> {
    this.steps = 0;
    this.mistakes = 0;
    this.scores = 0;
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    // console.log('settings: ', setupSettings);
    switch (true) {
      case setupSettings[0] === CardsImages.FSN:
        this.cardSetting = 0;
        break;
      case setupSettings[0] === CardsImages.FGO:
        this.cardSetting = 1;
        break;
      default:
        this.cardSetting = 0;
        break;
    }

    const cat = categories[this.cardSetting];
    const backImage = cat.back;
    const images = cat.images.map(name => `${cat.category}/${name}`);
    clearInterval(this.startInterval);
    clearInterval(this.timerInterval);
    this.clockFace.changeTime('00:00');
    this.newGame(images, backImage);
  }

  stop(): void {
    this.steps = 0;
    this.mistakes = 0;
    this.scores = 0;
    this.gameField.clear();
    clearInterval(this.startInterval);
    this.count_down = 15;
    clearInterval(this.timerInterval);
    this.clockFace.changeTime('00:00');
    this.elapsedTime = 0;
  }
}
