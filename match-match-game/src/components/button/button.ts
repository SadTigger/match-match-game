import { AttributesModel } from '../../models/attributes-model';
import { BaseComponent } from '../base-component';
import './button.css';

export class Button extends BaseComponent {
  constructor(
    private text: string,
    private className: string,
    private options: AttributesModel[] = [],
  ) {
    super('button', ['button', `${className}`], [...options]);
    this.element.innerHTML = `${text}`;
  }
}
