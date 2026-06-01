document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.header__toggle');
  const mobileMenu = document.querySelector('#mobile-menu');
  const mobileClose = document.querySelector('.mobile-menu__close');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');
  const body = document.body;

  if (!menuToggle || !mobileMenu || !mobileClose) {
    return;
  }

  function openMobileMenu() {
    mobileMenu.classList.add('mobile-menu--open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    body.classList.add('no-scroll');
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('mobile-menu--open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    body.classList.remove('no-scroll');
  }

  menuToggle.addEventListener('click', openMobileMenu);
  mobileClose.addEventListener('click', closeMobileMenu);

  mobileMenu.addEventListener('click', function (event) {
    if (event.target === mobileMenu) {
      closeMobileMenu();
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && mobileMenu.classList.contains('mobile-menu--open')) {
      closeMobileMenu();
    }
  });
});