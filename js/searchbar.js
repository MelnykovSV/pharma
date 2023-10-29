const button = document.querySelector('.searchbar-button');
const searchbarContainer = document.querySelector('.searchbar-container');
const searchbarListItem = document.querySelector('.searchbar-list-item');
const searchbarInput = document.querySelector('.searchbar-input');
const searchbarProductsContainer = document.querySelector(
  '.searchbar-products-container'
);
const closeButton = document.querySelector('.searchbar-close-button');
const searchbarProductsContent = document.querySelector('.searchbar-products');

function searchBarOpenHandler() {
  searchbarContainer.classList.add('searchbar-expanded');
  searchbarListItem.classList.add('searchbar-expanded');
  closeButton.setAttribute('tabIndex', '0');
  searchbarInput.setAttribute('tabIndex', '0');
  searchbarContainer.style.zIndex = 1000;
}

function searchBarCloseHandler() {
  searchbarContainer.classList.remove('searchbar-expanded');
  searchbarListItem.classList.remove('searchbar-expanded');
  closeButton.setAttribute('tabIndex', '-1');
  searchbarInput.setAttribute('tabIndex', '-1');
  searchbarInput.value = '';
  searchbarProductsContainer.style.height = 0;
  searchbarProductsContainer.classList.add(
    'searchbar-products-container--hidden'
  );

  setTimeout(() => {
    searchbarContainer.style.zIndex = 0;
  }, 300);
}

document.addEventListener('click', (e) => {
  const isClickInside = searchbarContainer.contains(e.target);

  if (!isClickInside) {
    searchbarProductsContainer.classList.add(
      'searchbar-products-container--hidden'
    );
    searchbarProductsContainer.style.height = 0;
  }
});

button.addEventListener('click', searchBarOpenHandler);

closeButton.addEventListener('click', searchBarCloseHandler);

searchbarInput.addEventListener('input', (e) => {
  if (!e.target.value) {
    searchbarProductsContainer.classList.add(
      'searchbar-products-container--hidden'
    );
    searchbarProductsContainer.style.height = 0;
    return;
  }

  searchbarProductsContainer.classList.remove(
    'searchbar-products-container--hidden'
  );

  searchbarProductsContainer.style.height =
    searchbarProductsContent.clientHeight + 'px';
});

searchbarInput.addEventListener('focus', (e) => {
  if (!e.target.value) {
    searchbarProductsContainer.classList.add(
      'searchbar-products-container--hidden'
    );
    searchbarProductsContainer.style.height = 0;
    return;
  }

  searchbarProductsContainer.classList.remove(
    'searchbar-products-container--hidden'
  );

  searchbarProductsContainer.style.height =
    searchbarProductsContent.clientHeight + 'px';
});
