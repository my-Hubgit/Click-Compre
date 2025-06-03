// js/main.js

// ANOTAÇÃO IMPORTANTE:
// Não precisamos declarar 'products' novamente aqui,
// pois ela já foi definida globalmente em products.js como window.products.
// Podemos acessá-la diretamente.

// Função para formatar o preço em moeda brasileira
function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Função para gerar as estrelas de avaliação
function generateRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    let starsHtml = '';
    for (let i = 0; i < fullStars; i++) starsHtml += '★';
    if (halfStar) starsHtml += '☆'; // Pode ser '★' com CSS para metade
    for (let i = 0; i < emptyStars; i++) starsHtml += '☆'; // Estrela vazia

    return starsHtml;
}

// Função principal para carregar e exibir os produtos
// Agora, 'products' é acessado diretamente como window.products
function loadProducts(filteredProducts = window.products) { 
    const productCatalog = document.querySelector('.product-catalog');
    productCatalog.innerHTML = ''; // Limpa o catálogo antes de adicionar novos produtos

    if (filteredProducts.length === 0) {
        productCatalog.innerHTML = '<p class="no-results">Nenhum produto encontrado com os filtros selecionados.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const productItem = document.createElement('article');
        productItem.classList.add('product-item');

        // Cria a URL da página de detalhes do produto.
        // product-detail.html está na raiz, então não precisa de 'pages/'
        const productDetailPageUrl = `product-detail.html?id=${product.id}`;

        // Conteúdo HTML para cada produto
        productItem.innerHTML = `
            <a href="${productDetailPageUrl}" aria-label="Ver detalhes do produto: ${product.name}" class="product-link">
                <div class="product-image-container">
                    <img src="${product.imageUrl}" 
                         alt="${product.altText}" 
                         width="300" height="300" loading="lazy">
                    ${product.isNew ? '<span class="badge new-arrival">Novidade!</span>' : ''}
                    ${product.isBestseller ? '<span class="badge bestseller">Mais Vendido!</span>' : ''}
                </div>
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <span class="product-price">${formatCurrency(product.price)}</span>
                    <div class="product-rating" aria-label="Avaliação do produto: ${product.rating} de 5 estrelas baseada em ${product.reviews} avaliações">
                        ${generateRatingStars(product.rating)} (${product.reviews})
                    </div>
                </div>
            </a>
            <button class="view-product-btn" onclick="window.location.href='${productDetailPageUrl}'">Ver Detalhes</button>
        `;
        productCatalog.appendChild(productItem);
    });
}

// Função para aplicar os filtros
function applyFilters() {
    const categoryFilter = document.getElementById('category-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    const searchInput = document.getElementById('search-input').value.toLowerCase();

    let filtered = window.products.filter(product => { // Acessa window.products
        let matchesCategory = true;
        let matchesPrice = true;
        let matchesSearch = true;

        // Filtro por Categoria
        if (categoryFilter && categoryFilter !== '') {
            matchesCategory = product.category === categoryFilter;
        }

        // Filtro por Preço
        if (priceFilter && priceFilter !== '') {
            const [minPrice, maxPrice] = priceFilter.split('-').map(Number);
            matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        }

        // Filtro por Busca (nome, descrição, tags)
        if (searchInput && searchInput.length > 0) {
            matchesSearch = product.name.toLowerCase().includes(searchInput) ||
                            product.description.toLowerCase().includes(searchInput) ||
                            product.tags.some(tag => tag.toLowerCase().includes(searchInput));
        }

        return matchesCategory && matchesPrice && matchesSearch;
    });

    loadProducts(filtered); // Recarrega os produtos com os filtros aplicados
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Carrega todos os produtos quando a página é totalmente carregada
    loadProducts();

    // Evento para o botão de aplicar filtros
    const applyFiltersBtn = document.querySelector('.apply-filters-btn');
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', applyFilters);
    }

    // Evento para a barra de busca (pode adicionar um evento 'keyup' para busca em tempo real)
    const searchButton = document.querySelector('.search-bar button');
    if (searchButton) {
        searchButton.addEventListener('click', applyFilters); // Aplica filtros ao clicar na busca
    }
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') { // Permite buscar ao pressionar Enter
                applyFilters();
            }
        });
    }

    // Eventos para mudança nos selects de filtro (opcional, pode ser mais rápido)
    const categoryFilterSelect = document.getElementById('category-filter');
    const priceFilterSelect = document.getElementById('price-filter');
    if (categoryFilterSelect) {
        categoryFilterSelect.addEventListener('change', applyFilters);
    }
    if (priceFilterSelect) {
        priceFilterSelect.addEventListener('change', applyFilters);
    }
});