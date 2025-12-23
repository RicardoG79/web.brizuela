// Popup footer
const toggleBtn = document.getElementById('toggle-popup');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-popup');

function openPopup() {
  popup.classList.add('open');
  popup.setAttribute('aria-hidden', 'false');

  // Bloquea scroll del body
  document.body.style.overflow = 'hidden';

  // Enfoca el botón cerrar (accesibilidad)
  closeBtn.focus();
}

function closePopup() {
  popup.classList.remove('open');
  popup.setAttribute('aria-hidden', 'true');

  // Restaura scroll
  document.body.style.overflow = '';

  // Devuelve foco al botón
  toggleBtn.focus();
}

// Eventos
toggleBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);

// Click fuera del popup
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    closePopup();
  }
});

// Cerrar con ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popup.classList.contains('open')) {
    closePopup();
  }
});
