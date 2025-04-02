const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});


document.getElementById('icono').onclick = function() {
  document.getElementById('popup').style.display = 'block';
};

document.getElementById('cerrar').onclick = function() {
  document.getElementById('popup').style.display = 'none';
};


function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}