if (document.querySelector('.header')) {

  const menuItems = document.querySelectorAll('.menu__item');
  const headerMenu = document.querySelector('.header__menu');
  const headerOverlay = document.querySelector('.header__overlay');

  function init() {
    placeMenuItems(menuItems);
    displayExpandMenuItems(menuItems);
    handleOverlayClick();
  }

  window.addEventListener('resize', () => {
    placeMenuItems(menuItems);
  });

  init();

  function displayExpandMenuItems(menuItems) {
    menuItems.forEach((menuItem) => {
      menuItem.querySelector('.menu__name').addEventListener('click', (e) => {
        e.preventDefault();
        toogleMenuItem(menuItem);
      });
    });
  }

  function handleOverlayClick() {
    headerOverlay.addEventListener('click', () => {
      closeMenu();
    });
  }

  function closeMenu() {
    const currentMenuItem = document.querySelector('.menu__item.active');

    if (currentMenuItem) {
      currentMenuItem.classList.remove('active');
      headerOverlay.classList.remove('active');
    }
  }

  function toogleMenuItem(menuItem) {
    const currentMenuItem = document.querySelector('.menu__item.active');

    if (currentMenuItem === menuItem) {
      menuItem.classList.remove('active');
      headerOverlay.classList.remove('active');
    }
    else if (currentMenuItem) {
      currentMenuItem.classList.remove('active');
      menuItem.classList.add('active');
    }
    else {
      menuItem.classList.add('active');
      headerOverlay.classList.add('active');
    }
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
      }
      else {
        menuItem.classList.remove('menu__item--right');
        if (menuItem.getAttribute('data-position') === 'left') {
          menuItem.classList.add('menu__item--left');
        }
      }
    });
  }
}
