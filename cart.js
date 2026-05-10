// Global data
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// DOM Elements
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartItemsCount = document.getElementById('cartItemsCount');
const subtotalEl = document.getElementById('subtotal');
const totalAmount = document.getElementById('totalAmount');
const checkoutBtn = document.getElementById('checkoutBtn');
const emptyCart = document.getElementById('emptyCart');
const cartItemsSection = document.getElementById('cartItemsSection');
const cartSummary = document.getElementById('cartSummary');
const cartTitle = document.getElementById('cartTitle');
const deliveryModal = document.getElementById('deliveryModal');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    setupEventListeners();
    renderOrderHistory(); // Shows paid items
});

function loadCart() {
    updateCartUI();
    renderCartItems();
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItemsSection.style.display = 'none';
        emptyCart.style.display = 'block';
        cartSummary.style.display = 'none';
        return;
    }
    cartItemsSection.style.display = 'block';
    emptyCart.style.display = 'none';
    cartSummary.style.display = 'block';

    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-image"><img src="${item.image}" alt="${item.name}"></div>
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <div class="price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="quantity-controls">
                <button class="qty-btn" onclick="updateQuantity(${index}, -1)">−</button>
                <span class="qty">${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
            </div>
            <div class="item-total">$${(item.price * item.quantity).toFixed(2)}</div>
            <div class="item-actions">
                <button class="remove-item" onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');
}

// NEW: Render Paid Orders History
function renderOrderHistory() {
    let historySection = document.getElementById('orderHistorySection');
    if (!historySection) {
        historySection = document.createElement('div');
        historySection.id = 'orderHistorySection';
        historySection.innerHTML = `<h2 style="margin: 30px 0 20px;"><i class="fas fa-check-circle"></i> Paid Order History</h2><div id="historyList"></div>`;
        document.querySelector('.cart-container').appendChild(historySection);
    }

    const historyList = document.getElementById('historyList');
    if (orders.length === 0) {
        historyList.innerHTML = '<p style="color: #666;">No paid orders found.</p>';
        return;
    }

    historyList.innerHTML = orders.map(order => `
        <div class="cart-item" style="border-left: 5px solid #28a745; background: #f9f9f9; margin-bottom: 10px; padding: 15px;">
            <div class="cart-item-details">
                <h4 style="margin:0;">Order #${order.id}</h4>
                <p style="color: #28a745; font-weight: bold; margin: 5px 0;">Status: PAID</p>
                <div style="font-size: 0.9rem;">Items: ${order.items.map(i => i.name).join(', ')}</div>
            </div>
            <div class="item-total" style="color: #333;">$${order.total.toFixed(2)}</div>
            <button class="view-details" onclick="showDeliveryModal('${order.id}')" style="background: #3498db; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer;">
                <i class="fas fa-truck"></i> Track
            </button>
        </div>
    `).join('');
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartCount.textContent = totalItems;
    cartItemsCount.textContent = totalItems;
    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    totalAmount.textContent = `$${subtotal.toFixed(2)}`;
    checkoutBtn.disabled = totalItems === 0;
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function removeFromCart(index) {
    if (confirm('Remove item?')) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }
}

function proceedToCheckout() {
    const orderId = 'ORD' + Date.now();
    const order = {
        id: orderId,
        items: [...cart],
        total: parseFloat(totalAmount.textContent.replace('$', '')),
        date: new Date().toISOString(),
        status: 'paid'
    };
    orders.unshift(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload(); 
}

function showDeliveryModal(orderId) {
    const order = orders.find(o => o.id === orderId);
    document.getElementById('deliveryContent').innerHTML = `
        <div class="delivery-order"><h4>Order #${order.id}</h4><p>Total: $${order.total.toFixed(2)}</p></div>
        <div class="timeline-item active"><h5>Status: ${order.status.toUpperCase()}</h5><span>${new Date(order.date).toLocaleString()}</span></div>
    `;
    deliveryModal.style.display = 'block';
}

function setupEventListeners() {
    document.getElementById('closeDelivery').onclick = () => deliveryModal.style.display = 'none';
    window.onclick = (e) => { if (e.target == deliveryModal) deliveryModal.style.display = 'none'; };
}