import { About } from './components/about/about';
import { Game } from './components/game/game';
import { ImageCategoryModel } from './models/image-category-model';

export class App {
  private readonly about: About;

  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.about = new About();
    this.game = new Game();
    this.rootElement.appendChild(this.game.element);
    // this.rootElement.appendChild(this.about.element);
  }

  async start(): Promise<void> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map(name => `${cat.category}/${name}`);
    this.game.newGame(images);
  }
}
