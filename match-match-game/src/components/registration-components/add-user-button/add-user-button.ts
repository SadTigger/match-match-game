import { AttributesModel } from '../../../models/attributes-model';
import { Button } from '../../button/button';
import { HeaderButton } from '../../header-components/header-button/header-button';
import { Header } from '../../header-components/header/header';
import { PopupModal } from '../../page-components/popup-modal/popup-modal';
import { StartGameLink } from '../../header-components/start-game-link/start-game-link';
import './add-user-button.css';

export class AddUserButton extends Button {
  private readonly startGameLink: StartGameLink;

  constructor(
    header: Header,
    headerButton: HeaderButton,
    modal: PopupModal,
    options: AttributesModel[],
  ) {
    super('add user', 'add-user-button', [...options]);
    this.startGameLink = new StartGameLink();
    this.element.addEventListener('click', async () => {
      const validInputs: NodeListOf<HTMLInputElement> =
        document.querySelectorAll('input:valid');
      if (validInputs.length !== 3) return;
      const { value: userName } = validInputs[0];
      const { value: userLastName } = validInputs[1];
      const { value: userEmail } = validInputs[2];
      modal.element.style.display = 'none';
      for (let index = 0; index < validInputs.length; index++) {
        validInputs[index].value = '';
      }
      header.removeButton(headerButton);
      header.addButton(this.startGameLink);
      // console.log('Name', userName);
      // console.log('LastName', userLastName);
      // console.log('Email', userEmail);
    });
  }
}
