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

  constructor(private readonly rootElement: HTMLElement) {}

  private renderPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: About | Scores | Settings | Game | ErrorPage | null = null;
    switch (true) {
      case idPage === PageIds.AboutPage:
        page = new About(idPage);
        break;
      case idPage === PageIds.ScoresPage:
        page = new Scores(idPage);
        break;
      case idPage === PageIds.SettingsPage:
        page = new Settings(idPage);
        break;
      case idPage === PageIds.GamePage:
        page = new Game(idPage);
        break;
      default:
        page = new ErrorPage(idPage);
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
    this.renderPage('about-page');
    this.enableRouteChange();
  }
}
