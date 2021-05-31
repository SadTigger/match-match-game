import { AttributesModel } from '../../models/attributes-model';
import { Button } from '../button/button';
import { PopupModal } from '../popup-modal/popup-modal';
import './add-user-button.css';

export class AddUserButton extends Button {
  constructor(modal: PopupModal, options: AttributesModel[]) {
    super('add user', 'add-user-button', [...options]);
    this.element.addEventListener('click', async () => {
      const validInputs: NodeListOf<HTMLInputElement> =
        document.querySelectorAll('input:valid');
      if (validInputs.length !== 3) return;
      const userName = validInputs[0].value;
      const userLastName = validInputs[1].value;
      const userEmail = validInputs[2].value;
      modal.element.style.display = 'none';
      for (let index = 0; index < validInputs.length; index++) {
        validInputs[index].value = '';
      }
      // console.log('Name', userName);
      // console.log('LastName', userLastName);
      // console.log('Email', userEmail);
    });
  }
}
