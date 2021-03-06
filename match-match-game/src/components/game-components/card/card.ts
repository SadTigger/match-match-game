import './card.css';
import { BaseComponent } from '../../base-component';
import { CardMask } from '../card-mask/card-mask';

const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {
  isFlipped = false;

  private readonly cardMask: CardMask;

  constructor(readonly image: string, readonly backImage: string) {
    super('div', ['card-container']);
    this.image = image;
    this.backImage = backImage;
    this.element.innerHTML = Card.getTemplate(this.image, this.backImage);
    this.cardMask = new CardMask();
  }

  static getTemplate(image: string, backImage: string): string {
    return `<div class="card">
      <div class="card-back" style="background-image: url(./assets/images/${image})"></div>
      <div class="card-front" style="background-image: url(./assets/images/game/${backImage})"></div>
    </div>`;
  }

  setDiscrepancyMask(): void {
    this.element.innerHTML += this.cardMask.element.outerHTML;
    this.element.classList.add('discrepancy');
  }

  setMatchMask(): void {
    this.element.innerHTML += this.cardMask.element.outerHTML;
    this.element.classList.add('match');
  }

  removeDiscrepancyMask(): void {
    this.element.classList.remove('discrepancy');
    this.element.innerHTML = Card.getTemplate(this.image, this.backImage);
  }

  removeMatchMask(): void {
    this.element.classList.remove('match');
    this.element.innerHTML = Card.getTemplate(this.image, this.backImage);
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
