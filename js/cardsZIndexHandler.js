const cardsContainers = document.querySelectorAll('.cards-container-js');

cardsContainers.forEach((container) => {
  let zIndex = 400;

  const cards = container.querySelectorAll('.card-js');

  cards.forEach((card) => {
    card.style.zIndex = String(zIndex);

    zIndex -= 1;
  });
});
