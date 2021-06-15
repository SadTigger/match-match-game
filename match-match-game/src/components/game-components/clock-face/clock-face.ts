import { BaseComponent } from '../../base-component';
import './clock-face.css';

export class ClockFace extends BaseComponent {
  constructor() {
    super('span', ['clock-face']);
    this.element.innerHTML = ClockFace.getDefaultTimeTemplate();
  }

  static getDefaultTimeTemplate(): string {
    return `00:00`;
  }

  changeTime(time: string): void {
    this.element.innerHTML = time;
  }
}
