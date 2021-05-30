import { BaseComponent } from '../base-component';
import { Page } from '../page/page';
import './error-page.css';

export const enum ErrorTypes {
  Error_404 = 404,
}

export class ErrorPage extends BaseComponent {
  private errorType: ErrorTypes | string;

  private readonly page: Page;

  static TextObject: { [prop: string]: string } = {
    '404': 'Error! The page was not found.',
  };

  constructor(id: string, errorType: ErrorTypes | string) {
    super(
      'div',
      [id],
      [
        {
          name: 'style',
          value:
            'width:500px;height:500px; display: flex;justify-content: center;align-items: center;',
        },
      ],
    );
    this.errorType = errorType;
    this.page = new Page();
    this.element.appendChild(this.page.element);
    this.element.innerHTML = `
    <div class="dialog">
      <p class="text">[404]</p>
      <p>${ErrorPage.TextObject[this.errorType]}</p>
      <a href='#about-page' class='button return-button'>go back</a>
    </div>
    `;
  }
}
