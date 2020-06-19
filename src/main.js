
import { changeview } from './lib/router.js';
import { online, currentUser } from './lib/firebase.js';

window.location.hash = '#/';

const init = () => {
  changeview(window.location.hash);
  window.addEventListener('hashchange', () => changeview(window.location.hash, currentUser()));
};

window.addEventListener('load', init);

online();
