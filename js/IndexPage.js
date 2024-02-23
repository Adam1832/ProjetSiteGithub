const content = document.getElementById('article-list')

function renderProducts() {
    content.innerHTML = ''
    const products = ProductService.shared.getAllProducts()
    products.forEach(product => {
        const articleElement = document.createElement('article')
        articleElement.innerHTML = `
            <h6>${product.description}</h6>
            <video src="${product.image}" autoplay loop muted></video>
            <div class="description">
            <span>
              <p>${product.name}</p>
              <p>${product.category}</p>
            </span>
                <p>Des ${product.price} €</p>
            </div>
            <div class="commander">
                <button><a href="html/decouvrir.html" style="color: aliceblue"> Découvrir </a></button>
                <button class="ajouter-panier" onclick="CartManager.shared.addProduct(${product.id})"> Acheter</button>
            </div>
        `
        content.appendChild(articleElement)
    })
}

renderProducts()