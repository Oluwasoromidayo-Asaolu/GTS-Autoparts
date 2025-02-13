// Products Structure and display
// Add more products later
const productList = document.querySelector(".product-list");
const products = [
  {
    id: 1,
    name: "Lion 202 Car Battery",
    image: "images/batteries/Lion202CarBattery.jpg",
    sales: "200+",
    rating: 4.7,
    price: 299.45,
    category: "batteries",
  },
  {
    id: 2,
    name: "Exide 075 Car Battery",
    image: "images/batteries/Exide075CarBattery.jpg",
    sales: "200+",
    rating: 4.7,
    price: 214.95,
    category: "batteries",
  },
  {
    id: 3,
    name: "Bosch Car Battery 075",
    image: "images/batteries/BoschCarBattery075.jpg",
    sales: "200+",
    rating: 4.7,
    price: 349.65,
    category: "batteries",
  },
  {
    id: 4,
    name: "Bosch Car Battery 019",
    image: "images/batteries/BoschCarBattery019.jpg",
    sales: "200+",
    rating: 4.7,
    price: 250.75,
    category: "batteries",
  },
  {
    id: 5,
    name: "Aston Martin Engine",
    image: "images/engines/2017AstonMartinDB11Engine.jfif",
    sales: "200+",
    rating: 4.7,
    price: 8499.99,
    category: "engines",
  },
  {
    id: 6,
    name: "Jaguar F Type Engine",
    image: "images/engines/2016JaguarFTypeEngine.jpeg",
    sales: "10+",
    rating: 4.6,
    price: 11999.99,
    category: "engines",
  },
  {
    id: 7,
    name: "2021 Land Rover Engine",
    image: "images/engines/2021LandRoverDefenderEngine.jpeg",
    sales: "50+",
    rating: 4.5,
    price: 9599.45,
    category: "engines",
  },
  {
    id: 8,
    name: "Uniroyal RainSport Tyre",
    image: "images/tyres/UNIROYALRainSport.jfif",
    sales: "50+",
    rating: 4.5,
    price: 124.99,
    category: "tires",
  },
  {
    id: 9,
    name: "Bridgestone Ecopia",
    image: "images/tyres/BridgestoneEcopiaEP150.jpg",
    sales: "50+",
    rating: 4.5,
    price: 119.65,
    category: "tires",
  },
  {
    id: 10,
    name: "Pagid Brake Cleaner",
    image: "images/brakes/PagidBrakeCleaner500ml.jpg",
    sales: "50+",
    rating: 4.5,
    price: 9.99,
    category: "brakes",
  },
  {
    id: 11,
    name: "Sealey Brake Tool",
    image: "images/brakes/SealeyVS045BrakeWind-BackTool-LowProfile-VAG.jpg",
    sales: "50+",
    rating: 4.5,
    price: 9.99,
    category: "brakes",
  },
  {
    id: 12,
    name: "Lion 063 Car Battery",
    image: "images/battery.jpg",
    sales: "200+",
    rating: 4.7,
    price: 34.99,
    category: "batteries",
  },
];

products.forEach((product) => {
  const productCard = `
    <div class="product-card" data-category="${product.category}">
      <div>
        <img class="product-image" src="${product.image}">
      </div>
      <hr class="card-hr">
      <div class="product-title">${product.name}</div>
      <div class="product-stats">
          <span>${product.sales} sold</span>
          <span>
            <i class="fa-solid fa-star"></i> 
            ${product.rating}
          </span>
      </div>
      <div class="product-price">£${product.price}</div>
      <div>
          <button class="addToCartBtn">Add to cart</button>
      </div>
    </div>
  `;
  productList.innerHTML += productCard;
});

// Product Category Filtering, Try to filter elements by price. Might not be necessary though
const categoryBtn = document.querySelectorAll(".category-btn");
const productCards = document.querySelectorAll(".product-card");

categoryBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnCategory = btn.dataset.category;

    productCards.forEach((product) => {
      const productCategory = product.dataset.category;
      if (btnCategory === "all" || btnCategory === productCategory) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

// Adding Elements to Cart
const addToCartBtns = document.querySelectorAll(".addToCartBtn");
addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productCard = btn.parentElement.parentElement;
    const product = {
      name: productCard.querySelector(".product-title").textContent,
      image: productCard.querySelector(".product-image").src,
      price: productCard
        .querySelector(".product-price")
        .textContent.replace("£", ""),
    };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    showCartMessage();
  });
});

// Displaying a message after adding an item to cart
function showCartMessage() {
  const cartMessage = document.getElementById("cart-message");
  cartMessage.classList.remove("hidden");
  cartMessage.classList.add("show");

  setTimeout(() => {
    cartMessage.classList.remove("show");
    cartMessage.classList.add("hidden");
  }, 2000);
}
