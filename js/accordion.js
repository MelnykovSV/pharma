function accordion() {
  const accordions = document.querySelectorAll('.dropdownlink');

  if (accordions.length) {
    accordions.forEach((accordion) => {
      if (
        !accordion.nextElementSibling.style.height ||
        accordion.nextElementSibling.style.height === '0px'
      ) {
        accordion.nextElementSibling.style.height =
          Array.prototype.reduce.call(
            accordion.nextElementSibling.childNodes,
            function (p, c) {
              // console.log(accordion.nextElementSibling.childNodes);
              return p + (c.offsetHeight || 0);
            },
            0
          ) + 'px';

        //   console.log(accordion.nextElementSibling.style.height);
      }
      accordion.addEventListener('click', (e) => {
        if (e.target.classList.contains('dropdownlink')) {
          e.target.parentNode.classList.toggle('open');

          e.target.nextElementSibling.classList.toggle('accordion-closed');
        }
      });
    });
  }
}

accordion();
