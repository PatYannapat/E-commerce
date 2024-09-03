function viewProductDetail(name, price, image) {
    document.getElementById('product-name').textContent = name;
    document.getElementById('product-price').textContent = '$' + price;
    document.getElementById('product-image').src = image; // Change to match your image source
    document.getElementById('product-detail').style.display = 'block';
}

function addToCart() {
    const name = document.getElementById('product-name').textContent;
    const price = document.getElementById('product-price').textContent;

    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('div');
    cartItem.textContent = name + ' - ' + price;
    cartItems.appendChild(cartItem);
}

function checkout() {
    alert('Checking out!');
}
