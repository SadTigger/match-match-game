import './card.css';
import { BaseComponent } from '../base-component';

const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {
  isFlipped = false;

  constructor(readonly image: string,readonly backImage: string) {
    super('div', ['card-container']);
    this.element.innerHTML = `${this.getCardTemplate(image, backImage)}`
  }

  getCardTemplate(image: string, backImage: string) {
    return `<div class="card">
      <div class="card-back" style="background-image: url('./assets/images/${image}')"></div>
      <div class="card-front" style="background-image: url('./assets/images/game/${backImage}')"></div>
    </div>
    `;
  }

  flipToBack(): Promise<void> {
    this.isFlipped = true;
    return this.flip(true);
  }

  flipToFront(): Promise<void> {
    this.isFlipped = false;
    return this.flip();
  }

  private flip(isFront = false): Promise<void> {
    return new Promise(resolve => {
      this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }
}
