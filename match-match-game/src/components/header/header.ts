import './header.css';
import { BaseComponent } from '../base-component';
import { Logo } from '../logo/logo';

export class Header extends BaseComponent {
  private logo?: Logo;

  constructor() {
    super('header', ['header']);
  }

  addLogo(logo: Logo): void {
    this.logo = logo;
    this.element.appendChild(this.logo.element);
  }
}
