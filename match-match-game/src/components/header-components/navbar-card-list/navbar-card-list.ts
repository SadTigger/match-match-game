import './navbar-card-list.css';
import { BaseComponent } from '../../base-component';

export class NavbarCardList extends BaseComponent {
  constructor() {
    super('ul');
  }

  addItems(items: HTMLElement[]): void {
    items.forEach(item => this.element.appendChild(item));
  }
}
