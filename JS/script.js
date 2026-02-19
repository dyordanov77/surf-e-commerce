// Cart Buttons
const cartButton = document.getElementById("cartIcon");
const cart = document.getElementById("cart");
const closeCarts = document.getElementById("closeCart");

function openCart() {
  cart.style.display = "block";
}

function closeCart() {
  cart.style.display = "none";
}

cartButton.addEventListener("click", openCart);
closeCarts.addEventListener("click", closeCart);
