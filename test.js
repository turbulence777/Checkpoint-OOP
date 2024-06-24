const Product = require('./Product');
const ShoppingCart = require('./ShoppingCart');

// Create products
const product1 = new Product(1, 'Laptop', 999.99);
const product2 = new Product(2, 'Smartphone', 499.99);
const product3 = new Product(3, 'Headphones', 199.99);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 3);

// Display the cart
console.log('Cart items after adding:');
cart.displayCartItems();

// Get the total items and total price
console.log(`Total items: ${cart.getTotalItems()}`);
console.log(`Total price: $${cart.getTotalPrice().toFixed(2)}`);

// Remove an item from the cart
cart.removeItem(2); // Remove the product with id 2

// Display the cart after removal
console.log('Cart items after removing item with id 2:');
cart.displayCartItems();

// Get the total items and total price after removal
console.log(`Total items after removal: ${cart.getTotalItems()}`);
console.log(`Total price after removal: $${cart.getTotalPrice().toFixed(2)}`);
