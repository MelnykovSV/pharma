const infoBody = document.querySelectorAll('.info-js');
console.log(infoBody);

infoBody.forEach((item) =>
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('info-button-show-more-js')) {
      e.target.classList.add('hidden');
      console.log(e.currentTarget.offsetHeight);
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
      e.currentTarget.querySelector('.info-body__text-container').style.height =
        '400px';
      e.currentTarget
        .querySelector('.info-button-show-more-js')
        .classList.remove('hidden');
    }
  })
);
