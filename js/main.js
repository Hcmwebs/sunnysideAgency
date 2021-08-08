const hamburger = document.getElementById('hamburger');
const navBar = document.getElementById('navbar');
const navLinks = navBar.querySelectorAll('li a');





 // === === opening the navBar
hamburger.addEventListener('click', () => {
  hamburger.classList.add('open');
  navbar.classList.add('open');
})

// === === closing the navBar
navBar.addEventListener('click', () => {
  hamburger.classList.remove('open');
  navBar.classList.remove('open');
})


// === === adding class active to the nav links
const linkClicked = (e) => {
  navLinks.forEach(link => link.classList.remove('active'))
  navLinks.forEach(link => e.target.classList.add('active'))
};

navLinks.forEach(link => link.addEventListener('click', linkClicked));



