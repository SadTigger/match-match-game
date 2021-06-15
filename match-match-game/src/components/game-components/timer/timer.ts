import './timer.css';
import { BaseComponent } from '../../base-component';
import { ClockFace } from '../clock-face/clock-face';

export class Timer extends BaseComponent {
  constructor() {
    super('div', ['timer']);
  }

  getTemplate(clockFace: ClockFace): void {
    this.element.appendChild(clockFace.element);
  }
}
