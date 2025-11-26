// laptop db
const laptops = [
  { id: 1, name: "Dell XPS 13 (2024)", brand: "Dell", price: 12000000, cpu: "i7", gpu: "Integrated" },
  { id: 2, name: "MacBook Air M3", brand: "Apple", price: 13000000, cpu: "M3", gpu: "Integrated"},
  { id: 3, name: "HP Spectre x360", brand: "HP", price: 12000000, cpu: "i7", gpu: "Integrated"},
  { id: 4, name: "Lenovo Legion 5", brand: "Lenovo", price: 12000000, cpu: "i5", gpu: "RTX 4060"},
  { id: 5, name: "Asus ROG Zephyrus G16", brand: "Asus", price: 30000000, cpu: "R9", gpu: "RTX 4080"},
  { id: 6, name: "Dell G15 Gaming", brand: "Dell", price: 30000000, cpu: "i5", gpu: "RTX 3050"},
  { id: 7, name: "Apple MacBook Pro 14", brand: "Apple", price: 13000000, cpu: "M3 Pro", gpu: "M3 Pro"},
  { id: 8, name: "Lenovo ThinkPad X1", brand: "Lenovo", price: 13000000, cpu: "i7", gpu: "Integrated"},
  { id: 9, name: "MSI Raider GE78", brand: "MSI", price: 30000000, cpu: "i9", gpu: "RTX 4090"},
  { id: 10, name: "Acer Swift 5", brand: "Acer", price: 30000000, cpu: "i5", gpu: "Integrated"},
  { id: 11, name: "Microsoft Surface Laptop 5", brand: "Microsoft", price: 27900000, cpu: "i7", gpu: "Integrated"},
  { id: 12, name: "Razer Blade 16", brand: "Razer", price: 13000000, cpu: "i9", gpu: "RTX 4070"},
  { id: 13, name: "LG Gram 17", brand: "LG", price: 27900000, cpu: "i5", gpu: "Integrated"},
  { id: 14, name: "Samsung Galaxy Book 4 Ultra", brand: "Samsung", price: 13000000, cpu: "i9"},
  { id: 15, name: "Asus ZenBook Duo", brand: "Asus", price: 13000000, cpu: "i7", gpu: "Integrated"},
  { id: 16, name: "Dell Precision 7780", brand: "Dell", price: 30000000, cpu: "i9", gpu: "RTX 5000"},
  { id: 17, name: "HP Omen 16", brand: "HP", price: 27900000, cpu: "R7", gpu: "RTX 4060"},
  { id: 18, name: "Lenovo IdeaPad Flex 5", brand: "Lenovo", price: 13000000, cpu: "R5", gpu: "Integrated"},
  { id: 19, name: "Apple MacBook Air M2 15\"", brand: "Apple", price: 27900000, cpu: "M2", gpu: "Integrated"},
  { id: 20, name: "MSI Stealth 18", brand: "MSI", price: 13000000, cpu: "i7", gpu: "RTX 4080"},
  { id: 21, name: "Acer Predator Helios 300", brand: "Acer", price: 13000000, cpu: "i7", gpu: "RTX 4070" },
  { id: 22, name: "Microsoft Surface Pro 9", brand: "Microsoft", price: 30000000, cpu: "i5", gpu: "Integrated"},
  { id: 23, name: "Razer Blade 14", brand: "Razer", price: 27900000, cpu: "R9", gpu: "RTX 4060"},
  { id: 24, name: "LG Ultra PC", brand: "LG", price: 27900000, cpu: "R7", gpu: "Integrated"},
  { id: 25, name: "Samsung Galaxy Book 3 360", brand: "Samsung", price: 27900000, cpu: "i7", gpu: "Integrated"},
  { id: 26, name: "Asus Vivobook 15", brand: "Asus", price: 27900000, cpu: "i5", gpu: "Integrated"},
  { id: 27, name: "Dell Latitude 5400", brand: "Dell", price: 30000000, cpu: "i5", gpu: "Integrated"},
  { id: 28, name: "HP Pavilion Aero 13", brand: "HP", price: 27900000, cpu: "R7", gpu: "Integrated"},
  { id: 29, name: "Lenovo ThinkBook 14", brand: "Lenovo", price: 27900000, cpu: "i7", gpu: "Integrated"},
];

const filter = {
  brand: 'all',
  cpu: 'all'
};

