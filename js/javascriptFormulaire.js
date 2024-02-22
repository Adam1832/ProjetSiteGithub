function addToCart() {
    var produit = document.getElementById('produit').value;

    var cartItems = document.getElementById('cart-items');
    var listItem = document.createElement('li');
    listItem.textContent = produit + ' x ';
    cartItems.appendChild(listItem);
}
