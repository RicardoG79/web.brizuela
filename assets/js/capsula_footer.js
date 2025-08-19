//variable y codigo de html
// para el footer   
let mifooter = `

        <!-- Botón circular con icono, tooltip y aria-label -->
    <button
      id="toggle-popup"
      class="btn-popup"
      aria-label="Abrir redes sociales"
      title="Info de contacto"
    >
      <i class="fa-regular fa-comments" style="color: #000000;"></i>
    </button>
    
    
    <p>Ciclo lectivo 2025 || © Instituto Brizuela </p>

       </div>
       
</div>
<div id="popup" class="popup" aria-hidden="true">
    <div class="popup-inner">
        <button id="close-popup" class="close-btn" aria-label="Cerrar">&times;</button>
        <div class="popup-content">
        <p>Contactos <br> Teléfono nivel Incial y Primario: 3544 - 420214 <br>Mail Inicial: brizuelainicial@gmail.com <br>Mail Primario: nivelprimario@institutobrizuela.edu.ar<br>Teléfono nivel Secundario y Superior: 3544 - 420383 <br>Mail Secundario: secretariabrizuela@gmail.com<br>Mail Superior: ifd.institutobrizuela@institutobrizuela.edu.ar</p>
        
    </div>  

`
document.querySelector('footer').innerHTML = mifooter;
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
let miboton = `

         <a href="/" class="floating-home-btn">
        <i class="fas fa-home"></i>

`
document.querySelector('.boton').innerHTML = miboton;