// // https://swiperjs.com/get-started#installation
import Swiper from "swiper";
// // import {Navigation, Pagination} from "swiper/modules";
// // import 'swiper/css';


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

// /* TOURS свайпер */
// const swiperTours = new Swiper('.tours__swiper', {
//   modules: [Navigation],
//   direction: 'horizontal',
//   loop: true,
//   speed: 500,

//   breakpoints: {
//     1439: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//     767: {
//       slidesPerView: 2,
//       spaceBetween: 18,
//     },
//     320: {
//       slidesPerView: 1,
//     },
//   },

//     // Navigation arrows
//   navigation: {
//   nextEl: '.swiper-button-next',
//   prevEl: '.swiper-button-prev',
//   enabled: true,
//   clickable: true,
// },
// });

// /* TRAINING свайпер */
// const swiperTraining = new Swiper('.training__swiper', {
//   modules: [Navigation],
//   direction: 'horizontal',
//   loop: true,
//   speed: 500,

//   breakpoints: {
//     1439: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     767: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//     },
//     320: {
//       slidesPerView: 1,
//     },
//   },

//     // Navigation arrows
//   navigation: {
//   nextEl: '.swiper-button-next',
//   prevEl: '.swiper-button-prev',
//   enabled: true,
//   clickable: true,
// },
// });

// /* REVIEWS свайпер */
// const swiperReviews = new Swiper('.reviews__swiper', {
//   modules: [Navigation],
//   direction: 'horizontal',
//   loop: true,
//   speed: 500,

//   breakpoints: {
//     1439: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     767: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//     },
//     320: {
//       slidesPerView: 1,
//     },
//   },

//     // Navigation arrows
//   navigation: {
//   nextEl: '.swiper-button-next',
//   prevEl: '.swiper-button-prev',
//   enabled: true,
//   clickable: true,
// },
// });

// /* ADVANTAGES свайпер */
// const swiperAdv = new Swiper('.adv__swiper', {
//   modules: [Navigation],
//   direction: 'horizontal',
//   loop: true,
//   speed: 500,

//   breakpoints: {
//     1439: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     767: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//     },
//     320: {
//       slidesPerView: 1,
//     },
//   },

//     // Navigation arrows
//   navigation: {
//   nextEl: '.swiper-button-next',
//   prevEl: '.swiper-button-prev',
//   enabled: true,
//   clickable: true,
// },
// });

// /* GALLERY свайпер */
// const swiperGallery= new Swiper('.gallery__swiper', {
//   modules: [Navigation],
//   direction: 'horizontal',
//   loop: true,
//   speed: 500,

//   breakpoints: {
//     1439: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     767: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//     },
//     320: {
//       slidesPerView: 1,
//     },
//   },

//     // Navigation arrows
//   navigation: {
//   nextEl: '.swiper-button-next',
//   prevEl: '.swiper-button-prev',
//   enabled: true,
//   clickable: true,
// },
// });

/* ФОРМА */

// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('.form__boxes');
//   const phoneInput = form.querySelector('input[placeholder="Телефон"]');
//   const emailInput = form.querySelector('input[placeholder="Email"]');
//   const phoneEmptyMessage = form.querySelector('.form__box-phone .message-empty');
//   const phoneWrongSymbolsMessage = form.querySelector('.form__box-phone .wrong-symbols');
//   const emailEmptyMessage = form.querySelector('.form__box-email .message-empty');
//   const emailWrongSymbolsMessage = form.querySelector('.form__box-email .wrong-symbols');

//   const hideAllMessages = () => {
//     phoneEmptyMessage.style.display = 'none';
//     phoneWrongSymbolsMessage.style.display = 'none';
//     emailEmptyMessage.style.display = 'none';
//     emailWrongSymbolsMessage.style.display = 'none';
//     phoneInput.classList.remove('error');
//     emailInput.classList.remove('error');
//   };

//   form.addEventListener('submit', (event) => {
//     let isValid = true;

