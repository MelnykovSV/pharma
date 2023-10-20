const button = document.querySelector('.searchbar-button');
const mainMenu = document.querySelector('.header__main-menu');
const searchbarContainer = document.querySelector('.searchbar-container');
const searchbarListItem = document.querySelector('.searchbar-list-item');

function buttonClickHandler() {
  mainMenu.classList.add('searchbar-expanded');
  button.classList.add('searchbar-expanded');
  searchbarContainer.classList.add('searchbar-expanded');
  searchbarListItem.classList.add('searchbar-expanded');
}

button.addEventListener('click', buttonClickHandler);
