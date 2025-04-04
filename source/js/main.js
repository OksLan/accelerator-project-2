// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


/* развернуть/свернуть main-nav */
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".header__toggle");
    const toggleIcon = toggleButton.querySelector("use");
    const nav = document.querySelector(".header__nav");
  
    let isOpen = false;
  
    toggleButton.addEventListener("click", () => {
      isOpen = !isOpen;
  
      // Переключаем отображение меню
      nav.classList.toggle("header__nav--opened", isOpen);
  
      // Меняем иконку
      toggleIcon.setAttribute("href", isOpen ? "img/spritemap.svg#cross" : "img/spritemap.svg#menu");
    });
  });
  
