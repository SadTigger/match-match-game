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
    this.state = state;
    this.name = name;
    this.title = title;
    this.linkAddress = linkAddress;
    this.element.innerHTML = `
    <a href=${this.linkAddress}>
     <div class="navbar-card ${this.state}">
      <span class="card-icon" style="background-image: url('./assets/icons/${this.name}.svg')"></span>
      <span>${this.title}</span>
     </div>
    </a>
    `;
  }

  setActive(): void {
    this.element.classList.add('active');
  }
}
