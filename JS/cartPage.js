let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-items-container");
const totalElement = document.getElementById("cart-total");

function renderCartPage() {
  container.innerHTML = "";

  if (cartItems.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    totalElement.textContent = "$0.00";
    return;
  }

  let total = 0;

  cartItems.forEach((item) => {
    const priceNumber = parseFloat(
      item.price.replace("$", "").replace(",", ".")
    );
    total += priceNumber;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-page-item");

    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      
      <div class="item-info">
        <h3>${item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>Colour: ${item.colour}</p>
        <p>Size: ${item.size}</p>
      </div>

      <button class="remove-btn">Remove</button>
    `;

    container.appendChild(itemDiv);

    const removeBtn = itemDiv.querySelector(".remove-btn");
    removeBtn.addEventListener("click", () => {
      cartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      renderCartPage();
    });
  });

  totalElement.textContent = `$${total.toFixed(2)}`;
}

renderCartPage();
