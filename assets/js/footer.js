//El siguiente código es para el botón el desplegable del footer.//
const toggleBtn = document.getElementById('toggle-popup');
const popup    = document.getElementById('popup');
const closeBtn = document.getElementById('close-popup');

function togglePopup(show) {
  if (show) {
    popup.setAttribute('aria-hidden', 'false');
    popup.classList.add('open');
  } else {
    popup.classList.remove('open');
    popup.setAttribute('aria-hidden', 'true');
  }
}

toggleBtn.addEventListener('click', () => togglePopup(true));
closeBtn.addEventListener('click', () => togglePopup(false));

popup.addEventListener('click', e => {
  if (e.target === popup) togglePopup(false);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && popup.classList.contains('open')) {
    togglePopup(false);
  }
});