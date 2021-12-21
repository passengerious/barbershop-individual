import throttle from 'lodash.throttle';
import './scss/main.scss';
import {
  onBurgerClick,
  onBackdropClick,
  onModalNavClick,
  onModalOnlineClick,
} from './js/burger-menu.js';
import { hideElOnScroll, toPageTopOnClick } from './js/up-btn.js';
import { onImageLoad } from './js/image-load.js';
import { onSideSliderNavClick, onSliderBtnClick } from './js/slider.js';

// ссылки на узлы

const refs = {
  mobileMenuEl: document.querySelector('[data-menu]'),
  navButtonRefs: document.querySelectorAll('[data-scroll]'),
  menuBtnEl: document.querySelector('[data-menu-button]'),
  modalNavEl: document.querySelector('[data-backdrop-nav]'),
  modalOnlineEl: document.querySelector('[data-backdrop-online]'),
  upBtn: document.querySelector('[data-up-btn]'),
  teamList: document.querySelector('#team-list'),
  sliderList: document.querySelector('#slider-list'),
  sliderRadioList: document.querySelector('#slider-radio'),
  lazyImages: document.querySelectorAll('img[loading="lazy"]'),
};

// слайдер - референсы и установка первого слайда открытым

refs.sliderFirstItem = document.querySelector('.slide-1');
refs.sliderBtnsList = document.querySelector('[data-slider-btns]');

refs.sliderFirstItem.classList.replace('visuallyhidden', 'active-slide');
document.querySelector('.slider-radio__first-slide').checked = true;

// слайдер - переключение через радио-кнопки

refs.sliderRadioList.addEventListener('click', onSideSliderNavClick);

// слайдер - переключение кнопками назад и вперед (без сплошного пролистывания)

refs.sliderBtnsList.addEventListener('click', onSliderBtnClick);

// бургер-меню -открытие / закрытие меню

refs.menuBtnEl.addEventListener('click', onBurgerClick(refs.mobileMenuEl));

// закрытие бекдропа по клику в бекдроп

refs.mobileMenuEl.addEventListener('click', onBackdropClick);

// закрытие бекдропа по клику в навигационные кнопки

refs.modalNavEl.addEventListener('click', onModalNavClick);
refs.modalOnlineEl.addEventListener('click', onModalOnlineClick);

// скролл к нужной секции

refs.navButtonRefs.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    document
      .querySelector(`#${e.target.dataset.scroll}`)
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// работа кнопки "вверх"

window.addEventListener('scroll', throttle(hideElOnScroll(refs.upBtn), 250));
refs.upBtn.addEventListener('click', toPageTopOnClick);

// анимация загрузки картинок

refs.lazyImages.forEach(img => {
  img.classList.add('img-not-loaded');
});

refs.lazyImages.forEach(img => {
  img.addEventListener('load', onImageLoad, { once: true });
});

if ('loading' in HTMLImageElement.prototype) {
  refs.lazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
  script.integrity =
    'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
  script.crossOrigin = 'anonymous';
  document.body.appendChild('script');
}
