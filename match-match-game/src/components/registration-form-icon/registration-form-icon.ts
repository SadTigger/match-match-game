import { AttributesModel } from '../../models/attributes-model';
import { Avatar } from '../avatar/avatar';
import { BaseComponent } from '../base-component';
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
