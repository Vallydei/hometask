const cartBtn = document.querySelectorAll(".product__add");
const addOneItemBtn = document.querySelectorAll(
  ".product__quantity-control_inc"
);
const minusOneItemDtn = document.querySelectorAll(
  ".product__quantity-control_dec"
);
const valueOfProduct = document.querySelectorAll(".product__quantity-value");

const cart = document.querySelector(".cart__products");

const values = {
  0: 1,
  1: 1,
  2: 1,
  3: 1,
};

minusOneItemDtn.forEach((btn, btnIndex) =>
  btn.addEventListener("click", () => {
    valueOfProduct.forEach((el, elIndex) => {
      if (elIndex === btnIndex && values[elIndex] > 1) {
        values[elIndex] = values[elIndex] - 1;
        el.textContent = values[elIndex];
      }
    });
  })
);

addOneItemBtn.forEach((btn, btnIndex) =>
  btn.addEventListener("click", () => {
    valueOfProduct.forEach((el, elIndex) => {
      if (elIndex === btnIndex) {
        values[elIndex] = values[elIndex] + 1;
        el.textContent = values[elIndex];
      }
    });
  })
);

cartBtn.forEach((el, index) => {
  el.addEventListener("click", () => {
    const product = document.querySelector(`div[data-id='${index + 1}']`);
    const newProduct = product.cloneNode(true);
    newProduct.classList.add("cart__product");
    if (cart.querySelector(`div[data-id='${index + 1}']`)) {
      const value = +newProduct.querySelector(".cart__product-count")
        .textContent;
      newProduct.querySelector(".cart__product-count").textContent =
        value + values[index];
      cart.replaceChild(
        newProduct,
        cart.querySelector(`div[data-id='${index + 1}']`)
      );
    } else {
      newProduct.querySelector(".product__title").remove();
      newProduct.querySelector(".product__controls").remove();
      cart.appendChild(newProduct);
      const newDiv = document.createElement("div");
      newDiv.className = "cart__product-count";
      newDiv.textContent = values[index];
      newProduct.appendChild(newDiv);
    }
  });
});
