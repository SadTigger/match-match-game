import { BaseComponent } from '../../base-component';
import './empty-navbar-card.css';

export class EmptyNavbarCard extends BaseComponent {
  constructor() {
    super('li');
    this.element.innerHTML = EmptyNavbarCard.getTemplate();
  }

  static getTemplate(): string {
    return '<div class="empty-navbar-card"></div>';
  }
}
