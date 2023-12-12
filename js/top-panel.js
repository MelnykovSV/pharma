const topPanel = document.querySelector('.top-panel');
const optionMenuList = topPanel.querySelectorAll('.dropdown-menu-js');
const searchbarContainer = document.querySelector('.top-panel-searchbar');
const input = searchbarContainer.querySelector('.top-panel-searchbar__input');
const productsContainer = searchbarContainer.querySelector(
  '.top-panel-searchbar__products-container'
);
const clearButton = searchbarContainer.querySelector(
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
  }
};
var observer = new IntersectionObserver(callback, options);

observer.observe(document.querySelector('.header'));
