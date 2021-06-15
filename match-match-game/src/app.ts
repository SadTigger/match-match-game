import { About } from './pages/about/about';
import { ErrorPage } from './pages/error-page/error-page';
import { Game } from './pages/game/game';
import { Scores } from './pages/scores/scores';
import { Settings } from './pages/settings/settings';

export const enum PageIds {
  AboutPage = 'about-page',
  ScoresPage = 'scores-page',
  SettingsPage = 'settings-page',
  GamePage = 'game-page',
}

export class App {
  private static defaultPageId = 'current-page';
  // for tests
  // private static defaultPageId = 'game-page';

  private readonly about: About;

  private readonly scores: Scores;

  private readonly settings: Settings;

  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.about = new About('#about-page');
    this.scores = new Scores('#about-page');
    this.settings = new Settings('#about-page');
    this.game = new Game('#game-page', this.settings);
  }

  private renderPage(pageId: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }

    let page: HTMLElement | null = null;

    if (this.game.getGameStatus()) this.game.stop();

    switch (true) {
      case pageId === PageIds.AboutPage:
        page = this.about.element;
        break;
      case pageId === PageIds.ScoresPage:
        page = this.scores.element;
        break;
      case pageId === PageIds.SettingsPage:
        page = this.settings.element;
        break;
      case pageId === PageIds.GamePage:
        page = this.game.element;
        break;
      default:
        page = new ErrorPage(pageId).element;
        break;
    }

    if (page) {
      page.id = App.defaultPageId;

      this.rootElement.append(page);
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      this.renderPage(hash);
    });
  }

  run(): void {
    this.renderPage('about-page');
    this.enableRouteChange();
  }
}
