const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("header nav ul");
// const heroImage = document.querySelector('.hero-image');
// let i = 0;

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
