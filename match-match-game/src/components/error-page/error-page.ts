import { BaseComponent } from '../base-component';
import { Page } from '../page/page';
import './error-page.css';

export const enum ErrorTypes {
  Error_404 = 404,
}

export class ErrorPage extends BaseComponent {
  // private readonly errorType: ErrorTypes | string;

  private readonly page: Page;

  static TextObject: { [prop: string]: string } = {
    '404': 'Error! The page was not found.',
  };

  constructor(id: string) {
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
    this.page = new Page();
    this.element.appendChild(this.page.element);
  }

  getErrorTemplate(errorType: ErrorTypes | string) {
    this.element.innerHTML = `
    <div class="dialog">
      <p class="text">[404]</p>
      <p>${ErrorPage.TextObject[errorType]}</p>
      <a href='#about-page' class='button return-button'>go back</a>
    </div>
    `;
  }
}
