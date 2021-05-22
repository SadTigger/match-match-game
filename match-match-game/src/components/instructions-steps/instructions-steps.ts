import './instructions-steps.css';
import { StepsRow } from '../steps-row/steps-row';
import { BaseComponent } from '../base-component';

export class InstructionsSteps extends BaseComponent {
  private rows?: StepsRow[];

  constructor() {
    super('div', ['steps']);
  }

  addRows(rows: StepsRow[]): void {
    this.rows = rows;
    rows.forEach(row => this.element.appendChild(row.element));
  }
}
