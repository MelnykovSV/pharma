

const topPanel = document.querySelector('.top-panel');
const optionMenuList = topPanel.querySelectorAll('.dropdown-menu-js');
const topPanelSearchbar = document.querySelector('.top-panel-searchbar');
const searchbarProductsContainer = document.querySelector(
  '.searchbar-products-container'
);

const input = topPanelSearchbar.querySelector('.top-panel-searchbar__input');

const productsContainer = topPanelSearchbar.querySelector(
  '.top-panel-searchbar__products-container'
);
const clearButton = topPanelSearchbar.querySelector(
  '.top-panel-searchbar__close-button'
);

var options = {
  threshold: 0.01,
};
var callback = function (entries, observer) {
  if (window.scrollY <= 140) {
    topPanel.classList.add('panel-hidden');

    if (optionMenuList.length) {
      optionMenuList.forEach((optionMenu) => {
        optionMenu.classList.remove('active');
      });
    }

    input.value = '';
    productsContainer.style.height = 0;
    clearButton.classList.add('visually-hidden');
    productsContainer.classList.add(
      'top-panel-searchbar__products-container--hidden'
    );
  }
  if (window.scrollY > 140) {
    topPanel.classList.remove('panel-hidden');
    searchbarProductsContainer.classList.add(
      'searchbar-products-container--hidden'
    );
    searchbarProductsContainer.style.height = 0;
  }
};
var observer = new IntersectionObserver(callback, options);

observer.observe(document.querySelector('.header'));
