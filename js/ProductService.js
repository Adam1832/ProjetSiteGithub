class Product {
    constructor(id, name, description, image, brand, notes, category, price, rating, numReviews, countInStock) {
        this.id = id
        this.name = name
        this.description = description
        this.image = image
        this.brand = brand
        this.notes = notes
        this.category = category
        this.price = price
        this.rating = rating
        this.numReviews = numReviews
        this.countInStock = countInStock
    }
}

class ProductService {
    static shared = new ProductService()

    data = data

    getAllProducts() {
        return this.data
    }

    getProductById(id) {
        return this.data.find(product => product.id === id)
    }

    getProductsByCategory(category) {
        return this.data.filter(product => product.category === category)
    }

    getProductsByBrand(brand) {
        return this.data.filter(product => product.brand === brand)
    }

    getProductsBySearchTerm(searchTerm) {
        return this.data.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    getProductsByPriceRange(min, max) {
        return this.data.filter(product => product.price >= min && product.price <= max)
    }

    getProductsByNotes(notes) {
        return this.data.filter(product => product.notes.some(note => notes.includes(note)))
    }
}