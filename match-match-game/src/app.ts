import { About } from './components/about/about';
import { ErrorPage, ErrorTypes } from './components/error-page/error-page';
import { Game } from './components/game/game';
import { Scores } from './components/scores/scores';
import { Settings } from './components/settings/settings';
import { ImageCategoryModel } from './models/image-category-model';

export const enum PageIds {
  AboutPage = 'about-page',
  ScoresPage = 'scores-page',
  SettingsPage = 'settings-page',
  GamePage = 'game-page',
}

export class App {
  private static defaultPageId = 'current-page';

  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game('game-page');
  }

  async start(): Promise<void> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[1];
    const backImage = cat.back;
    const images = cat.images.map(name => `${cat.category}/${name}`);
    this.game.newGame(images, backImage);
  }

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
        page = this.game;
        break;
      default:
        page = new ErrorPage(idPage, ErrorTypes.Error_404);
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
