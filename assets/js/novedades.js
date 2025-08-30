/* el siguiente codigo es para el carrusel de novedades */
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".nc-slide");
  const prevBtn = document.querySelector("[data-prev]");
  const nextBtn = document.querySelector("[data-next]");
  let index = 0;

  function update(){
    slides.forEach((s, i) => {
      s.classList.remove("active", "left", "right");
      if(i === index){
        s.classList.add("active");
      } else if(i === (index - 1 + slides.length) % slides.length){
        s.classList.add("left");
      } else if(i === (index + 1) % slides.length){
        s.classList.add("right");
      }
    });
  }

  function next(){
    index = (index + 1) % slides.length;
    update();
  }
  function prev(){
    index = (index - 1 + slides.length) % slides.length;
    update();
  }

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  // autoplay
  setInterval(next, 7000);

  update(); // inicial
});
