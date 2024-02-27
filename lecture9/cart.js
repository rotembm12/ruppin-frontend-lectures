const getRemoveFromCartButton = (product) => {
  const button = document.createElement("button");
  button.textContent = "Remove from Cart";
  button.addEventListener("click", () => {
    cart = cart.filter((item) => item.name !== product.name);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems("#cart-items");
  });
  return button;
};
const createCartItemElement = (product) => {
  const element = document.createElement("div");
  element.classList.add("cart-item");
  element.classList.add("product");
  element.innerHTML = `
      <img src="${product.image}" alt="Product Image" />
      <h3>${product.name}</h3>
      <p>Price: $${product.price.toFixed(2)}</p>
    `;
  element.appendChild(getRemoveFromCartButton(product));
  return element;
};

const displayCartItems = (containerSelector) => {
  const container = document.querySelector(containerSelector);
  container.innerHTML = "";
  cart.forEach((product) => {
    container.appendChild(createCartItemElement(product));
  });
};
if (cart.length > 0) {
  // Get cart items from local storage

  // Render cart items
  displayCartItems("#cart-items");
} else {
  // Cart is empty
  const emptyCartMessage = document.createElement("p");
  emptyCartMessage.textContent = "Your cart is empty";
  document.body.appendChild(emptyCartMessage);
}
