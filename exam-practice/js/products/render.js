function renderProducts() {
  const productsContainer = document.getElementById("products-list");

  // loop throught productsToRender and create a card for each product
  productsToRender.forEach((product) => {
    const productContainer = document.createElement("div");
    productContainer.className = "prod-card";

    productsContainer.appendChild(productContainer);

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.style.width = "100%";
    productImage.style.borderRadius = "10px";
    productContainer.appendChild(productImage);

    const productName = document.createElement("h3");
    productName.textContent = product.name;
    productName.style.textAlign = "center";
    productContainer.appendChild(productName);

    const productPrice = document.createElement("p");
    productPrice.textContent = `₪${product.price}`;
    productPrice.style.textAlign = "center";
    productContainer.appendChild(productPrice);

    const productTags = document.createElement("div");
    productTags.style.display = "flex";
    productTags.style.flexWrap = "wrap";
    productTags.style.gap = "5px";
    productTags.style.justifyContent = "center";
    productTags.style.alignItems = "center";

    productContainer.appendChild(productTags);
  });
}
renderProducts();
