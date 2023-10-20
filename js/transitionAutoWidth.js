const elements = document.querySelectorAll('.js-transition-width');

elements.forEach((element) => {
  element.style.width = `${element.offsetWidth}px`;
});
