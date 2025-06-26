document.addEventListener("DOMContentLoaded", () => {
   const swiperInstance = new Swiper('.swiper-container--base', {
      slidesPerView: 1,
      autoplay: {
         delay: 5000,
         disableOnInteraction: false,
      },
      speed: 750,
      loop: true,
      pagination: {
         el: ".swiper-pagination",
         bulletActiveClass: "active",
         bulletElement: "button",
         clickable: true
      },
      lazy: {
         elementClass: "lazy-load",
         loadedClass: "loaded",
         loadPrevNext: true
      },
      keyboard: true,
      a11y: true
   });

   const toggleBtn = document.querySelector('.swiper-toggle');
   let isPaused = false;

   toggleBtn.addEventListener('click', () => {
      if (isPaused) {
         swiperInstance.autoplay.start();
         toggleBtn.textContent = 'Pause';
      } else {
         swiperInstance.autoplay.stop();
         toggleBtn.textContent = 'Play';
      }
      isPaused = !isPaused;
   });
});
