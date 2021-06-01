import { RegistrationFormContent } from '../registration-form-content/registration-form-content';
import { RegistrationFormHeader } from '../registration-form-header/registration-form-header';
import { BaseComponent } from '../base-component';
import { RegistrationForm } from '../registration-form/registration-form';
import { RegistrationFormFrames } from '../registration-form-frames/registration-form-frames';
import { RegistrationFormButtons } from '../registration-form-buttons/registration-form-buttons';
import { Frame } from '../frame/frame';
import { RegistrationFormIcon } from '../registration-form-icon/registration-form-icon';
import { Avatar } from '../avatar/avatar';
import { CancelButton } from '../cancel-button/cancel-button';
import { PopupModal } from '../popup-modal/popup-modal';
import { AddUserButton } from '../add-user-button/add-user-button';
import { Header } from '../header/header';
import { HeaderButton } from '../header-button/header-button';

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

  private readonly addUserButton: AddUserButton;

  private readonly cancelButton: CancelButton;

  constructor(header: Header, headerButton: HeaderButton, modal: PopupModal) {
    super();
    this.registrationForm = new RegistrationForm([
      { name: 'method', value: 'get' },
      { name: 'action', value: '' },
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
      'first_name',
      'First Name',
      'text',
      'Jessie',
      this.textPattern,
      'Name should start with letter. May contain letters and numbers.',
    );
    this.lastNameFrame = new Frame(
      'last_name',
      'Last Name',
      'text',
      'Doe',
      this.textPattern,
      'Last name should start with letter. May contain letters and numbers.',
    );
    this.emailFrame = new Frame(
      'email',
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
    this.addUserButton = new AddUserButton(header, headerButton, modal, [
      { name: 'type', value: 'submit' },
      { name: 'form', value: 'reg-form' },
      { name: 'value', value: 'submit' },
    ]);
    this.cancelButton = new CancelButton();
    this.registrationFormButtons.addButtons([
      this.addUserButton,
      this.cancelButton,
    ]);
    this.element.appendChild(this.registrationForm.element);
    this.registrationForm.addContent([
      this.registrationFormHeader.element,
      this.registrationFormContent.element,
      this.registrationFormButtons.element,
    ]);
  }
}
