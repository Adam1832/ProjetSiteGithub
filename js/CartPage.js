const cartProductsList = document.getElementById('cart-items')
const totalPrice = document.getElementById('total-amount')

function renderCart() {
    cartProductsList.innerHTML = ''
    const products = CartManager.shared.getProducts()
    products.forEach(product => {
        const productElement = document.createElement('div')
        productElement.innerHTML = `
            <div class="cart-item">
                <video src="/${product.image}" autoplay loop muted class="cart-item-image"></video>
                <h3 class="cart-item-title">${product.name}</h3>
                <div class="cart-item-quantity">
                    <button class="decrease-quantity" onclick="CartManager.shared.removeProduct(${product.id}); renderCart()">-</button>
                    <input type="number" value="${product.quantity}" min="1" max="10" oninput="CartManager.shared.setQuantity(${product.id}, this.value); renderCart()" class="cart-item-quantity-input"/>
                    <button class="increase-quantity" onclick="CartManager.shared.addProduct(${product.id}); renderCart()">+</button>
                </div>
                <span class="cart-item-price">${product.totalPrice} €</span>
                <button class="cart-item-remove"><img src="../image/trash.svg" onclick="CartManager.shared.removeAllProducts(${product.id}); renderCart()"></button>
            </div>
        `
        cartProductsList.appendChild(productElement)
    })
    totalPrice.innerText = `${CartManager.shared.getTotalPrice()} €`
}

renderCart()