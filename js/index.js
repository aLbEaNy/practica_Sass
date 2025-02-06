const track = document.querySelector('.c_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.c_right');
const prevButton = document.querySelector('.c_left');
const nav = document.querySelector('.c_nav');
const indicators = Array.from(nav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Duplicar las diapositivas para crear un efecto continuo
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
});

// Actualizar la lista de diapositivas después de duplicar
const allSlides = Array.from(track.children);

// Establecer la posición inicial de todas las diapositivas
allSlides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
});

// Función para mover la pista a una posición específica
const moveToSlide = (currentSlide, targetSlide) => {
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
};

// Función para actualizar los indicadores
const updateIndicators = (currentIndicator, targetIndicator) => {
    currentIndicator.classList.remove('current-slide');
    targetIndicator.classList.add('current-slide');
};

// Función para avanzar a la siguiente diapositiva
const goToNextSlide = () => {
    const currentSlide = track.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentIndicator = nav.querySelector('.current-slide');
    const targetIndex = slides.indexOf(currentSlide) + 1;
    const targetIndicator = indicators[targetIndex % slides.length];

    if (!nextSlide) return; // No hacer nada si no hay siguiente diapositiva (no debería ocurrir)

    moveToSlide(currentSlide, nextSlide);

    // Actualizar indicadores solo si la diapositiva está en el rango visible
    if (targetIndicator) {
        updateIndicators(currentIndicator, targetIndicator);
    }

    // Si llegamos al final del bucle
    if (allSlides.indexOf(nextSlide) >= slides.length) {
        setTimeout(() => {
            track.style.transition = "none"; // Desactivar transición para el salto instantáneo
            const firstSlide = allSlides[0];
            track.style.transform = `translateX(-${firstSlide.style.left})`;
            firstSlide.classList.add('current_slide');
        }, 500); // 500ms debe coincidir con la duración de la transición
    }
};

// Función para retroceder a la diapositiva anterior
const goToPrevSlide = () => {
    const currentSlide = track.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1]; // Si es la primera, vuelve a la última
    const currentIndicator = nav.querySelector('.current-slide');
    const targetIndicator = indicators[slides.indexOf(prevSlide)];

    moveToSlide(currentSlide, prevSlide);
    updateIndicators(currentIndicator, targetIndicator);
};

// Eventos para los botones
nextButton.addEventListener('click', goToNextSlide);
prevButton.addEventListener('click', goToPrevSlide);

// Evento para los indicadores
nav.addEventListener('click', (e) => {
    const targetIndicator = e.target.closest('button');
    if (!targetIndicator) return;

    const currentSlide = track.querySelector('.current_slide');
    const currentIndicator = nav.querySelector('.current-slide');
    const targetIndex = indicators.findIndex(indicator => indicator === targetIndicator);
    const targetSlide = allSlides[targetIndex];

    moveToSlide(currentSlide, targetSlide);
    updateIndicators(currentIndicator, targetIndicator);
});

// Avanzar automáticamente cada 5 segundos
setInterval(goToNextSlide, 5000);
