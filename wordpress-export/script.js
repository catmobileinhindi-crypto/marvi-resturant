/**
 * Nagori Marvi Fast Foods - Standalone & WordPress Vanilla JavaScript
 * Handles Menu Rendering, Category Filtering, Cart State, and WhatsApp Ordering
 */

// 1. Restaurant Data & Demo Menu Selection
const RESTAURANT_CONFIG = {
  name: "Nagori Marvi Fast Foods",
  whatsappNumber: "923112551108",
  phones: ["0311-2551108", "0330-1351108"],
  address: "Plot No. N-164, Shah Latif Town, Sector 17-A, Near Mangal Bazar, Karachi, Pakistan"
};

const MENU_ITEMS = [
  {
    id: "zinger-burger",
    name: "Zinger Burger",
    category: "burgers",
    price: 380,
    priceDisplay: "Rs. 380",
    desc: "Crispy fried golden chicken fillet topped with spicy mayo and shredded lettuce on toasted sesame bun.",
    image: "images/burgers.jpg",
    badge: "Bestseller"
  },
  {
    id: "chicken-cheese-burger",
    name: "Chicken Cheese Burger",
    category: "burgers",
    price: 360,
    priceDisplay: "Rs. 360",
    desc: "Juicy grilled chicken patty loaded with melted cheddar cheese slice, caramelized onions, and signature sauce.",
    image: "images/burgers.jpg"
  },
  {
    id: "chicken-malai-boti",
    name: "Chicken Malai Boti",
    category: "bbq",
    price: 460,
    priceDisplay: "Rs. 460",
    desc: "Ultra-tender chicken boneless cubes marinated in fresh cream, mild spices, and grilled over charcoal embers.",
    image: "images/bbq.jpg",
    badge: "Chef Choice"
  },
  {
    id: "marvi-special-roll",
    name: "Marvi Special Roll",
    category: "rolls",
    price: 290,
    priceDisplay: "Rs. 290",
    desc: "Signature golden crispy paratha stuffed with spicy chargrilled chicken, garlic mayo, and sliced onions.",
    image: "images/rolls.jpg",
    badge: "Signature"
  },
  {
    id: "crispy-club-sandwich",
    name: "Crispy Club Sandwich",
    category: "sandwiches",
    price: 440,
    priceDisplay: "Rs. 440",
    desc: "Triple-decker toasted bread filled with crispy chicken, fried egg, cheese, fresh cucumber, and special sauce.",
    image: "images/burgers.jpg"
  },
  {
    id: "pizza-fries",
    name: "Pizza Fries",
    category: "fastfood",
    price: 350,
    priceDisplay: "Rs. 350",
    desc: "Golden French fries topped with seasoned chicken chunks, pizza sauce, diced capsicum, and loaded melted mozzarella.",
    image: "images/karahi-fries.jpg",
    badge: "Trending"
  },
  {
    id: "special-pizza",
    name: "Special Pizza",
    category: "pizza",
    price: 350,
    priceDisplay: "Starting from Rs. 350",
    desc: "Stone-baked crust packed with marinated chicken chunks, sausages, bell peppers, black olives, and premium mozzarella.",
    image: "images/pizza.jpg",
    badge: "Stone Baked"
  },
  {
    id: "chicken-karahi-half",
    name: "Chicken Karahi Half",
    category: "bbq",
    price: 900,
    priceDisplay: "Rs. 900",
    desc: "Authentic Pakistani style wok chicken prepared with fresh tomatoes, green chillies, julienne ginger, and secret spices.",
    image: "images/karahi-fries.jpg",
    badge: "Desi Delight"
  }
];

