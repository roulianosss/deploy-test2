const header = document.querySelector('.header');

if (header) {

  const menuItems = document.querySelectorAll('.menu__item');
  const headerMenu = document.querySelector('.header__menu');
  const headerOverlay = document.querySelector('.header__overlay');

  function init() {
    positionMenuItems(menuItems);
    displayExpandMenuItems(menuItems);
    handleOverlayClick();
  }

  window.addEventListener('resize', () => {
    console.log('resizz');
    positionMenuItems(menuItems);
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

  function getElementLeftPosition(element) {
    const eleRect = element.getBoundingClientRect();
    const targetRect = header.getBoundingClientRect();
    return eleRect.left - targetRect.left;
  }

  function getElementRightPosition(element) {
    const eleRect = element.getBoundingClientRect();
    const targetRect = header.getBoundingClientRect();
    return eleRect.right - targetRect.left;
  }

  function positionMenuItems(menuItems) {
    const headerPadding = parseInt(window.getComputedStyle(header).getPropertyValue('padding-left'), 10);
    const headerMenuPadding = parseInt(window.getComputedStyle(headerMenu).getPropertyValue('padding-left'), 10);

    menuItems.forEach((menuItem) => {
      const expandMenuItem = menuItem.querySelector('.expand-menu');

      if (menuItem.classList.contains('menu__item--full')) {
        const expandLeftPosition = getElementLeftPosition(menuItem);
        expandMenuItem.style.left = `${headerPadding + headerMenuPadding - expandLeftPosition}px`;
      }
      else if ((header.offsetWidth - getElementRightPosition(expandMenuItem)) < headerPadding) {
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
