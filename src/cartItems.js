const cartItems = [];

export function addToCart(productId) {
    cartItems.push(productId);
}

export function getItemsInCart() {
    return cartItems;
}
