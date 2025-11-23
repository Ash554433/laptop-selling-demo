  // laptop db
const laptops = [
  // Initial 29 Laptops
  { id: 1, name: "Dell XPS 13 (2024)", brand: "Dell", price: 1299, cpu: "i7", gpu: "Integrated", image: "https://placehold.co/400x300/4F46E5/ffffff?text=Dell+XPS" },
  { id: 2, name: "MacBook Air M3", brand: "Apple", price: 1099, cpu: "M3", gpu: "Integrated", image: "https://placehold.co/400x300/000000/ffffff?text=MacBook+Air" },
  { id: 3, name: "HP Spectre x360", brand: "HP", price: 1499, cpu: "i7", gpu: "Integrated", image: "https://placehold.co/400x300/10B981/ffffff?text=HP+Spectre" },
  { id: 4, name: "Lenovo Legion 5", brand: "Lenovo", price: 1199, cpu: "i5", gpu: "RTX 4060", image: "https://placehold.co/400x300/EF4444/ffffff?text=Legion+5" },
  { id: 5, name: "Asus ROG Zephyrus G16", brand: "Asus", price: 1999, cpu: "R9", gpu: "RTX 4080", image: "https://placehold.co/400x300/F59E0B/ffffff?text=ROG+Zephyrus" },
  { id: 6, name: "Dell G15 Gaming", brand: "Dell", price: 950, cpu: "i5", gpu: "RTX 3050", image: "https://placehold.co/400x300/06B6D4/ffffff?text=Dell+G15" },
  { id: 7, name: "Apple MacBook Pro 14", brand: "Apple", price: 2199, cpu: "M3 Pro", gpu: "M3 Pro", image: "https://placehold.co/400x300/000000/ffffff?text=MacBook+Pro" },
  { id: 8, name: "Lenovo ThinkPad X1", brand: "Lenovo", price: 1550, cpu: "i7", gpu: "Integrated", image: "https://placehold.co/400x300/1D4ED8/ffffff?text=ThinkPad+X1" },
  { id: 9, name: "MSI Raider GE78", brand: "MSI", price: 2499, cpu: "i9", gpu: "RTX 4090", image: "https://placehold.co/400x300/9333EA/ffffff?text=MSI+Raider" },
  // Added 20 new laptops
  { id: 10, name: "Acer Swift 5", brand: "Acer", price: 850, cpu: "i5", gpu: "Integrated", image: "https://placehold.co/400x300/6B7280/ffffff?text=Acer+Swift" },
  { id: 11, name: "Microsoft Surface Laptop 5", brand: "Microsoft", price: 1350, cpu: "i7", gpu: "Integrated", image: "https://placehold.co/400x300/4F46E5/ffffff?text=Surface+5" },
  { id: 12, name: "Razer Blade 16", brand: "Razer", price: 2899, cpu: "i9", gpu: "RTX 4070", image: "https://placehold.co/400x300/1F2937/ffffff?text=Razer+16" },
  { id: 13, name: "LG Gram 17", brand: "LG", price: 1100, cpu: "i5", gpu: "Integrated", image: "https://placehold.co/400x300/374151/ffffff?text=LG+Gram" },
  { id: 14, name: "Samsung Galaxy Book 4 Ultra", brand: "Samsung", price: 2300, cpu: "i9", gpu: "RTX 4070", image: "https://placehold.co/400x300/8B5CF6/ffffff?text=Galaxy+Book" },
  { id: 15, name: "Asus ZenBook Duo", brand: "Asus", price: 1700, cpu: "i7", gpu: "Integrated", image: "https://placehold.co/400x300/059669/ffffff?text=ZenBook+Duo" },
  { id: 16, name: "Dell Precision 7780", brand: "Dell", price: 3500, cpu: "i9", gpu: "RTX 5000", image: "https://placehold.co/400x300/DC2626/ffffff?text=Precision" },
  { id: 17, name: "HP Omen 16", brand: "HP", price: 1600, cpu: "R7", gpu: "RTX 4060", image: "https://placehold.co/400x300/FBBF24/ffffff?text=HP+Omen" },
  { id: 18, name: "Lenovo IdeaPad Flex 5", brand: "Lenovo", price: 799, cpu: "R5", gpu: "Integrated", image: "https://placehold.co/400x300/0E7490/ffffff?text=IdeaPad+Flex" },
  { id: 19, name: "Apple MacBook Air M2 15\"", brand: "Apple", price: 1199, cpu: "M2", gpu: "Integrated", image: "https://placehold.co/400x300/000000/ffffff?text=MacBook+M2" },
  { id: 20, name: "MSI Stealth 18", brand: "MSI", price: 2200, cpu: "i7", gpu: "RTX 4080", image: "https://placehold.co/400x300/9333EA/ffffff?text=MSI+Stealth" },
  { id: 21, name: "Acer Predator Helios 300", brand: "Acer", price: 1800, cpu: "i7", gpu: "RTX 4070", image: "https://placehold.co/400x300/F97316/ffffff?text=Helios+300" },
  { id: 22, name: "Microsoft Surface Pro 9", brand: "Microsoft", price: 1050, cpu: "i5", gpu: "Integrated", image: "https://placehold.co/400x300/4F46E5/ffffff?text=Surface+Pro" },
  { id: 23, name: "Razer Blade 14", brand: "Razer", price: 1999, cpu: "R9", gpu: "RTX 4060", image: "https://placehold.co/400x300/1F2937/ffffff?text=Razer+14" },
  { id: 24, name: "LG Ultra PC", brand: "LG", price: 900, cpu: "R7", gpu: "Integrated", image: "https://placehold.co/400x300/374151/ffffff?text=LG+Ultra" },
  { id: 25, name: "Samsung Galaxy Book 3 360", brand: "Samsung", price: 1450, cpu: "i7", gpu: "Integrated", image: "https://placehold.co/400x300/8B5CF6/ffffff?text=Book+360" },
  { id: 26, name: "Asus Vivobook 15", brand: "Asus", price: 650, cpu: "i5", gpu: "Integrated", image: "https://placehold.co/400x300/059669/ffffff?text=Vivobook+15" },
  { id: 27, name: "Dell Latitude 5400", brand: "Dell", price: 980, cpu: "i5", gpu: "Integrated", image: "https://placehold.co/400x300/DC2626/ffffff?text=Latitude" },
  { id: 28, name: "HP Pavilion Aero 13", brand: "HP", price: 999, cpu: "R7", gpu: "Integrated", image: "https://placehold.co/400x300/FBBF24/ffffff?text=Pavilion+Aero" },
  { id: 29, name: "Lenovo ThinkBook 14", brand: "Lenovo", price: 1150, cpu: "i7", gpu: "Integrated", image: "https://placehold.co/400x300/0E7490/ffffff?text=ThinkBook+14" },
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
      <div class="laptop-card"">

        <div class="laptop-card-img-container"
        data-id="${laptop.id}">
          <img class="laptop-card-img">
        </div>

        <div class="laptop-card-info">
          <p style="font-weight: bold;">${laptop.name}</p>
          <p>Đánh giá: 5 sao</p>
          <p>Giá cả: 25.000.000 VNĐ</p>
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
          <button class="add-to-cart-button">Thêm vào giỏ</button>
        </div>
      </div>
      `;
    }
  }); 
  
  if (gridString === '') {
    console.log('YOOOOOOOOOO');
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

// when click a dropdown option
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


