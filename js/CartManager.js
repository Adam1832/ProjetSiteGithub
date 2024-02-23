class CartManager {

    static shared = new CartManager()

    get cart() {
        return JSON.parse(localStorage.getItem('cart')) ?? []
    }

    set cart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    getProducts() {
        return this.cart.map(item => {
            const product = ProductService.shared.getProductById(item.productId)
            return {
                ...product,
                quantity: item.quantity,
                totalPrice: product.price * item.quantity
            }
        })
    }

    addProduct(productId) {
        const cart = this.cart
        const index = cart.findIndex(item => item.productId === productId)
        if (index === -1) {
            cart.push({productId, quantity: 1})
        } else {
            cart[index].quantity++
        }
        this.cart = cart
    }

    removeProduct(productId) {
        const cart = this.cart
        const index = cart.findIndex(item => item.productId === productId)
        if (index !== -1) {
            cart[index].quantity--
            if (cart[index].quantity === 0) {
                cart.splice(index, 1)
            }
            this.cart = cart
        }
    }

    removeAllProducts(productId) {
        const cart = this.cart
        const index = cart.findIndex(item => item.productId === productId)
        if (index !== -1) {
            cart.splice(index, 1)
            this.cart = cart
        }
    }

    clearCart() {
        this.cart = []
    }

    getTotalPrice() {
        return this.cart.reduce((total, item) => {
            const product = ProductService.shared.getProductById(item.productId)
            return total + product.price * item.quantity
        }, 0)
    }

    getTotalQuantity() {
        return this.cart.reduce((total, item) => total + item.quantity, 0)
    }

    setQuantity(productId, quantity) {
        const cart = this.cart
        const index = cart.findIndex(item => item.productId === productId)
        if (index !== -1) {
            cart[index].quantity = quantity
            this.cart = cart
        }
    }
}
