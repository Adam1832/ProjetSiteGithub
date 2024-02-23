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