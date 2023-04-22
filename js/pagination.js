$('#light-pagination').pagination({
  // Total number of items that will be used to calculate the pages.

  items: 1180,

  // Number of items displayed on each page.

  itemsOnPage: 12,

  // If specified, items and itemsOnPage will not be used to calculate the number of pages.
  //   pages: 99,

  // How many page numbers should be visible while navigating. Minimum allowed: 3 (previous, current & next)
  displayedPages: 5,

  // How many page numbers are visible at the beginning/ending of the pagination.
  edges: 1,

  // Enables start/end edge
  useStartEdge: true,
  useEndEdge: true,

  // Which page will be selected immediately after init.
  currentPage: 1,

  // Uses anchor links or spans
  useAnchors: true,

  // A string used to build the href attribute, added before the page number.
  hrefTextPrefix: '#page-',

  // Another string used to build the href attribute, added after the page number.
  hrefTextSuffix: '',

  // Text to be display on the previous button.
  prevText:
    '<svg class="catalog__paginator-arrow" width="20" height="20"><use href="images/icons.svg#icon-angle-left"></use></svg>',

  // Text to be display on the next button.
  nextText:
    '<svg class="catalog__paginator-arrow" width="20" height="20"><use href="images/icons.svg#icon-angle-right"></use></svg>',

  // Ellipse Character
  ellipseText: '&hellip;',
  ellipsePageSet: false,

  // list style
  listStyle: '',

  // The class of the CSS theme:
  // "light-theme", "compact-theme", and "dark-theme"
  //   cssStyle: 'light-theme',

  // Set to false if you don't want to select the page immediately after click.
  selectOnClick: true,

  // Next button at front.
  nextAtFront: false,

  // Inverts page order
  invertPageOrder: false,
});
