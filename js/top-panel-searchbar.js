const searchbarContainer = document.querySelector('.top-panel-searchbar');
const input = searchbarContainer.querySelector('.top-panel-searchbar__input');
const productsContainer = searchbarContainer.querySelector(
  '.top-panel-searchbar__products-container'
);
const searchbarProductsContent = searchbarContainer.querySelector(
  '.searchbar-products'
);
const clearButton = searchbarContainer.querySelector(
  '.top-panel-searchbar__close-button'
);

clearButton.addEventListener('click', () => {
  input.value = '';
  productsContainer.style.height = 0;
  clearButton.classList.add('visually-hidden');
  productsContainer.classList.add(
    'top-panel-searchbar__products-container--hidden'
  );
});

input.addEventListener('input', (e) => {
  console.log(e.target.value);
  if (e.target.value) {
    productsContainer.classList.remove(
      'top-panel-searchbar__products-container--hidden'
    );
    productsContainer.style.height =
      searchbarProductsContent.clientHeight + 'px';
    clearButton.classList.remove('visually-hidden');
  } else {
    productsContainer.classList.add(
      'top-panel-searchbar__products-container--hidden'
    );
    productsContainer.style.height = 0;
    clearButton.classList.add('visually-hidden');
  }
});

document.addEventListener('click', (e) => {
  const isClickInside = searchbarContainer.contains(e.target);

  if (!isClickInside) {
    productsContainer.classList.add(
      'top-panel-searchbar__products-container--hidden'
    );
    productsContainer.style.height = 0;
  }
});
