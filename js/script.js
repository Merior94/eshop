console.log("Hello world!");

getAllItems();

function createItemCard(data) {
  const itemCardTemplate = document.getElementById("product-card-template");
  const itemsContainer = document.getElementById("best-selling-container");
  var element = itemCardTemplate.content.cloneNode(true);

  element.querySelector(".product-brand").textContent = data.brand;
  element.querySelector(".product-short-desc").textContent = data.description;
  element.querySelector(".price").textContent = "$" + data.price;

  itemsContainer.appendChild(element);

  return element;
}

async function getAllItems() {
  const response = await fetch("http://127.0.0.1:8080/v1/shop/items");
  const data = await response.json();

  data.forEach((element) => {
    console.log(element);
    createItemCard(element);
  });
}

function gotoProductPage() {
  console.log(window.location.href);
  const currentURL = window.location.href;
  // Current URL: https://my-website.com/page_a
  const nextURL = currentURL + "/product";
  const nextTitle = "My new page title";
  const nextState = { additionalInformation: "Updated the URL with JS" };

  // This will create a new entry in the browser's history, without reloading
  window.history.pushState(nextState, nextTitle, nextURL);

  // This will replace the current entry in the browser's history, without reloading
  window.history.replaceState(nextState, nextTitle, nextURL);
}

/////////

function changeColor(newColor) {
  console.log("changeColor");
  const elem = document.getElementById("div1");
  elem.style.color = newColor;
}

async function changeImg(src) {
  console.log("Change img");
  const response = await fetch(src);
  const blob = await response.blob();
  document.getElementById("img").src = URL.createObjectURL(blob);
  console.log("ladowanie" + src);
}

async function queryJava() {
  console.log("queryJava");
  const response = await fetch("http://127.0.0.1:8080/v1/shop/item");
  const data = await response.json();
  console.log(data);
}

//queryJava();
