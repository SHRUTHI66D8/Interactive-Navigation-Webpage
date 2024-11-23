// Get the navbar element
const navbar = document.getElementById('navbar');
// Add an event listener for the scroll event
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('fixed','scrolled');
  } else {
    navbar.classList.remove('fixed','scrolled');
  }
});
