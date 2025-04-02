// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


/* развернуть/свернуть main-nav */
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".menu__toggle");
    const navList = document.querySelector(".main-nav");
    const icon = toggleButton.querySelector("use");

    if (!toggleButton || !navList || !icon) return;

    toggleButton.addEventListener("click", () => {
        const isOpen = navList.classList.toggle("main-nav--opened");

        // Меняем иконку в зависимости от состояния меню
        icon.setAttribute("href", isOpen ? "img/spritemap#cross" : "img/spritemap#menu");
    });
});


