import './game-timer-container.css';
import { BaseComponent } from '../../base-component';
import { Timer } from '../timer/timer';

export class GameTimerContainer extends BaseComponent {
  private timer?: Timer;

  constructor() {
    super('div', ['game-timer__container']);
  }

  addTimer(timer: Timer): void {
    this.timer = timer;
    this.element.appendChild(this.timer.element);
  }
}