const POPULAR_DEALS = [
  {
    id: "deal-3",
    code: "DEAL 3",
    title: "Zinger & Club Combo",
    badge: "BEST VALUE",
    items: ["1 Zinger Burger", "1 BBQ Club Sandwich", "300 ml Drink"],
    price: 850
  },
  {
    id: "deal-6",
    code: "DEAL 6",
    title: "Tikka & Roll Platter",
    badge: "POPULAR",
    items: ["1 Leg Tikka", "1 Chicken Roll", "1 Paratha", "300 ml Drink"],
    price: 650
  },
  {
    id: "deal-11",
    code: "DEAL 11",
    title: "Mega Pizza Feast",
    badge: "FAMILY DEAL",
    items: ["1 Medium Pizza", "1 Large Pizza", "1.5 L Drink"],
    price: 1600
  }
];

const CATEGORIES = [
  { id: "bbq", name: "BBQ", img: "images/bbq.jpg" },
  { id: "burgers", name: "Burgers", img: "images/burgers.jpg" },
  { id: "pizza", name: "Pizza", img: "images/pizza.jpg" },
  { id: "rolls", name: "Rolls", img: "images/rolls.jpg" },
  { id: "sandwiches", name: "Sandwiches", img: "images/burgers.jpg" },
  { id: "deals", name: "Deals", img: "images/hero-spread.jpg" }
];

// Cart State
let cart = [];

// Initialize on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderMenu("all");
  renderDeals();
  setupFilterTabs();
  setupCartDrawer();
});

// Render Category Cards
function renderCategories() {
  const container = document.getElementById("nm-categories-container");
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => `
    <div class="nm-cat-card" onclick="filterAndScrollToMenu('${cat.id}')">
      <img src="${cat.img}" alt="${cat.name}" class="nm-cat-img" onerror="this.src='images/hero-spread.jpg'" />
      <h3>${cat.name}</h3>
      <span style="font-size: 11px; color: var(--nm-gold); margin-top: 4px; display: inline-block;">Explore →</span>
    </div>
  `).join("");
}

// Render Menu Items
function renderMenu(activeCategory) {
  const container = document.getElementById("nm-menu-container");
  if (!container) return;

  const filtered = MENU_ITEMS.filter(item => {
    if (activeCategory === "all") return true;
    if (activeCategory === "deals") return true;
    return item.category === activeCategory;
  });

  container.innerHTML = filtered.map(item => `
    <div class="nm-food-card">
      <div class="nm-food-img-wrap">
        <img src="${item.image}" alt="${item.name}" class="nm-food-img" onerror="this.src='images/hero-spread.jpg'" />
        ${item.badge ? `<span class="nm-food-badge">${item.badge}</span>` : ""}
      </div>
      <div class="nm-food-body">
        <div>
          <h3 class="nm-food-title">${item.name}</h3>
          <p class="nm-food-desc">${item.desc}</p>
        </div>
        <div class="nm-food-footer">
          <span class="nm-food-price">${item.priceDisplay}</span>
          <button class="nm-add-btn" onclick="addToCart('${item.id}', '${item.name}', ${item.price})">+ Add</button>
        </div>
      </div>
    </div>
  `).join("");
}

// Render Deals
function renderDeals() {
  const container = document.getElementById("nm-deals-container");
  if (!container) return;

  container.innerHTML = POPULAR_DEALS.map(deal => `
    <div class="nm-deal-card">
      <div>
        <span class="nm-deal-badge">${deal.badge}</span>
        <h3 class="nm-deal-title">${deal.code}: ${deal.title}</h3>
        <ul class="nm-deal-items">
          ${deal.items.map(i => `<li>${i}</li>`).join("")}
        </ul>
      </div>
      <div>
        <div class="nm-deal-price">Rs. ${deal.price}</div>
        <button class="nm-btn-primary nm-w-100" onclick="addToCart('${deal.id}', '${deal.code} - ${deal.title}', ${deal.price})">Order This Deal</button>
      </div>
    </div>
  `).join("");
}

// Category Tabs Interaction
function setupFilterTabs() {
  const tabs = document.querySelectorAll(".nm-tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.getAttribute("data-filter");
      renderMenu(filter);
    });
  });
}

