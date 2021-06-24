import accordion from './modules/accordion';
import smoothScrolling from './modules/smoothScrolling';
import burger from './modules/burger';
import Forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
  accordion('.accordion');
  smoothScrolling('.nav__item[data-goto]');
  burger('.burger', '.nav.header__nav', '.nav.footer__nav.burger__nav');
  new Forms('.form').init();

  fixedHeader('.header');
  function fixedHeader(selectorFixed) {
    const selector = document.querySelectorAll(selectorFixed);
    selector.forEach((el) => {
      window.addEventListener('scroll', () => {
        el.classList.toggle('sticky', window.scrollY > 80);
      });
    });
  }

  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