//     hideAllMessages();

//     // ТЕЛЕФОН
//     const phoneValue = phoneInput.value.trim();
//     if (phoneValue === '') {
//       phoneEmptyMessage.style.display = 'block';
//       phoneInput.classList.add('error');
//       isValid = false;
//     } else if (!/^\d+$/.test(phoneValue)) {
//       phoneWrongSymbolsMessage.style.display = 'block';
//       phoneInput.classList.add('error');
//       isValid = false;
//     }

//     // Email
//     const emailValue = emailInput.value.trim();
//     if (emailValue === '') {
//       emailEmptyMessage.style.display = 'block';
//       emailInput.classList.add('error');
//       isValid = false;
//     } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?:[a-zA-Z]{2,}|рф)$/.test(emailValue)) {
//       emailWrongSymbolsMessage.style.display = 'block';
//       emailInput.classList.add('error');
//       isValid = false;
//     }

//     // не отправлять с ошибками
//     if (!isValid) {
//       event.preventDefault();
//     }
//   });

// // убрать/вернуть плейсхолдер в focus */
// document.querySelectorAll(".form__input").forEach((input) => {
//   input.addEventListener("focus", () => {
//     input.dataset.placeholder = input.placeholder;
//     input.placeholder = "";
//     input.value = "";
//   });

//   input.addEventListener("blur", () => {
//     if (!input.value.trim()) {
//       input.placeholder = input.dataset.placeholder;
//     }
//    });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form__boxes');
  const phoneInput = form.querySelector('input[placeholder="Телефон"]');
  const emailInput = form.querySelector('input[placeholder="Email"]');
  const phoneEmptyMessage = form.querySelector('.form__box-phone .message-empty');
  const phoneWrongSymbolsMessage = form.querySelector('.form__box-phone .wrong-symbols');
  const emailEmptyMessage = form.querySelector('.form__box-email .message-empty');
  const emailWrongSymbolsMessage = form.querySelector('.form__box-email .wrong-symbols');

  const hideAllMessages = () => {
    phoneEmptyMessage.style.display = 'none';
    phoneWrongSymbolsMessage.style.display = 'none';
    emailEmptyMessage.style.display = 'none';
    emailWrongSymbolsMessage.style.display = 'none';
    phoneInput.classList.remove('error');
    emailInput.classList.remove('error');
  };

  form.addEventListener('submit', (event) => {
    let isValid = true;
    hideAllMessages();

    // ТЕЛЕФОН
    const phoneValue = phoneInput.value.trim();
    if (phoneValue === '') {
      phoneEmptyMessage.style.display = 'block';
      phoneInput.classList.add('error');
      isValid = false;
    } else if (!/^\d+$/.test(phoneValue)) {
      phoneWrongSymbolsMessage.style.display = 'block';
      phoneInput.classList.add('error');
      isValid = false;
    }

    // EMAIL
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
      emailEmptyMessage.style.display = 'block';
      emailInput.classList.add('error');
      isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?:[a-zA-Z]{2,}|рф)$/.test(emailValue)) {
      emailWrongSymbolsMessage.style.display = 'block';
      emailInput.classList.add('error');
      isValid = false;
    }

    if (!isValid) event.preventDefault();
  });

  // скрытие плейсхолдера + очистка при focus
  document.querySelectorAll(".form__input").forEach((input) => {
    input.addEventListener("focus", () => {
      input.dataset.placeholder = input.placeholder;
      input.placeholder = "";
    });

    input.addEventListener("blur", () => {
      if (!input.value.trim()) {
        input.placeholder = input.dataset.placeholder;
      }
    });

    // скрытие попапов и ошибки при вводе
    input.addEventListener("input", () => {
      input.classList.remove("error");

      const messageBox = input.closest(".form__box-phone, .form__box-email");
      if (messageBox) {
        const messages = messageBox.querySelectorAll(".form__error-message");
        messages.forEach(msg => msg.style.display = "none");
      }
    });
  });
});
