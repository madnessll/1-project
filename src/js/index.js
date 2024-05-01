// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
// import styles bundle
import "swiper/css/bundle";
// init Swiper:
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".mobile-menu").classList.toggle("open");
  document.querySelector(".header__logo").classList.toggle("hidden");
  document.querySelector('main').classList.toggle("hidden");
  document.querySelector('footer').classList.toggle("hidden");
});


