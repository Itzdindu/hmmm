import cart from "./cart.js";
import products from "./product.js";

let app = document.getElementById("app");
let temporaryContent = document.getElementById("temporaryContent");

//load template file
const loadTemplate = () => {
  fetch("/template.html")
    .then((response) => response.text())
    .then((html) => {
      app.innerHTML = html;
      let contentTab = document.getElementsByClassName("contentTab");
      contentTab.innerHTML = temporaryContent.innerHTML;
      // temporaryContent.innerHTML = null;
      cart();
      initApp();
    });
};

loadTemplate();
const initApp = () => {
  //load list product
  console.log(products);
  let listProduct = document.querySelector(".listProduct");
  products.forEach((product) => {
    let newProduct = document.createElement(`div`);
    newProduct.classList.add("item");
    newProduct.innerHTML += ` 

    <a href="/detail.html?id=${product.id}">
              <img src="${product.image}"/>
</a>
              <h2>${product.name}</h2>
              <div class="price"></div>$${product.price}
              <button class="addCart"
              data-id="${product.id}">
              Add To Cart
              </button>

      `;
    listProduct.appendChild(newProduct);
  });
};

window.addEventListener("load", function () {
  let loadconn = this.document.getElementById("preloader");
  if (loadconn) {
    loadconn.style.transition = "opacity 150s ease";
    loadconn.style.opacity = "1";
    this.setTimeout(function () {
      loadconn.style.display = "none";
    }, 1500);
  }
});

// ===============

let body = document.querySelector(".wholeBody");
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

