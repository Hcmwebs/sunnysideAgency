const hamburger = document.getElementById('hamburger');
const navBar = document.getElementById('navbar');



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
const navLinks = navBar.querySelectorAll('li a');
navLinks.forEach(link => link.addEventListener('click', (e) => {
e.target.classList.add('active');
}));



// === === removing class active to the nav links