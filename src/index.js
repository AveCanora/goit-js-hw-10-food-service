import './styles.css';
import menuGallery from './menu.json';
import itemMenu from './templates/menu.hbs';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  galleryMenu: document.querySelector('.js-menu'),
  themeSwitch: document.querySelector('#theme-switch-toggle'),
};

const markup = itemMenu(menuGallery);
refs.galleryMenu.insertAdjacentHTML('beforeend', markup);
if (localStorage.getItem('theme') === 'dark-theme') {
  refs.themeSwitch.checked = true;
}
if (localStorage.getItem('theme') != undefined) {
  addClass(localStorage.getItem('theme'));
}

refs.themeSwitch.addEventListener('change', themeswitchClick);

function themeswitchClick(evt) {
  const positionSwith = evt.target;
  if (positionSwith.checked === true) {
    localStorage.setItem('theme', Theme.DARK); //темная тема
  } else {
    localStorage.setItem('theme', Theme.LIGHT); //светлая тема
  }
  addClass(localStorage.getItem('theme'));
}
//добавление классов "light-theme" или "dark-theme"
function addClass(nameTheme) {
  document.body.className = nameTheme;
}
