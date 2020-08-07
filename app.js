const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const interval = 3000;

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

const startSlide = () => {
  setInterval(() => {
    counter++;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    carouselSlide.style.transition = "1.5s";
  }, interval);
};

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = 1;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

startSlide();
