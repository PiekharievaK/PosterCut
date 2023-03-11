const nav = document.getElementById('header-nav');
const button = document.getElementById('header-button');
const burger = document.getElementsByClassName("header_burger")[0]

const classToggle = () => {
  nav.classList.toggle('modal-open');
  document.body.classList.toggle('modal-open');
  burger.classList.toggle('active')

};

const headerToggle = () => {
  classToggle();
  const navLinks = document.querySelectorAll('.nav_item');
  console.log(nav.classList.contains('modal-open'));
  if (nav.classList.contains('modal-open')) {
    navLinks.forEach(item => item.addEventListener('click', classToggle));
  } else {
    navLinks.forEach(item => item.removeEventListener('click', classToggle));
  } 
  
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    nav.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    burger.classList.remove('active')
    navLinks.forEach(item => item.removeEventListener('click', classToggle));
  });
};

button.addEventListener('click', headerToggle);
