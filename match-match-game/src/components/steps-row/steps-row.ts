import './steps-row.css';
import { BaseComponent } from '../base-component';

export class StepsRow extends BaseComponent {
  constructor(private text: string, private stepNumber: number) {
    super('div', ['steps_row']);
    this.element.innerHTML = `
      <div class="step">
        <div class="step__image">
          <div class="number">${stepNumber}</div>
        </div>
        <span>${text}</span>
      </div>
      <div class="image">
        <img src="./assets/images/about/${stepNumber}.png" alt="register">
      </div>
    `;
  }
}
