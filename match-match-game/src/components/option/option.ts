import { AttributesModel } from '../../models/attributes-model';
import { BaseComponent } from '../base-component';
import './option.css';

export class Option extends BaseComponent {
  constructor(private option: AttributesModel) {
    super(
      'option',
      [],
      [
        { name: 'value', value: option.value },
        { name: 'name', value: option.name },
      ],
    );
    this.element.innerHTML = `${option.value}`;
  }
}
