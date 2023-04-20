if (document.querySelector('.header')) {

  const menuItems = document.querySelectorAll('.menu__item');
  const headerMenu = document.querySelector('.header__menu');

  function init() {
    placeMenuItems(menuItems);
    displayExpandMenuItems(menuItems);
  }

  window.addEventListener('resize', () => {
    placeMenuItems(menuItems);
  });

  init();

  function displayExpandMenuItems(menuItems) {
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', (e) => {
        e.preventDefault();
        removeCurrentItemClass();
        addItemClass(menuItem);
      });
    });
  }

  function removeCurrentItemClass() {
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove('active');
    });
  }

  function addItemClass(menuItem) {
    menuItem.classList.add('active');
  }

  function getElementRightPosition(element) {
    const rect = element.getBoundingClientRect();
    return rect.right;
  }

  function placeMenuItems(menuItems) {

    menuItems.forEach((menuItem) => {
      const expandMenuItem = menuItem.querySelector('.expand-menu');

      if (getElementRightPosition(expandMenuItem) >
          getElementRightPosition(headerMenu)) {
        menuItem.classList.add('menu__item--right');
        menuItem.classList.remove('menu__item--left');
      } else {
        menuItem.classList.remove('menu__item--right');
        if (menuItem.getAttribute('data-position') === 'left') {
          menuItem.classList.add('menu__item--left');
        }
      }
    });
  }
}
