// 30 Premium Products Data
const products = [
    {id:1, name:"Wireless Pro Headphones", price:129.99, category:"electronics", image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop", rating:4.8, reviews:124, stock:15, new:true, desc:"Premium noise-cancelling with 30hr battery"},
    {id:2, name:"Smart Watch Ultra", price:299.99, category:"electronics", image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop", rating:4.9, reviews:89, stock:8, new:true, desc:"Health tracking & GPS navigation"},
    {id:3, name:"JBL Go 4", price:89.99, category:"electronics", image:"https://i.pinimg.com/736x/85/cb/b5/85cbb5f0932bddbaf81270d819fa2942.jpg", rating:4.7, reviews:203, stock:22, desc:"Waterproof with 20hr playback"},
    {id:4, name:"Gaming Mouse RGB", price:59.99, category:"electronics", image:"https://i.pinimg.com/736x/0d/de/5a/0dde5a175b1b47433329bc2dd51affb3.jpg", rating:4.6, reviews:156, stock:30, desc:"8000 DPI with customizable lighting"},
    {id:5, name:"Laptop Cooling Stand", price:39.99, category:"electronics", image:"https://i.pinimg.com/1200x/d4/61/2f/d4612f0ed6fc8d5240a3e978547fcda5.jpg", rating:4.5, reviews:67, stock:45, desc:"RGB lighting & adjustable height"},
    {id:6, name:"Premium Phone Case", price:24.99, category:"accessories", image:"https://i.pinimg.com/736x/fc/7d/03/fc7d035abeb24f90fc3479fc23125c0c.jpg", rating:4.4, reviews:89, stock:120, desc:"Shockproof with wallet slot"},
    {id:7, name:"Leather Jacket", price:199.99, category:"clothing", image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop", rating:4.9, reviews:45, stock:12, desc:"Genuine leather with fur lining"},
    {id:8, name:"Designer Sunglasses", price:79.99, category:"accessories", image:"https://i.pinimg.com/1200x/6a/2d/61/6a2d616fb39950882c5a26c743c97728.jpg", rating:4.7, reviews:78, stock:25, desc:"UV400 protection with polarized lens"},
    {id:9, name:"Running Shoes Pro", price:149.99, category:"clothing", image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop", rating:4.8, reviews:134, stock:18, desc:"Breathable mesh with cushioning"},
    {id:10, name:"Coffee Maker Smart", price:179.99, category:"home", image:"https://i.pinimg.com/736x/90/4b/a8/904ba82b29e3f794852cbc1ec854a214.jpg", rating:4.6, reviews:92, stock:10, desc:"App controlled with 15 presets"},
    {id:11, name:"Mechanical Keyboard", price:119.99, category:"electronics", image:"https://i.pinimg.com/1200x/50/32/84/503284503ac3a1748283a3d5838eff47.jpg", rating:4.9, reviews:210, stock:14, desc:"Cherry MX switches with RGB"},
    {id:12, name:"Yoga Mat Premium", price:49.99, category:"home", image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", rating:4.7, reviews:156, stock:35, desc:"Anti-slip with alignment markers"},
    {id:13, name:"Wireless Charger Pad", price:34.99, category:"electronics", image:"https://i.pinimg.com/736x/8c/f3/e0/8cf3e05b094304535053bf4ff89bdda8.jpg", rating:4.5, reviews:89, stock:50, desc:"15W fast charging for all devices"},
    {id:14, name:"Hoodie Oversized", price:69.99, category:"clothing", image:"https://i.pinimg.com/736x/57/84/0c/57840ced0adac7c90c5c596ff121d5a7.jpg", rating:4.8, reviews:123, stock:28, desc:"Organic cotton with fleece lining"},
    {id:15, name:"Backpack Laptop", price:89.99, category:"accessories", image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop", rating:4.7, reviews:167, stock:20, desc:"Waterproof with 17\" laptop compartment"},
    {id:16, name:"Air Purifier Smart", price:249.99, category:"home", image:"https://i.pinimg.com/736x/6e/b2/fc/6eb2fcc614ddc29bfb04a0ba6a984040.jpg", rating:4.9, reviews:56, stock:7, desc:"HEPA filter with app control"},
    {id:17, name:"Fitness Tracker", price:79.99, category:"electronics", image:"https://i.pinimg.com/1200x/32/85/67/32856701188bd82fb83baf7a9aed73f7.jpg", rating:4.6, reviews:98, stock:32, desc:"Heart rate & sleep tracking"},
    {id:18, name:"Denim Jeans Slim", price:99.99, category:"clothing", image:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop", rating:4.8, reviews:145, stock:16, desc:"Stretch denim with perfect fit"},
    {id:19, name:"Desk Lamp Smart", price:59.99, category:"home", image:"https://i.pinimg.com/736x/56/d4/73/56d473518027515583827a64cd27bd0c.jpg", rating:4.7, reviews:78, stock:24, desc:"Voice controlled with color options"},
    {id:20, name:"Air Pods Pro 2", price:49.99, category:"electronics", image:"https://i.pinimg.com/736x/8a/f5/4e/8af54e00dc732a909df09287b1957da2.jpg", rating:4.5, reviews:201, stock:40, desc:"IPX7 waterproof with touch controls"},
    {id:21, name:"Watch Leather Strap", price:39.99, category:"accessories", image:"https://i.pinimg.com/1200x/70/12/d8/7012d8fb3fd87b1380f7143d2c4c2573.jpg", rating:4.8, reviews:67, stock:55, desc:"Genuine leather quick-release"},
    {id:22, name:"Sneakers High Top", price:129.99, category:"clothing", image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop", rating:4.9, reviews:89, stock:13, desc:"Premium leather with cushioned sole"},
    {id:23, name:"Robot Vacuum", price:399.99, category:"home", image:"https://i.pinimg.com/736x/1e/cf/72/1ecf7262be09e07360de33e9b8e3d0fe.jpg", rating:4.7, reviews:34, stock:5, desc:"Smart mapping with 2000Pa suction"},
    {id:24, name:"Power Bank 20000mAh", price:44.99, category:"electronics", image:"https://i.pinimg.com/736x/41/b9/c5/41b9c5854f0847f2de62487203f6aeb9.jpg", rating:4.6, reviews:156, stock:38, desc:"Fast charging with LED display"},
    {id:25, name:"T-Shirt Premium", price:29.99, category:"clothing", image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop", rating:4.8, reviews:234, stock:75, desc:"Organic cotton with vintage wash"},
    {id:26, name:"Wallet RFID", price:34.99, category:"accessories", image:"https://i.pinimg.com/1200x/a5/53/69/a5536941ca0ebf81b392feec77db22c6.jpg", rating:4.7, reviews:112, stock:42, desc:"Slim design blocks RFID scanning"},
    {id:27, name:"Blender High Speed", price:149.99, category:"home", image:"https://i.pinimg.com/736x/6c/3d/2c/6c3d2c1eb61c70ddd5caba2d2d3152bc.jpg", rating:4.8, reviews:78, stock:11, desc:"1600W with 64oz jar"},
    {id:28, name:"Ipad 11", price:349.99, category:"electronics", image:"https://i.pinimg.com/736x/4b/2d/51/4b2d514fa06ce19c17e9ff1d44f0b177.jpg", rating:4.9, reviews:67, stock:9, desc:"High resolution with stylus support"},
    {id:29, name:"Scarf Wool Cashmere", price:79.99, category:"clothing", image:"https://i.pinimg.com/1200x/12/e6/73/12e673df2e42e01c135af5131b71a0bc.jpg", rating:4.9, reviews:45, stock:19, desc:"Luxury blend with fringe detail"},
    {id:30, name:"Tripod Phone", price:29.99, category:"accessories", image:"https://i.pinimg.com/736x/be/cf/3e/becf3ea6904b1466282fef2542297a08.jpg", rating:4.6, reviews:123, stock:60, desc:"Extendable with Bluetooth remote"}
];

// Global Variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentProduct = null;
let filteredProducts = [...products];
let currentView = 'grid';

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const productModal = document.getElementById('productModal');
const closeProduct = document.getElementById('closeProduct');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const priceFilter = document.getElementById('priceFilter');
const priceValue = document.getElementById('priceValue');
const productsCount = document.getElementById('productsCount');
const noProducts = document.getElementById('noProducts');
const cartCount = document.getElementById('cartCount');

// --- 1. INITIALIZATION (THIS WAS MISSING) ---
document.addEventListener('DOMContentLoaded', () => {
    loadProducts(); // Renders products on page load
    updateCartUI();
    setupEventListeners();
});

function setupEventListeners() {
    categoryFilter.addEventListener('change', filterProducts);
    sortFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('input', () => {
        priceValue.textContent = priceFilter.value;
        filterProducts();
    });
    
    closeProduct.onclick = () => {
        productModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
}

// --- 2. PRODUCT RENDERING ---
function loadProducts() {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = `product-card ${currentView === 'list' ? 'list-view' : 'grid-view'}`;
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                    <button class="view-details" onclick="viewProductDetail(${product.id})">View Details</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
    
    productsCount.textContent = `${filteredProducts.length} Products Found`;
    noProducts.style.display = filteredProducts.length === 0 ? 'block' : 'none';
}

function filterProducts() {
    let results = [...products];
    if (categoryFilter.value !== 'all') results = results.filter(p => p.category === categoryFilter.value);
    results = results.filter(p => p.price <= parseFloat(priceFilter.value));
    
    if (sortFilter.value === 'price-low') results.sort((a, b) => a.price - b.price);
    else if (sortFilter.value === 'price-high') results.sort((a, b) => b.price - a.price);
    
    filteredProducts = results;
    loadProducts();
}

// --- 3. MODAL & PAYMENT LOGIC ---
function viewProductDetail(productId) {
    currentProduct = products.find(p => p.id === productId);
    document.getElementById('productDetail').innerHTML = `
        <div class="product-detail-image"><img src="${currentProduct.image}"></div>
        <div class="product-detail-info">
            <h2>${currentProduct.name}</h2>
            <p class="product-price-large">$${currentProduct.price.toFixed(2)}</p>
            <p>${currentProduct.desc}</p>
            <button class="buy-now" onclick="buyNow()">Buy Now</button>
        </div>
    `;
    productModal.style.display = 'block';
}

function buyNow() {
    productModal.style.display = 'none';
    showPaymentModal();
}

function showPaymentModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'paymentModal';
    modal.innerHTML = `
        <div class="modal-content payment-modal-content">
            <span class="close" onclick="document.getElementById('paymentModal').remove()">&times;</span>
            <i class="fas fa-shield-alt" style="font-size: 2rem; color: #28a745;"></i>
            <h2 style="margin-top:10px;">Secure Checkout</h2>
            <p style="color: #666;">Select your preferred payment method</p>
            
            <div class="payment-options">
                <button class="pay-btn" onclick="showQRCode()">
                    <i class="fas fa-qrcode"></i>
                    <span>Pay with QR Code</span>
                </button>
                <button class="pay-btn" onclick="confirmPayment('Cash on Delivery')">
                    <i class="fas fa-money-bill-wave"></i>
                    <span>Cash on Delivery</span>
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'block';
}

function showQRCode() {
    const modalContent = document.querySelector('#paymentModal .modal-content');
    modalContent.innerHTML = `
        <span class="close" onclick="document.getElementById('paymentModal').remove()">&times;</span>
        <h2>Scan to Pay</h2>
        <p>Scan the QR code below to complete payment</p>
        <div class="qr-container">
           <img src="src/photo_2026-05-11_01-16-26.jpg" alt="QR Code" class="qr-image">
        </div>
        <p style="font-weight:bold; color:#28a745;">Amount: $${currentProduct.price.toFixed(2)}</p>
        <button class="buy-now" onclick="confirmPayment('QR Code')" style="width:100%; margin-top:15px;">
            I Have Paid
        </button>
    `;
}

function confirmPayment(method) {
    if(document.getElementById('paymentModal')) document.getElementById('paymentModal').remove();
    showSuccessModal(method);
}

function showSuccessModal(method) {
    const successModal = document.createElement('div');
    successModal.className = 'modal';
    successModal.id = 'successModal';
    successModal.innerHTML = `
        <div class="modal-content payment-modal-content">
            <div class="success-icon-circle">
                <i class="fas fa-check"></i>
            </div>
            <h2 style="color: #2c3e50;">Payment Successful!</h2>
            <p style="color: #7f8c8d; margin-bottom: 20px;">Your order has been placed via ${method}.</p>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px; margin-bottom: 25px; text-align: left;">
                <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                    <span>Product:</span> <strong>${currentProduct.name}</strong>
                </div>
                <div style="display:flex; justify-content:space-between;">
                    <span>Total:</span> <strong>$${currentProduct.price.toFixed(2)}</strong>
                </div>
            </div>

            <div style="display: flex; gap: 10px;">
                <button onclick="location.reload()" style="flex:1; background:#eee; color:#333; border:none; padding:12px; border-radius:8px; cursor:pointer;">Shop More</button>
                <button onclick="viewOrder()" style="flex:1; background:#28a745; color:white; border:none; padding:12px; border-radius:8px; cursor:pointer; font-weight:bold;">View Order</button>
            </div>
        </div>
    `;
    document.body.appendChild(successModal);
    successModal.style.display = 'block';
}

function viewOrder() {
    // SAVE THE ORDER DATA BEFORE REDIRECTING
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
        id: 'ORD' + Math.floor(Math.random() * 1000000),
        items: [{ name: currentProduct.name, price: currentProduct.price, image: currentProduct.image }],
        total: currentProduct.price,
        date: new Date().toISOString(),
        status: 'paid'
    };
    orders.unshift(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Go to cart page to see the history
    window.location.href = 'cart.html';
}

// --- ADD TO CART FUNCTION ---
function addToCart(id) {
    // 1. Find the product by its ID
    const product = products.find(p => p.id === id);
    
    // 2. Get current cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // 3. Check if product is already in the cart
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        // If it exists, just increase the quantity
        existingItem.quantity += 1;
    } else {
        // If it's new, add the product object
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    // 4. Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // 5. Update the red number on the cart icon
    updateCartUI();

    // 6. Optional: Show a small success alert
    alert(`${product.name} added to cart!`);
}

// --- UPDATE CART COUNTER ---
function updateCartUI() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Calculate total quantity of all items
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Find the red badge (make sure your HTML ID is 'cartCount')
    const cartCountElement = document.getElementById('cartCount');
    
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
        
        // Hide the red circle if the cart is empty
        cartCountElement.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Run this when the page loads so the number stays there after a refresh
document.addEventListener('DOMContentLoaded', updateCartUI);
// --- UPDATE RED COUNTER ---
function updateCartUI() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Count total number of items
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Update all elements with the id 'cartCount'
    const cartCountElements = document.querySelectorAll('#cartCount');
    cartCountElements.forEach(el => {
        el.textContent = totalItems;
        // Hide if 0, show if > 0
        el.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

// --- OPTIONAL: ADD A POPUP NOTIFICATION ---
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 12px 25px;
        border-radius: 50px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// --- SEARCH LOGIC ---

function toggleSearch() {
    const input = document.getElementById('searchInput');
    
    // If input is hidden, show it and focus. If shown and has text, search.
    if (input.style.display === 'none') {
        input.style.display = 'inline-block';
        input.focus();
    } else {
        if (input.value.trim() !== "") {
            performSearch(input.value);
        } else {
            input.style.display = 'none';
        }
    }
}

// Function to filter products based on user input
function performSearch(query) {
    const searchTerm = query.toLowerCase().trim();

    // Filter the original products array
    filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm) || 
               product.category.toLowerCase().includes(searchTerm) ||
               product.desc.toLowerCase().includes(searchTerm);
    });

    // Re-run your existing load function to update the grid
    loadProducts();

    // Update the results count text
    const countEl = document.getElementById('productsCount');
    if (countEl) {
        countEl.textContent = `${filteredProducts.length} Results found for "${query}"`;
    }

    // Scroll to products if on index page
    const grid = document.getElementById('productsGrid');
    if (grid) grid.scrollIntoView({ behavior: 'smooth' });
}

// Add "Enter" key support for the search input
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }
});