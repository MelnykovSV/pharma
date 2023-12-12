const optionMenuList = document.querySelectorAll('.dropdown-menu-js');

if (optionMenuList.length) {
  optionMenuList.forEach((optionMenu) => {
    const selectBtn = optionMenu.querySelector('.dropdown-menu-button-js');
    const options = optionMenu.querySelectorAll('.dropdown-menu-option-js');

    document.addEventListener('click', (e) => {
      const isClickInside = optionMenu.contains(e.target);
      if (!isClickInside) {
        optionMenu.classList.remove('active');
      }
    });

    selectBtn.addEventListener('click', () =>
      optionMenu.classList.toggle('active')
    );

    options.forEach((option) => {
      option.addEventListener('click', () => {
        optionMenu.classList.remove('active');
      });
    });
  });
}
