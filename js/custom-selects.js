const svgMarkup =
  '<svg class="slim-select__svg" width="20" height="20"><use href="images/icons.svg#icon-angle-down"></use></svg>';

const selects = document.querySelectorAll('.slim-select.js-select');

if (selects.length) {
  selects.forEach((select) => {
    new SlimSelect({
      select: select,
      settings: {
        showSearch: false,
      },
    });

    const selectMain = select.nextSibling;

    selectMain.removeChild(selectMain.lastElementChild);

    selectMain.insertAdjacentHTML('beforeend', svgMarkup);

    //fixes visual bug with border in Safari

    selectMain.focus();
    setTimeout(() => {
      selectMain.blur();
    }, 0);
  });
}