// function that update the laptop grid
function updateLaptopGrid() {
  console.log('Start updating laptop grid!');
  // target the grid
  const laptopGrid = document.querySelector('.grid-product');

  // sum up the content in string form\
  let gridString = '';
  // loop through db
  laptops.forEach(laptop => {
    if (laptop.brand.toLowerCase() === filter.brand.toLowerCase() || filter.brand === 'all')
    {
      gridString += `
      <div class="laptop-card">

        <div class="laptop-card-img-container"
        data-id="${laptop.id}">
          <img class="laptop-card-img"
            src="${randomImg()}"
            style="object-fit: cover;">
        </div>

        <div class="laptop-card-info">
          <p style="font-weight: bold; margin-bottom: 4px; font-size: 20px;">${laptop.name}</p>
          <p>Đánh giá: 5 sao</p>
          <p style="font-size: 18px; margin-top: 4px; color: rgb(230, 57, 70)">Giá: ${priceFormat(laptop.price)} VNĐ</p>
        </div>

        <div class="laptop-card-specs">
          <div style="display: flex; justify-content: space-between;
          margin-bottom: 8px;">
            <p>CPU: ${laptop.cpu}</p>
            <p>GPU: ${laptop.gpu}</p>
          </div>
          <p>Màn hình: FHD 16"</p>
          <div style="display: flex; justify-content: space-between;
          margin-top: 8px;">
            <p>RAM: 18GB</p>
            <p>Ổ cứng: 1TB</p>
          </div>
        </div>

        <div class="laptop-card-features">
          <button class="compare-button">So sánh</button>
          <button class="add-to-cart-button" data-id="${laptop.id}">Thêm vào giỏ</button>
        </div>
      </div>
      `;
    }
  }); 
  
  if (gridString === '') {
    gridString = `<p style="font-size: 24px;">Không có sản phẩm.</p>`;
  }
  // change the grid HTML content 
  laptopGrid.innerHTML = gridString;

}

updateLaptopGrid();


// dealing with dropdown filter buttons
const btn = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.dropdown-content');

btn.addEventListener('click', () => {
  dropdownContent.classList.add('show');
});

// when click one of the dropdown option
const listButtonDropdown = document.querySelectorAll('.filter-dropdown-button');
listButtonDropdown.forEach(btn => {
  btn.addEventListener('click', () => {
    dropdownContent.classList.remove('show');

    const content = btn.getAttribute('data-value');

    const dropdownButton = document.querySelector('.dropdown-button');
    dropdownButton.textContent = content;

    filter.brand = content.toLowerCase();
    updateLaptopGrid();
    addLaptopLink();
    addToCartEnable();
  });
});


// add event when clicking a laptop card
function addLaptopLink() {
  const listLaptopCard = document.querySelectorAll('.laptop-card-img-container');

  listLaptopCard.forEach(laptopCard => {
    const laptopID = laptopCard.dataset.id;
    laptopCard.addEventListener('click', () => {
      window.location.href = 'product.html?id=' + laptopID;
    });
  });
}
addLaptopLink();


// Add interaction for login button
function loginButton() {
  const loginLayout = document.querySelector('.login-overlay');
  const loginButtonEle = document.querySelector('.login-button');
  loginButtonEle.addEventListener('click', () => {
    loginLayout.classList.add('show');
  });

  const exitLoginButton = document.querySelector('.exit-login-button');
  exitLoginButton.addEventListener('click', ()=> {
    loginLayout.classList.remove('show');
  });
}
loginButton();

// get a random image 
function randomImg() {
  const num = Math.floor(Math.random() * 7) + 1;
  return `img/laptop${num}.jpg`;
}

// interaction for shop logo
document.querySelector('.shop-logo').addEventListener('click', () => {
  window.location.href = 'Yolo.html';
});


// interaction for cart button 
function gotoCart() {
  const cartButtonEle = document.querySelector('.cart-button');
  cartButtonEle.addEventListener('click', () => {
    window.location.href = 'cart.html';
  });
}
gotoCart();


// cart action

// quantity of items inside the cart
function cartQuantity() {
  let quantity = 0;
  Object.entries(cart).forEach(([key, value]) => {
    quantity += value;
  });
  console.log(quantity);
  return quantity;
}

function updateCartQuantity() {
  const cartQuantityEle = document.querySelector('.cart-button');
  cartQuantityEle.innerText = `Giỏ hàng (${cartQuantity()})`;
}


// receive cart from local ( initial one if didn't found anything)
let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart) {
  cart = {};
}

// interaction for add to cart button on each laptop card
function addToCartEnable() {
  const addToCartButtonList = document.querySelectorAll('.add-to-cart-button');
  addToCartButtonList.forEach(addToCartButton => {
    const laptopId = addToCartButton.dataset.id;
    addToCartButton.addEventListener('click', () => {
      if (cart[laptopId]) {
        cart[laptopId] += 1;
      } else {
        cart[laptopId] = 1;
      }
      saveToLocal();
      updateCartQuantity();
    });
  });
}

addToCartEnable();

// save cart object to localStorage
function saveToLocal() {
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(JSON.parse(localStorage.getItem("cart")));
}

// reset localStorage
function resetLocalStorage() {
  localStorage.clear();
}


updateCartQuantity();


// price format 
function priceFormat(price) {
  let priceStr = price.toString();

  const left = priceStr.slice(0, priceStr.length-6);

  const temp = priceStr.slice(-6);

  const middle = temp.slice(0, 3);
  const right = temp.slice(-3);

  console.log(left, right);
  priceStr = left + '.' + middle + '.' + right;
  return priceStr;
}
