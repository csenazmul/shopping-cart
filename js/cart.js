// js/cart.js
let cart = [];

function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateQuantity(productId, newQuantity) {
    const product = cart.find(item => item.id === productId);
    if (product && newQuantity > 0) {
        product.quantity = newQuantity;
    }
    updateCartUI();
}

function clearCart() {
    cart = [];
    updateCartUI();
}

function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
}
