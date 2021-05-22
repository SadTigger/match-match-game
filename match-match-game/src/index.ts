import './styles.css';

import { App } from './app';

window.onload = () => {
  const appElement = document.getElementById('app');
  // const page: string = 'about';
  // page:string = 'game';
  // page:string = 'settings';
  // page:string = 'scores';

  if (!appElement) {
    throw new Error('App root element not found');
  } else {
    const app = new App(appElement);
  }
  // switch (true) {
  //   case page === 'about':
  //     new App(appElement);
  //     break;
  //   case page === 'game':
  //     new App(appElement).start();
  //     break;
  //   case page === 'settings':
  //     new App(appElement);
  //     break;
  //   case page === 'scores':
  //     new App(appElement);
  //     break;
  //   default:
  //     console.log('error');
  // }
  // if (page) {
  //   new App(appElement);
  // } else {
  //   new App(appElement).start();
  // }
};
