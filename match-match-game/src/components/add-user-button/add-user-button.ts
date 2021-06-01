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
      const {value: userName} = validInputs[0];
      const {value: userLastName} = validInputs[1];
      const {value: userEmail} = validInputs[2];
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
