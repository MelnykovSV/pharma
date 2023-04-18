const pageTabs = document.querySelectorAll('.tabs');
if (pageTabs.length) {
  pageTabs.forEach((tab) => {
    tab.addEventListener('click', handleTabClick);
  });
}

function handleTabClick(e) {
  e.preventDefault();

  e.stopPropagation();

  if (
    e.target.classList.contains('tabs-bar__link') &&
    !e.target.classList.contains('current')
  ) {
    console.log('clicked on tab');

    const tabs = e.currentTarget.querySelectorAll(
      ':scope >.tabs-bar>.tabs-bar__list>.tabs-bar__list-item>.tabs-bar__link'
    );
    const pages = e.currentTarget.querySelectorAll(
      ':scope >.tabs-content > .tab-body'
    );
    tabs.forEach((item) => {
      item.classList.remove('current');
    });
    e.target.classList.add('current');

    const page = [...pages].find((node) => {
      console.log(e.target.dataset.tabId);
      console.log(node.dataset.tabId);
      return node.dataset.tabId === e.target.dataset.tabId;
    });

    pages.forEach((item) => {
      item.classList.add('visually-hidden');
    });
    page.classList.remove('visually-hidden');
  }
}
