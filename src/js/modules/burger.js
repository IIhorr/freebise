const burger = (burgerSelector, menuSelector, burgerMenu) => {
  const burgerIcon = document.querySelector(burgerSelector),
    menu = document.querySelector(menuSelector),
    burgerMenus = document.querySelector(burgerMenu);

  // show burger > 1000 width

  const hideElement = (selector) => {
    selector.classList.add('visually-hidden');
    selector.setAttribute('aria-hidden', 'true');
  };

  const showElement = (selector) => {
    selector.classList.remove('visually-hidden');
    selector.setAttribute('aria-hidden', 'false');
  };

  hideElement(burgerIcon);
  hideElement(menu);

  const checkedWidthElement = () => {
    if (window.screen.availWidth < 840) {
      showElement(burgerIcon);
      hideElement(menu);
    } else {
      hideElement(burgerIcon);
      showElement(menu);
    }
  };

  checkedWidthElement();

  window.addEventListener('resize', () => {
    checkedWidthElement();
  });

  burgerIcon.addEventListener('click', () => {
    console.log('click');
    burgerIcon.classList.toggle('open');

    if (burgerIcon.classList.contains('open')) {
      burgerMenus.classList.add('open');
    } else {
      burgerMenus.classList.remove('open');
    }
  });
};

export default burger;
