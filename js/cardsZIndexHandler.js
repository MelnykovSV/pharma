const cardsContainer = document.querySelector('.cards-container');
let zIndex = 400;

const cards = cardsContainer.querySelectorAll('.product-card');

cards.forEach((card) => {
  card.style.zIndex = String(zIndex);

  zIndex -= 1;
});
