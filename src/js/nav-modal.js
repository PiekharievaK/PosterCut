const nav = document.getElementById('header-nav');
const button = document.getElementById('header-button');
console.log(nav);

const classToggle = () => {
  nav.classList.toggle('modal-open');
  document.body.classList.toggle('modal-open');
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

  if (button.innerHTML === 'Х') {
    button.innerHTML = 'Open';
  } else {
    button.innerHTML = 'Х';
  }
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    nav.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    button.innerHTML = 'Open';
  });
};

button.addEventListener('click', headerToggle);
