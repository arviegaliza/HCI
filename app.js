const products = [
 
  {
    id: 1,
    title: "Wireless Headphones",
    category: "Electronics",
    price: 99.99,
    stock: 20,
    image: "https://via.placeholder.com/300x200?text=Headphones",
    colors: ["Black", "White", "Blue"],
    sizes: []
  },
  {
    id: 2,
    title: "Sports Running Shoes",
    category: "Footwear",
    price: 59.99,
    stock: 15,
    image: "https://via.placeholder.com/300x200?text=Shoes",
    colors: ["Red", "Black"],
    sizes: ["6", "7", "8", "9", "10"]
  },
  {
    id: 3,
    title: "Classic White T-Shirt",
    category: "Apparel",
    price: 12.99,
    stock: 50,
    image: "https://via.placeholder.com/300x200?text=T-Shirt",
    colors: ["White"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 4,
    title: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    stock: 8,
    image: "https://via.placeholder.com/300x200?text=Smart+Watch",
    colors: ["Black", "Silver"],
    sizes: []
  },
  {
    id: 5,
    title: "Coffee Maker",
    category: "Home Appliances",
    price: 49.99,
    stock: 0,
    image: "https://via.placeholder.com/300x200?text=Coffee+Maker",
    colors: [],
    sizes: []
  },
  {
    id: 6,
    title: "Leather Wallet",
    category: "Accessories",
    price: 35.0,
    stock: 10,
    image: "https://via.placeholder.com/300x200?text=Wallet",
    colors: ["Brown", "Black"],
    sizes: []
  },
  {
    id: 7,
    title: "Bluetooth Speaker",
    category: "Electronics",
    price: 45.99,
    stock: 25,
    image: "https://via.placeholder.com/300x200?text=Speaker",
    colors: ["Black", "Gray"],
    sizes: []
  },
  {
    id: 8,
    title: "Denim Jeans",
    category: "Apparel",
    price: 29.99,
    stock: 30,
    image: "https://via.placeholder.com/300x200?text=Jeans",
    colors: ["Blue", "Black"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 9,
    title: "Office Chair",
    category: "Home Appliances",
    price: 89.99,
    stock: 12,
    image: "https://via.placeholder.com/300x200?text=Chair",
    colors: ["Black", "Gray"],
    sizes: []
  },
  {
    id: 10,
    title: "Digital Camera",
    category: "Electronics",
    price: 299.99,
    stock: 5,
    image: "https://via.placeholder.com/300x200?text=Camera",
    colors: ["Black", "Silver"],
    sizes: []
  },
  {
    id: 11,
    title: "Sneakers",
    category: "Footwear",
    price: 69.99,
    stock: 18,
    image: "https://via.placeholder.com/300x200?text=Sneakers",
    colors: ["White", "Gray", "Black"],
    sizes: ["6", "7", "8", "9", "10", "11"]
  },
  {
    id: 12,
    title: "Winter Jacket",
    category: "Apparel",
    price: 79.99,
    stock: 20,
    image: "https://via.placeholder.com/300x200?text=Jacket",
    colors: ["Navy", "Black", "Red"],
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: 13,
    title: "Gaming Keyboard",
    category: "Electronics",
    price: 59.99,
    stock: 14,
    image: "https://via.placeholder.com/300x200?text=Keyboard",
    colors: ["Black", "RGB"],
    sizes: []
  },
  {
    id: 14,
    title: "Microwave Oven",
    category: "Home Appliances",
    price: 119.99,
    stock: 9,
    image: "https://via.placeholder.com/300x200?text=Microwave",
    colors: ["White", "Silver"],
    sizes: []
  },
  {
    id: 15,
    title: "Sunglasses",
    category: "Accessories",
    price: 19.99,
    stock: 40,
    image: "https://via.placeholder.com/300x200?text=Sunglasses",
    colors: ["Black", "Brown", "Gray"],
    sizes: []
  },
  {
    id: 16,
    title: "Smartphone",
    category: "Electronics",
    price: 699.99,
    stock: 6,
    image: "https://via.placeholder.com/300x200?text=Smartphone",
    colors: ["Black", "Silver", "Gold"],
    sizes: []
  },
  {
    id: 17,
    title: "Laptop Backpack",
    category: "Accessories",
    price: 49.99,
    stock: 22,
    image: "https://via.placeholder.com/300x200?text=Backpack",
    colors: ["Gray", "Blue", "Black"],
    sizes: []
  },
  {
    id: 18,
    title: "Casual Hoodie",
    category: "Apparel",
    price: 35.99,
    stock: 35,
    image: "https://via.placeholder.com/300x200?text=Hoodie",
    colors: ["Black", "Gray", "White"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 19,
    title: "Running Shorts",
    category: "Apparel",
    price: 15.99,
    stock: 40,
    image: "https://via.placeholder.com/300x200?text=Shorts",
    colors: ["Black", "Navy"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 20,
    title: "Electric Kettle",
    category: "Home Appliances",
    price: 29.99,
    stock: 18,
    image: "https://via.placeholder.com/300x200?text=Kettle",
    colors: ["White", "Black"],
    sizes: []
  },
  {
    id: 21,
    title: "Wireless Mouse",
    category: "Electronics",
    price: 24.99,
    stock: 28,
    image: "https://via.placeholder.com/300x200?text=Mouse",
    colors: ["Black", "Gray", "Red"],
    sizes: []
  },
  {
    id: 22,
    title: "Bluetooth Earbuds",
    category: "Electronics",
    price: 39.99,
    stock: 30,
    image: "https://via.placeholder.com/300x200?text=Earbuds",
    colors: ["White", "Black"],
    sizes: []
  },
  {
    id: 23,
    title: "Yoga Pants",
    category: "Apparel",
    price: 22.99,
    stock: 40,
    image: "https://via.placeholder.com/300x200?text=Yoga+Pants",
    colors: ["Black", "Gray"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 24,
    title: "Portable Charger",
    category: "Electronics",
    price: 29.99,
    stock: 25,
    image: "https://via.placeholder.com/300x200?text=Powerbank",
    colors: ["Black", "Silver"],
    sizes: []
  },
  {
    id: 25,
    title: "Leather Belt",
    category: "Accessories",
    price: 18.99,
    stock: 20,
    image: "https://via.placeholder.com/300x200?text=Belt",
    colors: ["Brown", "Black"],
    sizes: ["S", "M", "L", "XL"]
  },
  // ... continue similar pattern up to id: 100
];


let cart = [];

const productGridEl = document.getElementById("productGrid");
const btnCart = document.getElementById("btnCart");
const cartModal = document.getElementById("cartModal");
const btnCloseCart = document.getElementById("btnCloseCart");
const cartListEl = document.getElementById("cartList");
const cartTotalEl = document.getElementById("cartTotal");
const cartCountEl = document.getElementById("cartCount");
const btnCheckout = document.getElementById("btnCheckout");
const paymentMethodSelect = document.getElementById("paymentMethod");
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');
const btnLogin = document.getElementById('btnLogin');
const loginCloseBtn = document.getElementById('loginCloseBtn');
const loginPasswordField = document.getElementById('loginPassword');
const togglePassword = document.getElementById('togglePassword');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

function filterProducts() {
  const query = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filteredProducts = products.filter(p => {
    const matchesQuery =
      p.title.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query);
    const matchesCategory = selectedCategory === '' || p.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  renderProducts(filteredProducts);
}

searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);

btnLogin.addEventListener('click', () => {
  loginModal.classList.remove('hidden');
});

loginCloseBtn.addEventListener('click', () => {
  loginModal.classList.add('hidden');
});

togglePassword.addEventListener('click', () => {
  const type = loginPasswordField.type === 'password' ? 'text' : 'password';
  loginPasswordField.type = type;
  togglePassword.innerHTML =
    type === 'password' ? '<i class="fa fa-eye"></i>' : '<i class="fa fa-eye-slash"></i>';
});

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const usernameInput = loginForm.querySelector('input[type="text"]').value.trim();
  const passwordInput = loginPasswordField.value.trim();
  if (!usernameInput || !passwordInput) {
    alert('Please enter both username and password');
    return;
  }
  if (usernameInput === 'user' && passwordInput === 'password123') {
    alert('Login successful! Welcome ' + usernameInput);
    loginModal.classList.add('hidden');
    loginForm.reset();
  } else {
    alert('Invalid username or password');
  }
});

function renderProducts(filteredProducts = products) {
  productGridEl.innerHTML = filteredProducts
    .map(p => `
      <div class="bg-white rounded shadow p-4 flex flex-col transition-transform duration-200 hover:shadow-lg hover:scale-105" data-id="${p.id}">
        <img src="${p.image}" alt="${p.title}" class="w-full h-48 object-cover rounded mb-4" />
        <h3 class="font-semibold text-lg mb-2">${p.title}</h3>
        <p class="text-gray-700 mb-2">${p.category}</p>
        <p class="font-bold mb-4">₱${p.price.toFixed(2)}</p>
        <div class="mt-auto flex gap-2">
          <button class="flex-grow bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 disabled:opacity-50" ${p.stock <= 0 ? "disabled" : ""} data-id="${p.id}" data-action="add-cart">
            ${p.stock <= 0 ? "Out of Stock" : "Add to Cart"}
          </button>
          <button class="flex-grow bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-50" ${p.stock <= 0 ? "disabled" : ""} data-id="${p.id}" data-action="buy-now">
            Buy Now
          </button>
        </div>
      </div>
    `).join("");
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product || product.stock === 0) {
    alert("Item is out of stock");
    return;
  }
  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    if (existingItem.quantity < product.stock) {
      existingItem.quantity++;
    } else {
      alert("Reached maximum stock for this item");
    }
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (count > 0) {
    cartCountEl.textContent = count;
    cartCountEl.classList.remove("hidden");
  } else {
    cartCountEl.classList.add("hidden");
  }
}

function renderCartItems() {
  if (cart.length === 0) {
    cartListEl.innerHTML = `<li class="text-gray-600 text-center py-4">Your cart is empty.</li>`;
    cartTotalEl.textContent = "₱0.00";
    btnCheckout.disabled = true;
    return;
  }

  cartListEl.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    return `
      <li class="flex justify-between items-center border-b py-2">
        <div class="flex items-center">
          <img src="${product.image}" alt="${product.title}" class="h-12 w-12 rounded mr-3 border object-cover" />
          <div>
            <h4 class="font-semibold">${product.title}</h4>
            <p class="text-xs text-gray-500">${product.category}</p>
            <p class="text-sm mt-1 flex items-center gap-x-2">
              <span>₱${product.price.toFixed(2)}</span>
              <span class="mx-2">x</span>
              <button class="btn-decrease px-2 border rounded text-indigo-600" data-id="${product.id}" aria-label="Decrease quantity">-</button>
              ${item.quantity}
              <button class="btn-increase px-2 border rounded text-indigo-600" data-id="${product.id}" aria-label="Increase quantity">+</button>
            </p>
          </div>
        </div>
        <div class="text-right">
          <button class="btn-remove text-red-500 hover:underline" data-id="${product.id}" aria-label="Remove item">&times;</button>
          <div class="mt-2 font-bold text-gray-700">₱${(product.price * item.quantity).toFixed(2)}</div>
        </div>
      </li>`;
  }).join("");

  const total = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + product.price * item.quantity;
  }, 0);

  cartTotalEl.textContent = `₱${total.toFixed(2)}`;
  btnCheckout.disabled = false;
}

function changeQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  const product = products.find(p => p.id === productId);
  if (!item) return;
  const newQty = item.quantity + delta;
  if (newQty < 1) {
    removeFromCart(productId);
  } else if (newQty > product.stock) {
    alert("Exceeds stock available");
  } else {
    item.quantity = newQty;
  }
  updateCartCount();
  renderCartItems();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  updateCartCount();
  renderCartItems();
}

// Handle product grid buttons: Add to Cart and Buy Now
productGridEl.addEventListener("click", e => {
  const target = e.target;
  if (target.tagName === "BUTTON" && target.dataset.id) {
    const productId = parseInt(target.dataset.id);
    const action = target.dataset.action;
    if (action === "add-cart") {
      addToCart(productId);
    } else if (action === "buy-now") {
      cart = [{ id: productId, quantity: 1 }]; // Reset cart to single buy now product
      updateCartCount();
      renderCartItems();
      cartModal.classList.remove("hidden");
      paymentMethodSelect.value = "";
      btnCheckout.disabled = true;
    }
  }
});

btnCart.addEventListener("click", () => {
  renderCartItems();
  cartModal.classList.remove("hidden");
});

btnCloseCart.addEventListener("click", () => {
  cartModal.classList.add("hidden");
});

cartListEl.addEventListener("click", e => {
  if (e.target.classList.contains("btn-increase")) {
    changeQuantity(parseInt(e.target.dataset.id), 1);
  } else if (e.target.classList.contains("btn-decrease")) {
    changeQuantity(parseInt(e.target.dataset.id), -1);
  } else if (e.target.classList.contains("btn-remove")) {
    removeFromCart(parseInt(e.target.dataset.id));
  }
});

paymentMethodSelect.addEventListener("change", () => {
  btnCheckout.disabled = paymentMethodSelect.value === "";
});

btnCheckout.addEventListener("click", () => {
  if (paymentMethodSelect.value === "") {
    alert("Please select a payment method before proceeding.");
    return;
  }
  const methodNames = {
    gcash: "GCash",
    cod: "Cash on Delivery",
    bank_card: "Bank Card"
  };
  if (confirm(`Confirm order with ${methodNames[paymentMethodSelect.value]}?`)) {
    alert("Order placed successfully!");
    cart = [];
    updateCartCount();
    renderCartItems();
    cartModal.classList.add("hidden");
    paymentMethodSelect.value = "";
    btnCheckout.disabled = true;
  }
});

window.onload = () => {
  renderProducts();
  updateCartCount();
};
