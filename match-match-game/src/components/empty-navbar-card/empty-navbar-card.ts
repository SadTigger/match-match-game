import { BaseComponent } from '../base-component';
import './empty-navbar-card.css';

export class EmptyNavbarCard extends BaseComponent {
  constructor() {
    super('li');
    this.element.innerHTML = '<div class="empty-navbar-card"></div>';
  }
}
