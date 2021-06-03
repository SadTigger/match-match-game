import './steps-row.css';
import { BaseComponent } from '../base-component';

export class StepsRow extends BaseComponent {
  constructor(private text: string, private stepNumber: number) {
    super('div', ['steps_row']);
    this.element.innerHTML = StepsRow.addRowLayout(text, stepNumber);
  }

  static addRowLayout(text: string, stepNumber: number): string {
    return `
    <div class="step">
      <div class="step__image">
        <div class="number">${stepNumber}</div>
      </div>
      <p>${text}</p>
    </div>
    <div class="image">
      <img src="./assets/images/about/${stepNumber}.png" alt="register">
    </div>`;
  }
}
