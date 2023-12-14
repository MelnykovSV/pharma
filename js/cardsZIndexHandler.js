const cardsContainer = document.querySelector('.cards-container-js');
let zIndex = 400;

const cards = cardsContainer.querySelectorAll('.card-js');

cards.forEach((card) => {
  card.style.zIndex = String(zIndex);

  zIndex -= 1;
});
