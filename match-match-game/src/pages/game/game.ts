import { ClockFace } from '../../components/game-components/clock-face/clock-face';
import { GameFieldContainer } from '../../components/game-components/game-field-container/game-field-container';
import { delay } from '../../shared/delay';
import { BaseComponent } from '../../components/base-component';
import { Card } from '../../components/game-components/card/card';
import { GameField } from '../../components/game-components/game-field/game-field';
import { GameTimerContainer } from '../../components/game-components/game-timer-container/game-timer-container';
import { Timer } from '../../components/game-components/timer/timer';
import { PageContent } from '../../components/page-components/page-content/page-content';
import { PageWrapper } from '../../components/page-components/page-wrapper/page-wrapper';
import { Header } from '../../components/header-components/header/header';
import { Logo } from '../../components/header-components/logo/logo';
import { Page } from '../../components/page-components/page/page';
import { Navbar } from '../../components/header-components/navbar/navbar';
import { NavbarCardList } from '../../components/header-components/navbar-card-list/navbar-card-list';
import { EmptyNavbarCard } from '../../components/header-components/empty-navbar-card/empty-navbar-card';
import { NavBarCard } from '../../components/header-components/navbar-card/navbar-card';
import { ImageCategoryModel } from '../../models/image-category-model';
import { StartGameButton } from '../../components/header-components/start-game-button/start-game-button';
import { StopGameButton } from '../../components/header-components/stop-game-button/stop-game-button';
import { EndGamePopup } from '../../components/game-components/end-game-popup/end-game-popup';
import { WinGameButton } from '../../components/game-components/win-game-button/win-game-button';
import { EndGameContent } from '../../components/game-components/end-game-content/end-game-content';
import { WinContainer } from '../../components/game-components/win-container/win-container';
import { TimeToString } from '../../shared/time-to-string';
import { Settings } from '../settings/settings';
import { Repeat } from '../../shared/repeat';

const FLIP_DELAY = 3000;
const ZERO = 0;
const TENS = 10;
const ONE_HUNDRED = 100;
const MS_TO_SECONDS = 0.001;
const TIMER_START = 15;
// for tests
// const TIMER_START = 2;

export const enum CardsImages {
  FGO = 'fate grand order',
  FSN = 'fate servants',
}

const enum GameDifficulty {
  easy = '4x4',
  medium = '6x6',
  hard = '8x8',
}

export class Game extends BaseComponent {
  public isStarted = false;

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

  private scores = ZERO;

  private mistakes = ZERO;

  private steps = ZERO;

  private startTime = ZERO;

  private elapsedTime = ZERO;

  private timerInterval = ZERO;

  private startInterval = ZERO;

  private countDown = TIMER_START;

  private cardSetting = ZERO;

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
    this.gameTimer.getTemplate(this.clockFace);
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

  newGame(images: string[], backImg: string, difficulty: string): void {
    this.gameField.clear();
    let chosenImages: string[];
    switch (true) {
      case difficulty === GameDifficulty.easy:
        this.gameField.setFieldSize(4);
        chosenImages = images.sort(() => Math.random() - 0.5).slice(0, 8);
        break;
      case difficulty === GameDifficulty.medium:
        this.gameField.setFieldSize(6);
        chosenImages = images.sort(() => Math.random() - 0.5);
        chosenImages = Repeat(chosenImages, 3);
        chosenImages = chosenImages.slice(0, 18);
        break;
      case difficulty === GameDifficulty.hard:
        this.gameField.setFieldSize(8);
        chosenImages = images.sort(() => Math.random() - 0.5);
        chosenImages = Repeat(chosenImages, 4);
        chosenImages = chosenImages.slice(0, 32);
        break;
      default:
        this.gameField.setFieldSize(4);
        chosenImages = images.sort(() => Math.random() - 0.5).slice(0, 8);
        break;
    }
    const cards = chosenImages
      .concat(chosenImages)
      .map(url => new Card(url, backImg))
      .sort(() => Math.random() - 0.5);

    cards.forEach(card => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });

    this.gameField.addCards(cards);

    // count down
    this.clockFace.changeTime('00:15');
    this.startInterval = window.setInterval(() => {
      this.countDown--;
      if (this.countDown >= TENS) {
        this.clockFace.changeTime(`00:${this.countDown}`);
      } else {
        this.clockFace.changeTime(`00:0${this.countDown}`);
      }
      if (this.countDown <= ZERO) clearInterval(this.startInterval);
    }, 1000);

    // timer
    setTimeout(() => {
      if (this.isStarted) {
        this.startTime = Date.now() - this.elapsedTime;
        this.timerInterval = window.setInterval(() => {
          this.elapsedTime = Date.now() - this.startTime;
          this.clockFace.changeTime(TimeToString(this.elapsedTime));
        }, 10);
      }
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
        (this.steps - this.mistakes) * ONE_HUNDRED -
        Math.floor(this.elapsedTime * MS_TO_SECONDS) * TENS;
      if (this.scores < 0) this.scores = ZERO;
      clearInterval(this.timerInterval);
      this.winContainer.getWinMessage(TimeToString(this.elapsedTime));
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
    this.isStarted = true;
    this.steps = ZERO;
    this.mistakes = ZERO;
    this.scores = ZERO;
    const res = await fetch(`./images.json`);
    const categories: ImageCategoryModel[] = await res.json();
    switch (true) {
      case setupSettings[0] === CardsImages.FSN:
        this.cardSetting = ZERO;
        break;
      case setupSettings[0] === CardsImages.FGO:
        this.cardSetting = 1;
        break;
      default:
        this.cardSetting = ZERO;
        break;
    }

    const cat = categories[this.cardSetting];
    const backImage = cat.back;
    const images = cat.images.map(name => `${cat.category}/${name}`);
    clearInterval(this.startInterval);
    clearInterval(this.timerInterval);
    this.clockFace.changeTime('00:00');
    this.newGame(images, backImage, setupSettings[1]);
  }

  stop(): void {
    this.isStarted = false;
    this.steps = ZERO;
    this.mistakes = ZERO;
    this.scores = ZERO;
    this.gameField.clear();
    clearInterval(this.startInterval);
    this.countDown = TIMER_START;
    clearInterval(this.timerInterval);
    this.clockFace.changeTime('00:00');
    this.elapsedTime = ZERO;
  }

  getGameStatus(): boolean {
    return this.isStarted;
  }
}
