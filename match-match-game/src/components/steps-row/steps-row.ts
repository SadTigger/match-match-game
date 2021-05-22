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
        <img src="../../assets/images/about/${stepNumber}.png" alt="register">
      </div>
    `;

    // <div class="steps_row">
    //   <div class="step second-step">
    //     <div class="step__image">
    //       <div class="number">2</div>
    //     </div>
    //     <span>Configure your game settings</span>
    //   </div>
    //   <div class="image">
    //     <img src="../../assets/images/about/2.png" alt="button">
    //   </div>
    // </div>
    // <div class="steps_row">
    //   <div class="step third-step">
    //     <div class="step__image">
    //       <div class="number">3</div>
    //     </div>
    //     <span>Start you new game! Remember card positions and match it before times up.</span>
    //   </div>
    //   <div class="image">
    //     <img src="../../assets/images/about/3.png" alt="game">
    //   </div>
    // </div>
  }
}
