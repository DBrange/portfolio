alert('En ocasiones el api no descarga algunas imagenes, por lo tanto fueron reemplazadas por una imagen')

const d = document;
const GET_API = `https://api.escuelajs.co/api/v1/products`;

let shoppingCartArray = [];
let total = 0;
let productContainer = d.querySelector('.shop-items');
let totalElement = d.querySelector(".cart-total-title");

// Product request to the server.
let res = await fetch(GET_API);
let data = await res.json();

// Limited to 4 products.
let productsArray = data.slice(0, 4);

// Print products on screen
productsArray.forEach(el => {
  productContainer.innerHTML += `
    <div class="shop-item" id='${el.id}'>
      <span class="shop-item-title">${el.title}</span>
      <img class="shop-item-image" src="${el.images[0] || 'images/shirt.jpg'}">
      <div class="shop-item-details">
          <span class="shop-item-price">$${el.price}</span>
          <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
      </div>
  </div>
  `;
});

let addBtns = d.querySelectorAll(".shop-item-button");
addBtns = [...addBtns];
let cartContainer = d.querySelector('.cart-items');

addBtns.forEach(el => {
  el.addEventListener('click', e => {
    // ADD PRODUCTS TO CART.

    // Find the product ID.
    let actualID = parseInt(e.target.parentNode.parentNode.id);

    // With the ID find the current object.
    let actualProduct = productsArray.find((item) => item.id === actualID);

    if (actualProduct.quantity === undefined) {
      actualProduct.quantity = 1;
    }

    // Ask if the product I'm adding already exists.
    let existe = false;
    shoppingCartArray.forEach((el) => {
      if (actualID == el.id) {
        existe = true;
      }
    });

    if (existe) {
      actualProduct.quantity++;
    } else {
      shoppingCartArray.push(actualProduct);
    }

    drawItems();

    // Add the product to the cart array.
    getTotal();
    // Update the total value.
    updateNumberOfItems();

    // Delete the items.
    removeItems();
  });
});

function getTotal() {
  total = shoppingCartArray.reduce((sum, item) => {
    return sum + item.quantity * item.price;
  }, 0);
  totalElement.textContent = `$${total}`;
};

function drawItems() {
  cartContainer.innerHTML = "";

  shoppingCartArray.forEach((el) => {
    cartContainer.innerHTML += `
    <div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${el.images[0] || 'images/shirt.jpg'}" width="100" height="100">
            <span class="cart-item-title">${el.title}</span>
        </div>
        <span class="cart-price cart-column">$${el.price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" min="1" type="number" value="${el.quantity}">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
    </div>
  `;
  });
  removeItems();
};

function updateNumberOfItems() {
  let inputNumber = d.querySelectorAll('.cart-quantity-input');
  inputNumber = [...inputNumber];
  
  inputNumber.forEach(el => {
    el.addEventListener('click', (e) => {
      // Get book title.
      let actualBookTitle =
        e.target.parentElement.parentElement.childNodes[1].innerText;
      let actualBookQuantity = parseInt(e.target.value);

      // Find the object with that title.
      let actualBookObject = shoppingCartArray.find(
        (item) => item.title === actualBookTitle
      );

      // Update the quantity number.
      actualBookObject.quantity = actualBookQuantity;

      // Update the total price.
      getTotal();
    });
  });
};
function removeItems() {
  let removeBtns = d.querySelectorAll('.btn-danger');
  removeBtns = [...removeBtns];

  removeBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      // Get book title.
      let actualBookTitle =
        e.target.parentElement.parentElement.childNodes[1].innerText;
      // Fetch the products object from cart.
      let actualBookObject = shoppingCartArray.find(
        (item) => item.title === actualBookTitle
      );

      // Remove the array of products from cart.
      shoppingCartArray = shoppingCartArray.filter(
        (item) => item !== actualBookObject
      );
      console.log(shoppingCartArray);

      drawItems();

      updateNumberOfItems();

      // Update the total price.
      getTotal();
    });
  });
};

  