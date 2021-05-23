import { BaseComponent } from '../base-component';
import { Header } from '../header/header';
import { Logo } from '../logo/logo';
import { PageContent } from '../page-content/page-content';
import { PageWrapper } from '../page-wrapper/page-wrapper';
import { Page } from '../page/page';
import { Player } from '../player/player';
// import { ScoreItem } from '../score-item/score-item';
import { ScoreListItems } from '../score-list-items/score-list-items';
import { ScoreListTitle } from '../score-list-title/score-list-title';
import { ScoreList } from '../score-list/score-list';

export class Scores extends BaseComponent {
  private readonly header: Header;

  private readonly logo: Logo;

  private readonly page: Page;

  private readonly pageWrapper: PageWrapper;

  private readonly pageContent: PageContent;

  private readonly scoreList: ScoreList;

  private readonly scoreListTitle: ScoreListTitle;

  private readonly scoreListItems: ScoreListItems;

  // private readonly scoreItem: ScoreItem;

  private readonly firstPlayer: Player;

  private readonly secondPlayer: Player;

  private readonly thirdPlayer: Player;

  private readonly fourthPlayer: Player;

  private readonly firstPlayer1: Player;

  private readonly secondPlayer1: Player;

  private readonly thirdPlayer1: Player;

  private readonly fourthPlayer1: Player;

  private readonly firstPlayer2: Player;

  private readonly secondPlayer2: Player;

  private readonly thirdPlayer2: Player;

  private readonly fourthPlayer2: Player;

  constructor() {
    super();
    this.header = new Header();
    this.logo = new Logo();
    this.page = new Page();
    this.pageWrapper = new PageWrapper();
    this.pageContent = new PageContent();
    this.scoreList = new ScoreList();
    this.scoreListTitle = new ScoreListTitle();
    this.scoreListItems = new ScoreListItems();
    // this.scoreItem = new ScoreItem();
    this.firstPlayer = new Player(
      'Nicci Troiani',
      'nicci@gmail.com',
      456,
      '01',
    );
    this.secondPlayer = new Player(
      'George Fields',
      'jack@gmail.com',
      358,
      '02',
    );
    this.thirdPlayer = new Player(
      'Jones Dermot',
      'dermot@gamil.com',
      211,
      '03',
    );
    this.fourthPlayer = new Player('Jane Doe', 'jane.doe@gmail.com', 169, '04');
    this.firstPlayer1 = new Player(
      'Nicci Troiani',
      'nicci@gmail.com',
      456,
      '01',
    );
    this.secondPlayer1 = new Player(
      'George Fields',
      'jack@gmail.com',
      358,
      '02',
    );
    this.thirdPlayer1 = new Player(
      'Jones Dermot',
      'dermot@gamil.com',
      211,
      '03',
    );
    this.fourthPlayer1 = new Player(
      'Jane Doe',
      'jane.doe@gmail.com',
      169,
      '04',
    );
    this.firstPlayer2 = new Player(
      'Nicci Troiani',
      'nicci@gmail.com',
      456,
      '01',
    );
    this.secondPlayer2 = new Player(
      'George Fields',
      'jack@gmail.com',
      358,
      '02',
    );
    this.thirdPlayer2 = new Player(
      'Jones Dermot',
      'dermot@gamil.com',
      211,
      '03',
    );
    this.fourthPlayer2 = new Player(
      'Jane Doe',
      'jane.doe@gmail.com',
      169,
      '04',
    );
    this.element.appendChild(this.header.element);
    this.header.addLogo(this.logo);
    this.element.appendChild(this.page.element);
    this.page.addToPage(this.pageWrapper.element);
    this.pageWrapper.wrap(this.pageContent);
    this.pageContent.addContent([this.scoreList.element]);
    this.scoreList.addContent([
      this.scoreListTitle.element,
      this.scoreListItems.element,
    ]);
    this.scoreListItems.addItems([
      this.firstPlayer,
      this.secondPlayer,
      this.thirdPlayer,
      this.fourthPlayer,
      this.firstPlayer1,
      this.secondPlayer1,
      this.thirdPlayer1,
      this.fourthPlayer1,
      this.firstPlayer2,
      this.secondPlayer2,
    ]);
  }
}
