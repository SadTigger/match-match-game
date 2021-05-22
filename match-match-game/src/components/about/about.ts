import { AboutInstructions } from '../about-instructions/about-instructions';
import { AboutTitle } from '../about-title/about-title';
import { BaseComponent } from '../base-component';
import { Header } from '../header/header';
import { InstructionsSteps } from '../instructions-steps/instructions-steps';
import { Logo } from '../logo/logo';
import { PageContent } from '../page-content/page-content';
import { PageWrapper } from '../page-wrapper/page-wrapper';
import { Page } from '../page/page';
import { StepsRow } from '../steps-row/steps-row';

export class About extends BaseComponent {
  private readonly header: Header;

  private readonly logo: Logo;

  private readonly page: Page;

  private readonly pageWrapper: PageWrapper;

  private readonly pageContent: PageContent;

  private readonly aboutTitle: AboutTitle;

  private readonly aboutInstructions: AboutInstructions;

  private readonly instructionsSteps: InstructionsSteps;

  private readonly firstStep: StepsRow;

  private readonly secondStep: StepsRow;

  private readonly thirdStep: StepsRow;

  constructor() {
    super();
    this.header = new Header();
    this.logo = new Logo();
    this.page = new Page();
    this.pageWrapper = new PageWrapper();
    this.pageContent = new PageContent();
    this.aboutTitle = new AboutTitle();
    this.aboutInstructions = new AboutInstructions();
    this.instructionsSteps = new InstructionsSteps();
    this.firstStep = new StepsRow('Register new player in game', 1);
    this.secondStep = new StepsRow('Configure your game settings', 2);
    this.thirdStep = new StepsRow(
      'Start you new game! Remember card positions and match it before times up.',
      3,
    );
    this.element.appendChild(this.header.element);
    this.header.addLogo(this.logo);
    this.element.appendChild(this.page.element);
    this.page.addToPage(this.pageWrapper);
    this.pageWrapper.wrap(this.pageContent);
    this.pageContent.addContent([
      this.aboutTitle.element,
      this.aboutInstructions.element,
    ]);
    this.aboutInstructions.element.appendChild(this.instructionsSteps.element);
    this.instructionsSteps.addRows([
      this.firstStep,
      this.secondStep,
      this.thirdStep,
    ]);
  }
}