function filterAndScrollToMenu(categoryId) {
  if (categoryId === "deals") {
    const dealsEl = document.getElementById("deals");
    if (dealsEl) dealsEl.scrollIntoView({ behavior: "smooth" });
    return;
  }
  const tabs = document.querySelectorAll(".nm-tab-btn");
  tabs.forEach(t => {
    if (t.getAttribute("data-filter") === categoryId) {
      t.classList.add("active");
    } else {
      t.classList.remove("active");
    }
  });
  renderMenu(categoryId);
  const menuEl = document.getElementById("menu");
  if (menuEl) menuEl.scrollIntoView({ behavior: "smooth" });
}

// Cart System
function addToCart(id, name, price) {
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  updateCartUI();
  openCart();
}

function updateQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById("nm-cart-badge");
  const itemsContainer = document.getElementById("nm-cart-items");
  const totalPriceEl = document.getElementById("nm-cart-total-price");

  const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);

  if (badge) badge.innerText = totalCount;
  if (totalPriceEl) totalPriceEl.innerText = "Rs. " + totalPrice;

  if (itemsContainer) {
    if (cart.length === 0) {
      itemsContainer.innerHTML = "<p style='color: #78716c; text-align: center; margin-top: 2rem;'>Your cart is empty.</p>";
    } else {
      itemsContainer.innerHTML = cart.map(item => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid #292524;">
          <div>
            <h4 style="font-size: 0.85rem; color: #fff; margin-bottom: 0.2rem;">${item.name}</h4>
            <span style="font-size: 0.75rem; color: var(--nm-gold);">Rs. ${item.price * item.quantity}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button onclick="updateQuantity('${item.id}', -1)" style="background: #292524; color: #fff; border: none; width: 22px; height: 22px; border-radius: 4px; cursor: pointer;">-</button>
            <span style="font-size: 0.85rem; font-weight: bold; color: #fff;">${item.quantity}</span>
            <button onclick="updateQuantity('${item.id}', 1)" style="background: #292524; color: #fff; border: none; width: 22px; height: 22px; border-radius: 4px; cursor: pointer;">+</button>
          </div>
        </div>
      `).join("");
    }
  }
}

function setupCartDrawer() {
  const toggleBtn = document.getElementById("nm-cart-toggle");
  const closeBtn = document.getElementById("nm-cart-close");
  const backdrop = document.getElementById("nm-drawer-backdrop");
  const whatsappCheckoutBtn = document.getElementById("nm-whatsapp-checkout-btn");

  if (toggleBtn) toggleBtn.addEventListener("click", openCart);
  if (closeBtn) closeBtn.addEventListener("click", closeCart);
  if (backdrop) backdrop.addEventListener("click", closeCart);

  if (whatsappCheckoutBtn) {
    whatsappCheckoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Your cart is empty! Please add items first.");
        return;
      }
      sendWhatsAppOrder();
    });
  }
}

function openCart() {
  const drawer = document.getElementById("nm-cart-drawer");
  const backdrop = document.getElementById("nm-drawer-backdrop");
  if (drawer) drawer.classList.add("open");
  if (backdrop) backdrop.classList.add("open");
}

function closeCart() {
  const drawer = document.getElementById("nm-cart-drawer");
  const backdrop = document.getElementById("nm-drawer-backdrop");
  if (drawer) drawer.classList.remove("open");
  if (backdrop) backdrop.classList.remove("open");
}

// Generate formatted WhatsApp Order
function sendWhatsAppOrder() {
  let text = `*New Order - Nagori Marvi Fast Foods*\n`;
  text += `------------------------------------\n`;
  cart.forEach(item => {
    text += `• ${item.quantity}x ${item.name} - Rs. ${item.price * item.quantity}\n`;
  });
  text += `------------------------------------\n`;
  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  text += `*Total Amount: Rs. ${subtotal}*\n\n`;
  text += `Please confirm my order and approximate delivery time to Shah Latif Town, Karachi.`;

  const url = `https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}
