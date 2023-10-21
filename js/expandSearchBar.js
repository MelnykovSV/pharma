const button = document.querySelector('.searchbar-button');
const searchbarContainer = document.querySelector('.searchbar-container');
const searchbarListItem = document.querySelector('.searchbar-list-item');

const closeButton = document.querySelector('.searchbar-close-button');

function searchBarOpenHandler() {
  searchbarContainer.classList.add('searchbar-expanded');
  searchbarListItem.classList.add('searchbar-expanded');

  searchbarContainer.style.zIndex = 5;
}

function searchBarCloseHandler() {
  searchbarContainer.classList.remove('searchbar-expanded');
  searchbarListItem.classList.remove('searchbar-expanded');

  setTimeout(() => {
    searchbarContainer.style.zIndex = 0;
  }, 300);
}

button.addEventListener('click', searchBarOpenHandler);

closeButton.addEventListener('click', searchBarCloseHandler);
