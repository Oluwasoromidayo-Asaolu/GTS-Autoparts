const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("header nav ul");
// const heroImage = document.querySelector('.hero-image');
// let i = 0;

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// let images = ['images/banner.svg', 'images/about_banner.jpg', 'images/about-image2.jpg'];
// let time = 3000; 

// function changeImage() {
//   heroImage.src = images[i];  
//   if (i < images.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }
//   setTimeout(changeImage, time);
// }

// window.onload = changeImage;


// Adding elements to cart

const addToCartBtns = document.querySelectorAll(".addToCartBtn");
addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productCard = btn.parentElement.parentElement;
    const product = {
      name: productCard.querySelector(".product-title").textContent,
      image: productCard.querySelector(".product-image").src,
      price: parseFloat(productCard
        .querySelector(".product-price")
        .textContent.replace("£", "")),
    };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    showCartMessage();
  });
});


function showCartMessage() {
  const cartMessage = document.getElementById("cart-message");
  cartMessage.classList.remove("hidden");
  cartMessage.classList.add("show");

  setTimeout(() => {
    cartMessage.classList.remove("show");
    cartMessage.classList.add("hidden");
  }, 2000);
}