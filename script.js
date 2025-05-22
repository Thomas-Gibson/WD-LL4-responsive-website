// Hamburger menu functionality for mobile
// This code toggles the navigation menu when the hamburger button is clicked
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('open'); // Show or hide the nav menu
  });
}