/* el siguiente codigo es para el carrusel de novedades */
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".nc-slide");
  const prevBtn = document.querySelector("[data-prev]");
  const nextBtn = document.querySelector("[data-next]");
  let index = 0;

  function update(){
    slides.forEach((s, i) => {
      s.classList.remove("active", "left", "right");
      const desc = s.querySelector('.nc-desc');
      if(i === index){
        s.classList.add("active");
        if(desc) desc.style.display = "block";
      } else if(i === (index - 1 + slides.length) % slides.length){
        s.classList.add("left");
        if(desc) desc.style.display = "none";
      } else if(i === (index + 1) % slides.length){
        s.classList.add("right");
        if(desc) desc.style.display = "none";
      } else {
        if(desc) desc.style.display = "none";
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
