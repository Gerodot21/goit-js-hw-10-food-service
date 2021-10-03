import data from '../menu.json';
import template from '../tempales/photoArray.handlebars';
import refs from '../js/refs';
const { cardList, themeChange } = refs;
let result = template(data);

cardList.insertAdjacentHTML('beforeend', result);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeChange.addEventListener('change', e => {
  if (e.target.checked) {
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', 'dark-theme');
  } else {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.removeItem('theme');
  }
});

let theme = localStorage.getItem('theme');

if (theme) {
  document.body.classList.add(Theme.DARK);
  themeChange.checked = true;
} else {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  themeChange.checked = false;
}
