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
    const targetProduct = cart.querySelector(`div[data-id='${index + 1}']`);
    if (targetProduct) {
      const value = +targetProduct.querySelector(".cart__product-count")
        .textContent;
      targetProduct.querySelector(".cart__product-count").textContent =
        value + values[index];
    } else {
      const product = document.querySelector(`div[data-id='${index + 1}']`);
      cart.insertAdjacentHTML(
        "beforeend",
        `<div class="cart__product" data-id=${index + 1}>
            <img class="cart__product-image" src=${product
              .querySelector(".product__image")
              .getAttribute("src")}>
            <div class="cart__product-count">${
              product.querySelector(".product__quantity-value").textContent
            }</div>
         </div>`
      );
    }
  });
});
