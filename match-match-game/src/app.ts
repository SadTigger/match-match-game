import { throws } from 'assert/strict';
import { About } from './components/about/about';
import { Game } from './components/game/game';
import { Scores } from './components/scores/scores';
import { ImageCategoryModel } from './models/image-category-model';

export class App {
  private readonly about: About;

  private readonly game: Game;

  private readonly scores: Scores;

  constructor(private readonly rootElement: HTMLElement) {
    this.about = new About();
    this.game = new Game();
    this.scores = new Scores();
    // this.rootElement.appendChild(this.game.element);
    // this.rootElement.appendChild(this.about.element);
    this.rootElement.appendChild(this.scores.element);
  }

  async start(): Promise<void> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map(name => `${cat.category}/${name}`);
    this.game.newGame(images);
  }
}
