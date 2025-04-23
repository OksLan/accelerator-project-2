// https://swiperjs.com/get-started#installation
import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


/* ПРОМО слайдер */
import { initSlider } from "./slider.js";

  initSlider();


/* развернуть/свернуть main-nav */
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".header__toggle");
  const nav = document.querySelector(".header__nav");
  const links = nav.querySelectorAll(".header__nav-link");
  const body = document.body;

  const toggleMenu = () => {
    nav.classList.toggle("header__nav--opened");
    toggleBtn.classList.toggle("header__toggle--open");
    toggleBtn.classList.toggle("header__toggle--close");
    body.style.overflow = nav.classList.contains("header__nav--opened") ? "hidden" : "";
  };

  toggleBtn.addEventListener("click", toggleMenu);
  links.forEach(link => link.addEventListener("click", () => {
    if (nav.classList.contains("header__nav--opened")) toggleMenu();
  }));
});

/* TOURS свайпер */
const swiperTours = new Swiper('.tours__swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  loop: true,
  speed: 500,

  breakpoints: {
    1439: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 18,
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

/* TRAINING свайпер */
const swiperTraining = new Swiper('.training__swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  loop: true,
  speed: 500,

  breakpoints: {
    1439: {
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

/* REVIEWS свайпер */
const swiperReviews = new Swiper('.reviews__swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  loop: true,
  speed: 500,

  breakpoints: {
    1439: {
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

/* ADVANTAGES свайпер */
const swiperAdv = new Swiper('.adv__swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  loop: true,
  speed: 500,

  breakpoints: {
    1439: {
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

/* GALLERY свайпер */
const swiperGallery= new Swiper('.gallery__swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  loop: true,
  speed: 500,

  breakpoints: {
    1439: {
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