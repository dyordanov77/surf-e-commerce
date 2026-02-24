// Cart Buttons
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

// Colour Choice
const colourOptions = document.querySelectorAll(".colour-option");

colourOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // Remove the selected class from all options
    colourOptions.forEach((o) => o.classList.remove("selected"));

    // Add the selected class to the clicked option
    option.classList.add("selected");
  });
});

// Size Choice
const sizeOptions = document.querySelectorAll(".size-option");

sizeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    sizeOptions.forEach((o) => o.classList.remove("selected"));

    option.classList.add("selected");
  });
});
