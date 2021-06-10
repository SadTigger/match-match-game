import { BaseComponent } from '../base-component';

export class CardMask extends BaseComponent {
  constructor() {
    super('div', ['card-mask']);
    this.element.innerHTML = CardMask.getTemplate();
  }

  static getTemplate(): string {
    return `
    <div class="mask">
      <div class="icon-container">
        <div class="mask-icon"></div>
      </div>
    </div>`;
  }
}
