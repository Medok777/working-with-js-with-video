function calcCartPriceAndDelivery() {
  const cartItems = document.querySelectorAll(".cart-item");
  const totalPrieEl = document.querySelector(".total-price");
  const deliveryCost = document.querySelector(".delivery-cost");
  const cartDelivery = document.querySelector("[data-cart-delivery]");

  let totalPrice = 0;

  cartItems.forEach(function (item) {
    const amoutEl = item.querySelector("[data-counter]");
    const priceEl = item.querySelector(".price__currency");
    const currentPrice =
      parseInt(amoutEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += currentPrice;
  });

  totalPrieEl.innerText = totalPrice;

  if (totalPrice > 0) {
    cartDelivery.classList.remove("none");
  } else {
    cartDelivery.classList.add("none");
  }

  if (totalPrice >= 1200) {
    deliveryCost.classList.add("free");
    deliveryCost.innerText = "Бесплатно";
  } else {
    deliveryCost.classList.remove("free");
    deliveryCost.innerText = "300 ₽";
  }
}
