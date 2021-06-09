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

  private renderPage(pageId: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: About | Scores | Settings | Game | ErrorPage | null = null;
    switch (true) {
      case pageId === PageIds.AboutPage:
        page = new About(pageId);
        break;
      case pageId === PageIds.ScoresPage:
        page = new Scores(pageId);
        break;
      case pageId === PageIds.SettingsPage:
        page = new Settings(pageId);
        break;
      case pageId === PageIds.GamePage:
        page = new Game(pageId);
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
    this.renderPage('about-page');
    this.enableRouteChange();
  }
}
