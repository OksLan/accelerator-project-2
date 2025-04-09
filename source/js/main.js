// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


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
