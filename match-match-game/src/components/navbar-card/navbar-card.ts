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
    // super('div', ['navbar-card']);
    this.state = state;
    this.name = name;
    this.title = title;
    // {'about':'About Game', 'settings':'Setting', 'scores':'Best Scores'}
    this.linkAddress = linkAddress;
    // {'about':'About page link', 'settings':'Settings page link', 'scores':'Best Scores page link'}
    this.element.innerHTML = `
    <a href=${this.linkAddress}>
     <div class="navbar-card ${this.state}">
      <img src="./assets/icons/${this.name}.svg" alt="${this.name}">
      <span>${this.title}</span>
     </div>
    </a>
    `;
  }

  setActive(): void {
    this.element.classList.add('active');
  }
}
