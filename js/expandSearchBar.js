const button = document.querySelector('.searchbar-button');
const searchbarContainer = document.querySelector('.searchbar-container');
const searchbarListItem = document.querySelector('.searchbar-list-item');
const searchbarInput = document.querySelector('.searchbar-input');

const closeButton = document.querySelector('.searchbar-close-button');

function searchBarOpenHandler() {
  searchbarContainer.classList.add('searchbar-expanded');
  searchbarListItem.classList.add('searchbar-expanded');
  closeButton.setAttribute('tabIndex', '0');
  searchbarInput.setAttribute('tabIndex', '0');

  searchbarContainer.style.zIndex = 5;
}

function searchBarCloseHandler() {
  searchbarContainer.classList.remove('searchbar-expanded');
  searchbarListItem.classList.remove('searchbar-expanded');
  closeButton.setAttribute('tabIndex', '-1');
  searchbarInput.setAttribute('tabIndex', '-1');

  setTimeout(() => {
    searchbarContainer.style.zIndex = 0;
  }, 300);
}

button.addEventListener('click', searchBarOpenHandler);

closeButton.addEventListener('click', searchBarCloseHandler);
