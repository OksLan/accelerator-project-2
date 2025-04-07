// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


/* развернуть/свернуть main-nav */
// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector(".header__toggle").addEventListener("click", function () {
//     const nav = document.querySelector(".header__nav");
//     const opened = nav.classList.toggle("header__nav--opened");
//     this.classList.toggle("header__toggle--open");
//     this.classList.toggle("header__toggle--close");
//     this.querySelector("use").setAttribute(
//       "href",
//       `icons/spritemap.svg#${opened ? "cross" : "menu"}`
//     );
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".header__toggle").addEventListener("click", function () {
    const nav = document.querySelector(".header__nav");
    const opened = nav.classList.toggle("header__nav--opened");
    this.classList.toggle("header__toggle--open");
    this.classList.toggle("header__toggle--close");
  });
});
