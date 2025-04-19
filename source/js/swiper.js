// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
//   ...
// });

const swiperTours = new Swiper('.swiper-tours', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
  });


  const juriSwiper = new Swiper('.juri__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    speed: 500,
  
    breakpoints: {
      1365: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      320: {
        slidesPerView: 1,
      },
    },

      // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    enabled: true,
    clickable: true,
  },
});