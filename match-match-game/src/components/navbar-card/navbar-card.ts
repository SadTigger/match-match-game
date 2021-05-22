import { BaseComponent } from '../base-component';
import './navbar-card.css';

export class NavBarCard extends BaseComponent {
  private readonly title: string;

  private readonly linkAddress: string;

  constructor(readonly name: string) {
    super();
    this.name = name;
    this.title = name;
    // {'about':'About Game', 'settings':'Setting', 'scores':'Best Scores'}
    this.linkAddress = name;
    // {'about':'About page link', 'settings':'Settings page link', 'scores':'Best Scores page link'}
    this.element.innerHTML = `
    <img src="./assets/icons/${name}.svg" alt="${name}">
    <span>${this.title}</span>`;
  }

  setActive(): void {
    this.element.classList.add('active');
  }
}
