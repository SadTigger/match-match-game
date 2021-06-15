import { BaseComponent } from '../../components/base-component';
import { Page } from '../../components/page-components/page/page';
import './error-page.css';

export const enum ErrorTypes {
  Error_404 = 404,
}

export class ErrorPage extends BaseComponent {
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
    this.element.innerHTML = ErrorPage.getTemplate(ErrorTypes.Error_404);
  }

  static getTemplate(errorType: ErrorTypes | string): string {
    return `
    <div class="dialog">
      <p class="text">[404]</p>
      <p>${ErrorPage.TextObject[errorType]}</p>
      <a href='#about-page' class='button return-button'>go back</a>
    </div>`;
  }
}
