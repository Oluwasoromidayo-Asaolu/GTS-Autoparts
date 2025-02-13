let cartItems = JSON.parse(localStorage.getItem("cart"));
let cartContainer = document.querySelector(".cart-container");
let emptyCartSection = document.querySelector(".empty-cart-section");
let unemptyCartSection = document.querySelector(".unempty-cart-section");
let totalPrice = document.querySelector(".total-price");
let cartSummary = document.querySelector(".cart-summary");
let total = 0;

cartContainer.style.display = "none";
cartSummary.style.display = "none";
//Creating the structure for each product in the cart
cartItems.forEach((item) => {
  const itemCard = `
    <div class="cart-item">
        <div class="product-info">
            <img src="${item.image}" alt="Product Image">
            <span class="product-name">${item.name}</span>
        </div>
        <div>
        </div>
        <div class="item-price">£${item.price}</div>
        <div>
            <input type="number" class="quantity-input" value="1" min="1">
        </div>
        <div class="item-total"><i class="remove-btn fa-solid removeIcon fa-trash-can"></i></div>
    </div>
    `;

  cartContainer.innerHTML += itemCard;
  total += Number(item.price);
});

//This should update the total price when quantity is changed
function updateTotal() {
  let total = 0;
  const items = document.querySelectorAll(".cart-item");

  items.forEach((item) => {
    let price = parseFloat(
      item.querySelector(".item-price").textContent.replace("£", "")
    );
    let quantity = item.querySelector(".quantity-input").value;
    total += price * quantity;
  });
  totalPrice.innerHTML = `£${total.toFixed(2)}`;
}

totalPrice.innerHTML = `£${total}`;

document.querySelectorAll(".quantity-input").forEach((input) => {
  input.addEventListener("input", updateTotal);
});

// Removing each item from the cart
// For removing each item or deleting the item, I would need to get the index of the item whose button was clicked
// from the carts array, after remove the item from the array (the one in the local storage) using that index.

const removeBtns = document.querySelectorAll(".remove-btn");
let numberOfItemsInCart = 0;
function removeItem() {
  let cartList = JSON.parse(localStorage.getItem("cart")) || [];
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const productName =
        btn.parentElement.parentElement.querySelector(
          ".product-name"
        ).textContent;
      const itemIndex = cartList.findIndex((item) => item.name === productName);
      if (itemIndex !== -1) {
        cartList.splice(itemIndex, 1);
        localStorage.setItem("cart", JSON.stringify(cartList));
        btn.parentElement.parentElement.remove();
        updateTotal();
        displayCart();
        console.log("done");
      } else {
        console.log("not done");
      }
    });
  });
}

function displayCart() {
  if (cartItems.length > 0) {
    cartContainer.style.display = "block";
    emptyCartSection.style.display = "none";
    cartSummary.style.display = "flex";
  } else {
    cartContainer.style.display = "none";
    emptyCartSection.style.display = "flex";
    cartSummary.style.display = "none";
  }
}

displayCart();

removeItem();

// Adding number of items to the Cart container header
