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
