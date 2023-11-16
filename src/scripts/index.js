import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/detail.css';
import '../styles/comment.css';
import swRegister from './utils/sw-register';
import App from './views/app';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('.nav-bar'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});

document.querySelectorAll('a, button, input').forEach((e) => {
  if (e.offsetWidth < 44 || e.offsetHeight < 44) {
    console.log(e);
  }
});
console.log('TOLONGGGGGG');
