import { BaseComponent } from '../../base-component';
import './player.css';

export class Player extends BaseComponent {
  constructor(
    private name: string,
    private email: string,
    public score: number,
    private image: string,
  ) {
    super('div', ['score-item']);
    this.element.innerHTML = Player.getTemplate(name, email, score, image);
  }

  static getTemplate(
    name: string,
    email: string,
    score: number,
    image: string,
  ): string {
    return `
    <div class="player">
      <div class="player__profile">
        <div class="profile__icon">
          <img src="./assets/images/scores/${image}.png" alt="player avatar">
        </div>
        <div class="profile__info">
          <div class="profile__name">${name}</div>
          <div class="profile__email">${email}</div>
        </div>
      </div>
      <div class="player-score">
        Score:
        <span class="player-score__value">${score}</span>
      </div>
    </div>`;
  }
}
