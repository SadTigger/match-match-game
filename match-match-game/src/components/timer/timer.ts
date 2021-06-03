// <div class="timer">
//   <div class="clock-face">
//     <span class="minutes">${minutes}</span>:<span class="seconds">${seconds}</span>
//   </div>
// </div>

import './timer.css';
import { BaseComponent } from '../base-component';

export class Timer extends BaseComponent {
  private minutes: string;

  private seconds: string;

  constructor() {
    super('div', ['timer']);
    this.minutes = '00';
    this.seconds = '01';
    this.element.innerHTML = Timer.addClockFace(this.minutes, this.seconds);
  }

  static addClockFace(minutes: string, seconds: string): string {
    return `<div class="clock-face">
      <span class="minutes">${minutes}</span>:<span class="seconds">${seconds}</span>
    </div>`;
  }
}
