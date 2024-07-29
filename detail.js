import products from "./product.js";
import cart from "./cart.js";
let app = document.getElementById("app");
let temporaryContent = document.getElementById("temporaryContent");

//load template file
const loadTemplate = () => {
  fetch("/template.html")
    .then((response) => response.text())
    .then((html) => {
      app.innerHTML = html;
      let contentTab = document.getElementsByClassName("contentTab");
      contentTab.innerHTML = temporaryContent;
      //   temporaryContent.innerHTML = null;
      cart();
      initApp();
    });
};

loadTemplate();
const initApp = () => {
  let idProduct = new URLSearchParams(window.location.search).get("id");
  let info = products.filter((value) => value.id == idProduct)[0];
  if (info) {
    // Window.location.href = "./";
  }

  // betterrrrrrrrrrrrrr error=========================

  let detail = document.querySelector(".detail");
  detail.querySelector(".image img").src = info.image;
  detail.querySelector(".name").innerText = info.name;
  detail.querySelector(".price").innerText = "$" + info.price;
  detail.querySelector(".discription").innerText = info.discription;
  detail.querySelector(".addCart").dataset.id = idProduct;
  // similar product

  let listProduct = document.querySelector(".listProduct");
  listProduct.innerHTML = null;
  products
    .filter((value) => value.id != idProduct)
    .forEach((product) => {
      let newProduct = document.createElement(`div`);
      newProduct.classList.add("item");
      newProduct.innerHTML = ` 

    <a href="/detail.html?id=${product.id}">
              <img src="${product.image}"/>
</a>
              <h2>${product.name}</h2>
              <div class="price">$${product.price}</div>
              <button class="addCart"
              data-id="${product.id}">
              Add To Cart
              </button>

      `;
      listProduct.appendChild(newProduct);
    });
};

// };
