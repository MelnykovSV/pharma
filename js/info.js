const infoBody = document.querySelectorAll('.info-js');

document
  .querySelectorAll('.info-body__text-container')
  .forEach((item) => (item.style.height = '300px'));

infoBody.forEach((item) =>
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('info-button-show-more-js')) {
      e.target.classList.add('hidden');
      e.target.parentNode.classList.remove('show-gradient');
      e.currentTarget.querySelector(
        '.info-body__text-container'
      ).style.height = `${
        e.currentTarget.querySelector('.info-body__text').offsetHeight
      }px`;

      e.currentTarget
        .querySelector('.info-button-show-less-js')
        .classList.remove('hidden');
    }
    if (e.target.classList.contains('info-button-show-less-js')) {
      e.target.classList.add('hidden');
      e.target.parentNode.classList.add('show-gradient');
      e.currentTarget.querySelector('.info-body__text-container').style.height =
        '300px';
      e.currentTarget
        .querySelector('.info-button-show-more-js')
        .classList.remove('hidden');
    }
  })
);
