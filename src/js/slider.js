const sliderFirstItem = document.querySelector('.slide-1');
const sliderSecondItem = document.querySelector('.slide-2');
const sliderThirdItem = document.querySelector('.slide-3');
const sliderItems = document.querySelectorAll('[data-slider-item]');
const sliderBtnNext = document.querySelector('[data-slider-next]');
const sliderBtnPrev = document.querySelector('[data-slider-prev]');
const firstRadioBtn = document.querySelector('.slider-radio__first-slide');
const secondRadioBtn = document.querySelector('.slider-radio__second-slide');
const thirdRadioBtn = document.querySelector('.slider-radio__third-slide');

export function onSideSliderNavClick(e) {
  if (e.target.nodeName !== 'SPAN') return;

  sliderItems.forEach(item => {
    item.classList.replace('active-slide', 'visuallyhidden');
  });

  switch (e.target.dataset.sliderBtn) {
    case 'first':
      sliderFirstItem.classList.replace('visuallyhidden', 'active-slide');
      e.target.previousElementSibling.checked = true;
      sliderBtnNext.disabled = false;
      sliderBtnPrev.disabled = true;
      break;
    case 'second':
      sliderSecondItem.classList.replace('visuallyhidden', 'active-slide');
      e.target.previousElementSibling.checked = true;
      sliderBtnNext.disabled = false;
      sliderBtnPrev.disabled = false;
      break;
    case 'third':
      sliderThirdItem.classList.replace('visuallyhidden', 'active-slide');
      e.target.previousElementSibling.checked = true;
      sliderBtnNext.disabled = true;
      sliderBtnPrev.disabled = false;
      break;
  }
}

export function onSliderBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  const activeSlide = document.querySelector('.active-slide');
  const nextActiveSlide = activeSlide.nextElementSibling;
  const prevActiveSlide = activeSlide.previousElementSibling;

  if (e.target === sliderBtnNext) {
    if (sliderFirstItem === activeSlide) {
      sliderBtnNext.disabled = false;
      sliderBtnPrev.disabled = false;
      secondRadioBtn.checked = true;
    }

    if (sliderSecondItem === activeSlide) {
      sliderBtnNext.disabled = true;
      sliderBtnPrev.disabled = false;
      thirdRadioBtn.checked = true;
    }

    if (sliderThirdItem === activeSlide) return;

    activeSlide.classList.replace('active-slide', 'visuallyhidden');
    nextActiveSlide.classList.replace('visuallyhidden', 'active-slide');
  }

  if (e.target === sliderBtnPrev) {
    if (sliderFirstItem === activeSlide) return;

    if (sliderSecondItem === activeSlide) {
      sliderBtnNext.disabled = false;
      sliderBtnPrev.disabled = true;
      firstRadioBtn.checked = true;
    }

    if (sliderThirdItem === activeSlide) {
      sliderBtnNext.disabled = false;
      sliderBtnPrev.disabled = false;
      secondRadioBtn.checked = true;
    }

    activeSlide.classList.replace('active-slide', 'visuallyhidden');
    prevActiveSlide.classList.replace('visuallyhidden', 'active-slide');
  }
}
