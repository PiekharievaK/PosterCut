const nav = document.getElementById('header-nav');
const burger = document.getElementById('burger-button');
const menuButton = document.getElementById('nav_menu-button');
const catalogMenu = document.getElementById('catalog-menu');
const mobileControl = document.getElementById('header-mobile-control');
const navLinks = document.querySelectorAll('.nav_item');

const menuToggle = e => {
  // console.log(catalogMenu);
  if (!e.currentTarget.parentNode.classList.contains('active')) {
    e.currentTarget.parentNode.classList.add('active');
    // e.target.addEventListener('mouseout', menuToggle)
  } else {
    e.currentTarget.parentNode.classList.remove('active');
    // e.target.removeEventListener('mouseout', menuToggle);
  }
};

const classToggle = e => {
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(menuButton.children[0]);
  if (e.target === menuButton || e.target === menuButton.children[0]) {
    // menuToggle(e);
    return;
  }
  if (e.target.parentNode.classList.contains('active')) {
    navLinks.forEach(item => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      } else {
        return;
      }
    });
  }

  console.log(e.target);
  nav.classList.toggle('modal-open');
  document.body.classList.toggle('modal-open');
  mobileControl.classList.toggle('active');

  // e.target.parentNode.classList.remove("active")
};

const headerToggle = e => {
  classToggle(e);
  if (nav.classList.contains('modal-open')) {
    navLinks.forEach(item => item.addEventListener('click', classToggle));
  } else {
    navLinks.forEach(item => item.removeEventListener('click', classToggle));
  }

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    nav.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    mobileControl.classList.remove('active');
    navLinks.forEach(item => item.removeEventListener('click', classToggle));
  });
};

// const toggleCatalog = (e) => {
//   menuToggle(e)
// };

burger.addEventListener('click', headerToggle);
menuButton.addEventListener('click', menuToggle);
// menuButton.parentElement.addEventListener('mouseover', menuToggle)
// menuButton.parentElement.addEventListener('mouseout', menuToggle)
