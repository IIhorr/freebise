const smoothScrolling = (selector) => {
  const menuLinks = document.querySelectorAll(selector);
  if (menuLinks.length > 0) {
    menuLinks.forEach((el) => {
      el.addEventListener('click', menuLinkClick);
    });

    function menuLinkClick(e) {
      const self = e.target;
      const gotoElement = document.querySelector(self.dataset.goto);
      if (self.dataset.goto && gotoElement) {
        const gotoBlockValue =
          gotoElement.getBoundingClientRect().top +
          pageYOffset -
          document.querySelector('header').offsetHeight;

        window.scrollTo({
          top: gotoBlockValue,
          behavior: 'smooth',
        });

        e.preventDefault();
      }
    }
  }
};

export default smoothScrolling;
