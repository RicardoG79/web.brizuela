const actividadesPastorales = [
  {
    id: 1,
    titulo: "Misa de fin de ciclo  para 6º grado",
    descripcion: "Celebramos juntos fin de un ciclo lectivo, con una celebración comunitaria...",
    imagen: "assets/img/actividad-pastoral/Misa-fin-ciclo.jpeg",
    detalle: `
      Los egresados de nivel primario finalizaron su cursada con una celebración presidida por nuestro capellán, P. Alex MArtínez, en la que participaron estudiantes, docentes y familias.  
      Fue un momento de oración y reflexión para poner en manos de Dios el tiempo vivido.  
      
    `
  },
  {
    id: 2,
    titulo: "Peregrinación juvenil a Villa Cura Brochero",
    descripcion: "Durante el mes de octubre, estudiantes del nivel secundario y superior participaron de la peregrinación juvenil a Villa Cura Brochero...",
    imagen: "assets/img/actividad-pastoral/peregrinación.jpeg",
    detalle: `
      Durante el mes de octubre, estudiantes del nivel secundario y superior participaron de la peregrinación juvenil a Villa Cura Brochero.  
      Junto con jóvenes de toda la diócesis, realizaron una peregrinación espiritual, viviendo la devoción al Santo Cura Brochero, reflexionando sobre los valores evangélicos como camino de santidad.  
      La actividad se vivió con gran entusiasmo y compromiso, reforzando los vínculos de fe y de comunidad.
    `
  },
  /*
  {
    id: 3,
    titulo: "Actividades solidarias y de formación",
    descripcion: "En un trabajo interdisciplinario, los estudiantes de nivel Secundario participaron de actividades solidarias...",
    imagen: "assets/img/nivel-secundario/secundario03.jpg",
    detalle: `
      En un trabajo interdisciplinario, los estudiantes de nivel Secundario participaron de actividades solidarias.  
      Fue una experiencia de encuentro fraterno con sus compañeros, con momentos de reflexión, de formación general, y de vinculación con la comunidad.  
      La actividad ayudó a fortalecer los lazos de amistad y la vivencia de la fe en comunidad.
    `
  },
  {
    id: 4,
    titulo: "Fiestas Patronales",
    descripcion: "Del 6 al 15 de septiembre acompañamos con fe y alegría la Novena en honor a Nuestra Señora de los Dolores...",
    imagen: "assets/img/actividad-pastoral/patronales.jpeg",
    detalle: `
      Del 6 al 15 de septiembre vivimos la Novena en honor a Nuestra Señora de los Dolores.  
      Como comunidad educativa, en todos los niveles, nos unimos en oración, cantos y celebraciones 
      para preparar el corazón y renovar nuestra fe. 
      Cada día de la Novena estuvo animado por un curso diferente, quienes participaron en las lecturas, ofrendas y cantos.  
      También compartimos reflexiones guiadas por nuestros docentes de pastoral y momentos de encuentro con las familias.
      Culminamos el 15 de septiembre con la celebración de la Santa Misa patronal, agradeciendo a nuestra Madre por su protección 
      y pidiéndole que siga acompañando nuestro camino como colegio.
    `
  }
    */
];

// Seleccionamos contenedores
const carouselInner = document.getElementById("pastoralCarouselInner");
const modalsContainer = document.getElementById("pastoralModals");

// Generar dinámicamente el carrusel
actividadesPastorales.forEach((actividad, index) => {
  // Card del carrusel
  const item = `
    <div class="carousel-item ${index === 0 ? "active" : ""}">
      <div class="d-flex justify-content-center">
        <div class="card pastoral-card shadow">
          <div class="row g-0">
            <div class="col-md-6">
              <img src="${actividad.imagen}" class="d-block w-100 pastoral-img" alt="${actividad.titulo}">
            </div>
            <div class="col-md-6 d-flex flex-column justify-content-center p-3 my-4">
              <h5 class="fw-bold pb-3">${actividad.titulo}</h5>
              <p class="fw-normal">${actividad.descripcion}</p>
              <button class="btn btn-outline-primary mt-auto" data-bs-toggle="modal" data-bs-target="#modal${actividad.id}">
                Ver más
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  carouselInner.innerHTML += item;

  // Modal correspondiente
  const modal = `
    <div class="modal fade" id="modal${actividad.id}" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-primary fw-bold">${actividad.titulo}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body modal-scroll">
            <img src="${actividad.imagen}" class="img-fluid rounded mb-3" alt="${actividad.titulo}">
            <p class="fw-normal">${actividad.detalle}</p>
          </div>
        </div>
      </div>
    </div>
  `;
  modalsContainer.innerHTML += modal;
});
