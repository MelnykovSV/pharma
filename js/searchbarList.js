const searchbarInput = document.querySelector('.searchbar-input');
const searchbarProductsContainer = document.querySelector(
  '.searchbar-products-container'
);

const searchbarProductsContent = document.querySelector('.searchbar-products');

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

  console.log(searchbarProductsContent.clientHeight);
  searchbarProductsContainer.style.height =
    searchbarProductsContent.clientHeight + 'px';
});
