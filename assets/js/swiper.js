import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import '/node_modules/swiper/modules/autoplay';
import '/node_modules/swiper/swiper-bundle.min.css';

export default function initializeSwipers() {
  // Partners Sllider
  const swiper = new Swiper('.swiper-container', {
    modules: [Autoplay, Navigation, Pagination],
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      400: { slidesPerView: 3, spaceBetween: 20 },
      640: { slidesPerView: 4, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 40 },
    },
  });

  const heroSlider = new Swiper('.hero-slider-container', {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}