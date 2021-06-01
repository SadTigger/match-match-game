import './header.css';
import { BaseComponent } from '../base-component';
import { Logo } from '../logo/logo';
import { Navbar } from '../navbar/navbar';
import { HeaderButton } from '../header-button/header-button';
import { StartGameLink } from '../start-game-link/start-game-link';

export class Header extends BaseComponent {
  private logo?: Logo;

  private nav?: Navbar;

  private headerButton?: HeaderButton | StartGameLink;

  constructor() {
    super('header', ['header']);
  }

  addLogo(logo: Logo): void {
    this.logo = logo;
    this.element.appendChild(this.logo.element);
  }

  addNavigation(nav: Navbar): void {
    this.nav = nav;
    this.element.appendChild(this.nav.element);
  }

  addButton(button: HeaderButton | StartGameLink): void {
    this.headerButton = button;
    this.element.appendChild(this.headerButton.element);
  }

  removeButton(button: HeaderButton): void {
    this.headerButton = button;
    this.element.removeChild(this.headerButton.element);
  }
}
