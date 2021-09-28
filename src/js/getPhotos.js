import data from '../menu.json';
import template from '../tempales/photoArray.handlebars';
import refs from '../js/refs';
const { cardList, themeChange } = refs;
let result = template(data);
// console.log(result);
// console.log(cardList);
cardList.insertAdjacentHTML('beforeend', result);

// console.log(themeChange.checked);

themeChange.addEventListener('change', e => {
  if (e.target.checked) {
    document.querySelector('body').classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    document.querySelector('body').classList.remove('dark-theme');
    localStorage.removeItem('theme');
  }
});

let theme = localStorage.getItem('theme');
// console.log(theme);

if (theme) {
  document.querySelector('body').classList.add('dark-theme');
  themeChange.checked = true;
} else {
  document.querySelector('body').classList.remove('dark-theme');
  themeChange.checked = false;
}
