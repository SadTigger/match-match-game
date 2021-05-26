import { BaseComponent } from '../base-component';
import './frame.css';

export class Frame extends BaseComponent {
  constructor(
    private frameTitle: string,
    private type: string,
    private placeholder: string,
    private pattern: string,
    private hint: string = '',
  ) {
    super('div', ['frame']);
    if (hint.length !== 0) {
      this.element.innerHTML = `
        <div class="frame-content">
          <p class="frame-content_title">${frameTitle}</p>
          <input 
            type="${type}"
            placeholder="${placeholder}"
            autocomplete="off"
            pattern=${pattern}
            title="${hint}"
            maxlength="30"
            required
          >
          <div class="frame_validation">
            <div class="frame_validation__check"></div>
          </div>
        </div>
      `;
    } else {
      this.element.innerHTML = `
        <div class="frame-content">
          <p class="frame-content_title">${frameTitle}</p>
          <input 
            type="${type}"
            placeholder="${placeholder}"
            autocomplete="off"
            pattern=${pattern}
            maxlength="30"
            required
          >
          <div class="frame_validation">
            <div class="frame_validation__check"></div>
          </div>
        </div>
      `;
    }
  }
}
