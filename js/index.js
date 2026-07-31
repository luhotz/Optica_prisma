document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carouselTrack');
  const slides = Array.from(track.children);
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsNav = document.getElementById('carouselDots');

  let currentIndex = 0;
  const totalSlides = slides.length;

  // Generar indicadores dinámicamente según la cantidad de imágenes
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => moveToSlide(index));
    dotsNav.appendChild(dot);
  });

  const dots = Array.from(dotsNav.children);

  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  function moveToSlide(index) {
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  }

  // Eventos de botones
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    moveToSlide(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    moveToSlide(currentIndex);
  });

  // Rotación automática cada 4 segundos
  let autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    moveToSlide(currentIndex);
  }, 4000);

  // Pausar rotación si el usuario pasa el mouse encima
  const container = document.querySelector('.carousel-container');
  container.addEventListener('mouseenter', () => clearInterval(autoSlide));
  container.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      moveToSlide(currentIndex);
    }, 4000);
  });
});