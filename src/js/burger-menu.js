export function onBurgerClick(backdropEl) {
  return function onBurgerClick2(e) {
    const expanded =
      e.currentTarget.getAttribute('aria-expanded') === 'true' || false;

    e.currentTarget.classList.toggle('is-open');

    document.body.classList.toggle('body-hidden');

    e.currentTarget.setAttribute('aria-expanded', !expanded);

    backdropEl.classList.toggle('is-open');

    // закрытие по клавише esc
    onEscModalClose();
  };
}

// реализация закрытия по клавише esc

function onEscModalClose() {
  window.addEventListener('keydown', onEscKey);
}

function onEscKey(e) {
  if (e.code === 'Escape') {
    onModalClose();
  }
}

function onModalClose() {
  const mobileMenuEl = document.querySelector('[data-menu]');
  const menuBtnEl = document.querySelector('[data-menu-button]');

  mobileMenuEl.classList.remove('is-open');
  menuBtnEl.classList.remove('is-open');
  document.body.classList.remove('body-hidden');

  window.removeEventListener('keydown', onEscKey);
}

// закрытие по клику в бекдроп

export function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onModalClose();
  }
}

// закрыте по клику в навигационные кнопки

export function onModalNavClick(e) {
  if (!e.target.dataset.value === 'backdrop-nav') {
    return;
  }
  onModalClose();
}

export function onModalOnlineClick(e) {
  if (!e.target.dataset.value === 'backdrop-online') {
    return;
  }
  onModalClose();
}
