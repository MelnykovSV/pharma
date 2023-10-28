const button = document.querySelector('.searchbar-button');
const searchbarContainer = document.querySelector('.searchbar-container');
const searchbarListItem = document.querySelector('.searchbar-list-item');
const searchbarInput = document.querySelector('.searchbar-input');
const searchbarListContainer = document.querySelector(
  '.searchbar-products-container'
);

const closeButton = document.querySelector('.searchbar-close-button');

function searchBarOpenHandler() {
  searchbarContainer.classList.add('searchbar-expanded');
  searchbarListItem.classList.add('searchbar-expanded');
  closeButton.setAttribute('tabIndex', '0');
  searchbarInput.setAttribute('tabIndex', '0');
  searchbarListContainer.classList.remove('hidden');

  searchbarContainer.style.zIndex = 1000;
}

function searchBarCloseHandler() {
  searchbarContainer.classList.remove('searchbar-expanded');
  searchbarListItem.classList.remove('searchbar-expanded');
  closeButton.setAttribute('tabIndex', '-1');
  searchbarInput.setAttribute('tabIndex', '-1');
  searchbarListContainer.classList.add('hidden');

  setTimeout(() => {
    searchbarContainer.style.zIndex = 0;
  }, 300);
}

button.addEventListener('click', searchBarOpenHandler);

closeButton.addEventListener('click', searchBarCloseHandler);
