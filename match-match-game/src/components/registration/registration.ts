import { RegistrationFormContent } from '../registration-form-content/registration-form-content';
import { RegistrationFormHeader } from '../registration-form-header/registration-form-header';
import { BaseComponent } from '../base-component';
import { RegistrationForm } from '../registration-form/registration-form';
import { RegistrationFormFrames } from '../registration-form-frames/registration-form-frames';
import { RegistrationFormButtons } from '../registration-form-buttons/registration-form-buttons';
import { Frame } from '../frame/frame';
import { RegistrationFormIcon } from '../registration-form-icon/registration-form-icon';
import { Avatar } from '../avatar/avatar';
import { Button } from '../button/button';

export class Registration extends BaseComponent {
  private readonly registrationForm: RegistrationForm;

  private readonly registrationFormHeader: RegistrationFormHeader;

  private readonly registrationFormContent: RegistrationFormContent;

  private readonly registrationFormFrames: RegistrationFormFrames;

  private readonly registrationFormIcon: RegistrationFormIcon;

  private readonly avatar: Avatar;

  private readonly firstNameFrame: Frame;

  private readonly lastNameFrame: Frame;

  private readonly emailFrame: Frame;

  private readonly textPattern: string;

  private readonly emailPattern: string;

  private readonly registrationFormButtons: RegistrationFormButtons;

  private readonly addUserButton: Button;

  private readonly cancelButton: Button;

  constructor() {
    super();
    this.registrationForm = new RegistrationForm([
      { name: 'method', value: 'get' },
      { name: 'id', value: 'reg-form' },
    ]);
    this.registrationFormHeader = new RegistrationFormHeader(
      'Register new Player',
    );
    this.registrationFormContent = new RegistrationFormContent();
    this.registrationFormFrames = new RegistrationFormFrames();
    this.registrationFormIcon = new RegistrationFormIcon({
      name: 'style',
      value: 'background-image: url(../../assets/icons/avatar.svg)',
    });
    this.avatar = new Avatar();
    this.registrationFormIcon.setAvatar(this.avatar);
    this.registrationFormContent.addContent([
      this.registrationFormFrames.element,
      this.registrationFormIcon.element,
    ]);
    this.textPattern = '^[A-ZА-Яa-zа-я]+[0-9A-ZА-Яa-zа-я]*$';
    this.emailPattern =
      '^[a-zA-Z0-9.!#$%&&apos;*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$';
    this.firstNameFrame = new Frame(
      'First Name',
      'text',
      'Jessie',
      this.textPattern,
      'Name should start with letter. May contain letters and numbers.',
    );
    this.lastNameFrame = new Frame(
      'Last Name',
      'text',
      'Doe',
      this.textPattern,
      'Last name should start with letter. May contain letters and numbers.',
    );
    this.emailFrame = new Frame(
      'E-mail',
      'email',
      'Jessie.Doe@gmail.com',
      this.emailPattern,
      // 'Email.',
    );
    this.registrationFormFrames.addFrames([
      this.firstNameFrame,
      this.lastNameFrame,
      this.emailFrame,
    ]);
    this.registrationFormButtons = new RegistrationFormButtons();
    this.addUserButton = new Button('add user', 'add-button', [
      { name: 'type', value: 'submit' },
      { name: 'form', value: 'reg-form' },
      { name: 'value', value: 'submit' },
    ]);
    this.cancelButton = new Button('cancel', 'cancel-button');
    this.registrationFormButtons.addButtons([
      this.addUserButton,
      this.cancelButton,
    ]);
    this.element.appendChild(this.registrationForm.element);
    this.registrationForm.element.appendChild(
      this.registrationFormHeader.element,
    );
    this.registrationForm.element.appendChild(
      this.registrationFormContent.element,
    );
    this.registrationForm.element.appendChild(
      this.registrationFormButtons.element,
    );
  }
}
