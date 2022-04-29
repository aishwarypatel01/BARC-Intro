const menuOpenBTN = document.querySelector('.btn-menuOpen');
const menuCloseBTN = document.querySelector('.btn-menuClose');
const navbar = document.querySelector('.topNav');
const navbarLinks = document.querySelectorAll('.nav__link a');

menuOpenBTN.addEventListener('click', () =>
  navbar.classList.toggle('menuOpen')
);

menuCloseBTN.addEventListener('click', () =>
  navbar.classList.toggle('menuOpen')
);

navbarLinks.forEach((link) => {
  link.addEventListener('click', () => navbar.classList.remove('menuOpen'));
});
