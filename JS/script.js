// CART HOVER LOGIC
const cartButton = document.getElementById("cartIcon");
const cart = document.getElementById("cart");

function openCart() {
  cart.style.display = "block";
}

function closeCart() {
  cart.style.display = "none";
}

cartButton.addEventListener("mouseenter", openCart);
cart.addEventListener("mouseleave", closeCart);

// COLOUR CHOICE LOGIC
const colourOptions = document.querySelectorAll(".colour-option");
let selectedColour = null;

colourOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // Remove the selected class from all options
    colourOptions.forEach((o) => o.classList.remove("selected"));

    // Add the selected class to the clicked option
    option.classList.add("selected");

    selectedColour = option.id; // Store the selected colour's ID for later use
  });
});

// SIZE CHOICE LOGIC
const sizeOptions = document.querySelectorAll(".size-option");
let selectedSize = null;

sizeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    sizeOptions.forEach((o) => o.classList.remove("selected"));

    option.classList.add("selected");

    selectedSize = option.textContent; // Store the selected size's text for later use
  });
});

let cartItems = JSON.parse(localStorage.getItem("cart")) || []; // Load previous cart items if exist

// ADD TO CART BUTTON
const addToCartButton = document.getElementById("add-to-cart-btn");

addToCartButton.addEventListener("click", () => {
  if (!selectedColour || !selectedSize) {
    alert("Please select a colour and size before adding to cart.");
    return;
  }
  const productName = document.querySelector(".product-info h2").textContent;
  const productPrice = document.querySelector(".product-info h3").textContent;
  const productImage = document.getElementById("main-photo").src;

  const newItem = {
    id: Date.now(), // Unique ID for the item
    name: productName,
    price: productPrice,
    colour: selectedColour,
    size: selectedSize,
    image: productImage,
  };

  cartItems.push(newItem);
  localStorage.setItem("cart", JSON.stringify(cartItems)); // Save cart items to localStorage

  renderCart();
});

// RENDER CART ITEMS
function renderCart() {
  const cartContainer = document.querySelector(".cart-items");
  const cartCountBtn = document.querySelector(".viewCart");

  cartContainer.innerHTML = "";

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>No products yet</p>";
    cartCountBtn.textContent = "View cart (0)";
    return;
  }

  cartItems.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    itemDiv.innerHTML = `
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}">
      </div>

      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p class="cart-price">${item.price}</p>
        <p class="cart-variant">Colour: ${item.colour}</p>
        <p class="cart-variant">Size: ${item.size}</p>
      </div>

      <button class="remove-btn">✕</button>
    `;

    cartContainer.appendChild(itemDiv);

    // STEP 2 — Attach the listener directly here
    const removeBtn = itemDiv.querySelector(".remove-btn");
    removeBtn.addEventListener("click", function () {
      // remove this item
      cartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      renderCart(); // re-render cart
    });
  });

  cartCountBtn.textContent = `View cart (${cartItems.length})`;
}

renderCart(); // Initial render of cart items on page load
