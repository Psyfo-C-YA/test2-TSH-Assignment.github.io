// Lister for scroll event that adds sticky class to nav element to make it stick to top of page
window.addEventListener('scroll', function () {
  nav.classList.add('sticky');
});

// Path: scripts.js
// Listener for click event that toggles the nav menu
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function showNav() {
  var x = document.getElementById('nav');
  if (x.className === 'navbar') {
    x.className += ' responsive' + ' sticky';
  } else {
    x.className = 'navbar';
  }
}
