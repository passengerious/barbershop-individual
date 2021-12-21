export function hideElOnScroll(el) {
  return function hideOnScroll(e) {
    if (pageYOffset < document.documentElement.clientHeight - 100) {
      el.classList.add('visuallyhidden');
    } else {
      el.classList.remove('visuallyhidden');
    }
  };
}

export function toPageTopOnClick(e) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
