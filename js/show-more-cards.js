const specialOffersCardsBlocks = document.querySelectorAll(
  '.special-offers__cards'
);

function createListItemMarkup(zIndex) {
  const newListItemHTML =
    `<li class="special-offers__cards-item" style="z-index: ${zIndex}">` +
    '<div class="special-offers-card card-js">' +
    '<a href="./product-card.html" class="special-offers-card__product-link">' +
    '<div class="special-offers-card__image-thumb">' +
    '<picture>' +
    '<source srcset="./images/products/card-5.webp 1x, ./images/products/card-5@2x.webp 2x" type="image/webp" />' +
    '<source srcset="./images/products/card-5.jpg 1x, ./images/products/card-5@2x.jpg 2x" type="image/jpeg" />' +
    '<img src="./images/products/card-5.jpg" width="151" height="151" alt="корвалмент" class="special-offers-card__image" />' +
    '</picture>' +
    '</div>' +
    '<h3 class="special-offers-card__title">Корвалмент 0,1 г капсули №80</h3>' +
    '<p class="special-offers-card__producer">Вітамінний завод ПАТ (Україна)</p>' +
    '<p class="special-offers-card__price">206,70 грн</p>' +
    '<p class="special-offers-card__status">В наявності</p>' +
    '</a>' +
    '<div class="special-offers-card__buttons">' +
    '<button class="special-offers-card__like-button" aria-label="додати в обране">' +
    '<svg class="special-offers-card__like-button-icon" width="20" height="20">' +
    '<use href="images/icons.svg#icon-heart"></use>' +
    '</svg>' +
    '</button>' +
    '<button type="button" class="special-offers-card__cart-button">' +
    '<svg class="special-offers-card__cart-button-icon" width="20" height="20">' +
    '<use href="images/icons.svg#icon-bag"></use>' +
    '</svg>' +
    'до кошика' +
    '</button>' +
    '</div>' +
    '</div>' +
    '</li>';

  return newListItemHTML;
}

specialOffersCardsBlocks.forEach((block) => {
  const button = block.querySelector('.special-offers__more-button');
  const list = block.querySelector('.special-offers__cards-list');

  button.addEventListener('click', () => {
    const lastElementZIndex = list.lastElementChild.style.zIndex;
    list.insertAdjacentHTML(
      'beforeend',
      createListItemMarkup(lastElementZIndex - 1) +
        createListItemMarkup(lastElementZIndex - 2)
    );
  });
});
