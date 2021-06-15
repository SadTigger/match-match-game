import { BaseComponent } from '../../base-component';
import './frame.css';

export class Frame extends BaseComponent {
  constructor(
    private name: string,
    private frameTitle: string,
    private type: string,
    private placeholder: string,
    private pattern: string,
    private hint: string = '',
  ) {
    super('div', ['frame']);
    this.element.innerHTML = Frame.getTemplate(
      name,
      frameTitle,
      type,
      placeholder,
      pattern,
      hint,
    );
  }

  static getTemplate(
    name: string,
    frameTitle: string,
    type: string,
    placeholder: string,
    pattern: string,
    hint = '',
  ): string {
    let fullTitle = '';
    if (hint.length !== 0) {
      fullTitle = `title="${hint}"`;
    } else {
      fullTitle = `${hint}`;
    }
    return `
    <div class="frame-content">
      <p class="frame-content_title">${frameTitle}</p>
      <input 
        name="${name}"
        type="${type}"
        placeholder="${placeholder}"
        autocomplete="off"
        pattern=${pattern}
        ${fullTitle}
        maxlength="30"
        required
      >
      <div class="frame_validation">
        <div class="frame_validation__check"></div>
      </div>
    </div>`;
  }
}
