const hamburger = document.getElementById('hamburger');
const navBar = document.getElementById('navbar');
const navLinks = navBar.querySelectorAll('li > a');

// === === opening the navBar
hamburger.addEventListener('click', () => {
  hamburger.classList.add('open');
  navbar.classList.add('open');
});

// === === closing the navBar
navBar.addEventListener('click', () => {
  hamburger.classList.remove('open');
  navBar.classList.remove('open');
});

// === === adding class active to the nav links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navBar.querySelector('.active').classList.remove('active');
    link.classList.add('active');
  });
});
