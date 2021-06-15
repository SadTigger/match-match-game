import { AttributesModel } from '../../../models/attributes-model';
import { BaseComponent } from '../../base-component';
import { Avatar } from '../avatar/avatar';

import './registration-form-icon.css';

export class RegistrationFormIcon extends BaseComponent {
  constructor(private option: AttributesModel) {
    super(
      'div',
      ['registration-form__icon'],
      [{ name: option.name, value: option.value }],
    );
  }

  setAvatar(avatar: Avatar): void {
    this.element.appendChild(avatar.element);
  }
}
