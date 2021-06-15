import { BaseComponent } from '../../base-component';
import './popup-modal.css';

export class PopupModal extends BaseComponent {
  constructor() {
    super('div', ['popup-modal'], [{ name: 'id', value: 'popup-modal' }]);
  }

  addModalContent(content: HTMLElement): void {
    this.element.appendChild(content);
  }
}
