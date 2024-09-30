fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const productList = document.getElementById('product-list');
        let htmlContent = '';

        products.forEach(product => {
            htmlContent += `
                <div class="product">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p class="price">$${product.price.toFixed(2)}</p>
                </div>
            `;
        });

        productList.innerHTML = htmlContent;
    })
    .catch(error => console.error('Error loading products:', error));
