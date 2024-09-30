fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const productList = document.getElementById('product-list');
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p class="price">$${product.price.toFixed(2)}</p>
            `;
            productList.appendChild(productDiv);
        });
    })
    .catch(error => console.error('Error loading products:', error));
