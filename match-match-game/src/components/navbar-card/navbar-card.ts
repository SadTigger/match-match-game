import { BaseComponent } from '../base-component';
import './navbar-card.css';

export class NavBarCard extends BaseComponent {
  constructor(
    readonly state: string = '',
    readonly name: string,
    readonly title: string,
    readonly linkAddress: string,
  ) {
    super('li', []);
    this.element.innerHTML = NavBarCard.setCardContent(
      state,
      name,
      title,
      linkAddress,
    );
  }

  static setCardContent(
    state = '',
    name: string,
    title: string,
    linkAddress: string,
  ): string {
    return `
    <a href=${linkAddress}>
      <div class="navbar-card ${state}">
      <span class="card-icon" style="background-image: url(./assets/icons/${name}.svg)"></span>
      <span>${title}</span>
      </div>
    </a>`;
  }

  setActive(): void {
    this.element.classList.add('active');
  }
}
