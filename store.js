const products = document.querySelectorAll(".product");
const orderList = document.querySelector("#order-list");
const totalPriceElem = document.querySelector("#total-price");
const buyBtn = document.querySelector("#buy-button");

let totalPrice = 0;

products.forEach(product => {
  product.addEventListener("click", () => {
    const img = product.querySelector("img");
    const price = parseFloat(product.querySelector(".price").innerHTML.slice(1).replace(',', '.'));
    totalPrice += price;
    const li = document.createElement("li");
    li.innerHTML = `
      <div style="position: relative;">
        <img src="${img.src}" style="width: 80px; height: 80px; border: 2px solid; margin-left: 20px; display: block;">
        <div class="delete-icon" style="position: absolute; top: 0; right: 0; display: none; cursor: pointer;">
          <span style="background-color: white; color: red; padding: 5px; font-weight: bold;">X</span>
        </div>
      </div>
      <span style="display: block; margin-top: 5px; margin-left: 20px; font-weight: 500;">€${price.toFixed(2).toString().replace('.', ',')}</span>
    `;

    const deleteIcon = li.querySelector(".delete-icon");
    deleteIcon.addEventListener("click", () => {
      totalPrice -= price;
      orderList.removeChild(li);
      totalPriceElem.innerHTML = `Total: €${totalPrice.toFixed(2).toString().replace('.', ',')}`;
    });

    const productContainer = li.querySelector("div");
    productContainer.addEventListener("mouseover", () => {
      deleteIcon.style.display = "block";
    });

    productContainer.addEventListener("mouseout", () => {
      deleteIcon.style.display = "none";
    });

    orderList.appendChild(li);
    totalPriceElem.innerHTML = `Total: €${totalPrice.toFixed(2).toString().replace('.', ',')}`;
  });
});

buyBtn.addEventListener("click", () => {
  totalPrice = 0;
  orderList.innerHTML = "";
  totalPriceElem.innerHTML = "Total: €0";
  alert("Enjoy your meal!");
});
