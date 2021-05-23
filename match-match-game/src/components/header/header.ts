import './header.css';
import { BaseComponent } from '../base-component';
import { Logo } from '../logo/logo';
import { Navbar } from '../navbar/navbar';

export class Header extends BaseComponent {
  private logo?: Logo;

  private nav?: Navbar;

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
}
