import { BaseComponent } from '../base-component';
import './empty-navbar-card.css';

export class EmptyNavbarCard extends BaseComponent {
  constructor() {
    super('li');
    this.element.innerHTML = EmptyNavbarCard.addCardLayout();
  }

  static addCardLayout(): string {
    return '<div class="empty-navbar-card"></div>';
  }
}
