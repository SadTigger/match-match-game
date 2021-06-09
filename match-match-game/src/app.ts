import { About } from './components/about/about';
import { ErrorPage } from './components/error-page/error-page';
import { Game } from './components/game/game';
import { Scores } from './components/scores/scores';
import { Settings } from './components/settings/settings';

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

    let page: About | Scores | Settings | Game | ErrorPage | null = null;

    if (this.game.getGameStatus()) this.game.stop();

    switch (true) {
      case pageId === PageIds.AboutPage:
        page = this.about;
        break;
      case pageId === PageIds.ScoresPage:
        page = this.scores;
        break;
      case pageId === PageIds.SettingsPage:
        page = this.settings;
        break;
      case pageId === PageIds.GamePage:
        page = this.game;
        break;
      default:
        page = new ErrorPage(pageId);
        break;
    }

    if (page) {
      const pageHTML = page.element;
      pageHTML.id = App.defaultPageId;
      this.rootElement.append(pageHTML);
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      this.renderPage(hash);
    });
  }

  run(): void {
    this.renderPage(App.defaultPageId);
    this.enableRouteChange();
  }
}
