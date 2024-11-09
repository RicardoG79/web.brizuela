let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-slides img');
        const totalSlides = slides.length;
        const dots = document.querySelectorAll('.dot');

        function showSlide(index) {
            if (index >= totalSlides) currentSlide = 0;
            if (index < 0) currentSlide = totalSlides - 1;
            document.querySelector('.carousel-slides').style.transform = `translateX(${-currentSlide * 100}%)`;

            // Actualizar puntos activos
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            currentSlide++;
            showSlide(currentSlide);
        }

        // Cambiar la imagen cada 1 segundo
        setInterval(nextSlide, 4000);

        // Permitir clic en puntos para cambiar la imagen
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });