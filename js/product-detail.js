// js/product-detail.js

// ANOTAÇÃO IMPORTANTE:
// Não precisamos declarar 'products' novamente aqui,
// pois ela já foi definida globalmente em products.js como window.products.
// Podemos acessá-la diretamente.

// Função para formatar o preço em moeda brasileira (reutilizada de main.js)
function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Função para gerar as estrelas de avaliação (reutilizada de main.js)
function generateRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    let starsHtml = '';
    for (let i = 0; i < fullStars; i++) starsHtml += '★';
    if (halfStar) starsHtml += '☆';
    for (let i = 0; i < emptyStars; i++) starsHtml += '☆';

    return starsHtml;
}

// Comentários Fictícios para a seção de avaliações
const comments = [
    {
        name: "Ana Paula S.",
        photo: "img/avatars/avatar1.jpg", // CAMINHO CORRIGIDO: Agora direto da raiz para img/avatars
        rating: 5,
        text: "Simplesmente apaixonada pela minha almofada! O bordado é impecável e a qualidade do tecido é ótima. Chegou super rápido e bem embalada. Recomendo muito!",
        date: "15 de Maio, 2025"
    },
    {
        name: "Carlos Eduardo L.",
        photo: "img/avatars/avatar2.jpg", // CAMINHO CORRIGIDO
        rating: 4,
        text: "A caneca é linda e muito bem feita. O design rústico é exatamente como eu queria. A única observação é que a cor é um pouco mais clara ao vivo. Mas amei!",
        date: "10 de Maio, 2025"
    },
    {
        name: "Mariana R. P.",
        photo: "img/avatars/avatar3.jpg", // CAMINHO CORRIGIDO
        rating: 5,
        text: "Comprei o quadro personalizado para o quarto do meu bebê e ficou perfeito! A equipe foi super atenciosa na personalização. O acabamento é de primeira. Faria mais compras aqui!",
        date: "02 de Maio, 2025"
    },
    {
        name: "João Victor M.",
        photo: "img/avatars/avatar4.jpg", // CAMINHO CORRIGIDO
        rating: 5,
        text: "O kit de sabonetes de lavanda é maravilhoso. O cheiro é suave e a pele fica super macia. Ótima opção para presentear, a embalagem é um charme.",
        date: "28 de Abril, 2025"
    }
    // Adicione mais comentários se desejar, seguindo a estrutura
];

// Função para carregar um produto específico e preencher a página
function loadProductDetails() {
    // 1. Obter o ID do produto da URL
    // Exemplo de URL: yourstore.com/product-detail.html?id=almofada-bordada-jardim
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        // Se não houver ID na URL, redireciona ou mostra uma mensagem de erro
        // CAMINHO CORRIGIDO: index.html está na raiz
        document.querySelector('main').innerHTML = '<p class="error-message">Produto não encontrado. Por favor, volte ao <a href="index.html">catálogo</a>.</p>'; 
        document.title = 'Produto Não Encontrado | Sua Loja Online';
        document.querySelector('meta[name="description"]').setAttribute('content', 'Página de produto não encontrada em Sua Loja Online.');
        document.querySelector('link[rel="canonical"]').setAttribute('href', window.location.href);
        return;
    }

    // 2. Encontrar o produto no array 'products' (acessando via window.products)
    const product = window.products.find(p => p.id === productId); // Acessa window.products

    if (!product) {
        // Produto não encontrado no array
        // CAMINHO CORRIGIDO: index.html está na raiz
        document.querySelector('main').innerHTML = '<p class="error-message">Produto não encontrado. Por favor, volte ao <a href="index.html">catálogo</a>.</p>'; 
        document.title = 'Produto Não Encontrado | Sua Loja Online';
        document.querySelector('meta[name="description"]').setAttribute('content', 'Página de produto não encontrada em Sua Loja Online.');
        document.querySelector('link[rel="canonical"]').setAttribute('href', window.location.href);
        return;
    }

    // 3. Preencher os elementos HTML com os dados do produto

    // Meta Tags e Título da Página (SEO)
    document.title = `${product.name} | Sua Loja Online - Artesanato Personalizado`;
    document.querySelector('meta[name="description"]').setAttribute('content', `Compre ${product.name}, ${product.description.substring(0, 100)}... Peça exclusiva e feita à mão. Visite agora!`);
    document.querySelector('link[rel="canonical"]').setAttribute('href', `https://www.sua-loja.com.br/produto-${product.id}.html`); // URL canônica do produto específico

    // Informações Básicas do Produto
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-price').textContent = formatCurrency(product.price);
    
    const productRatingDetail = document.getElementById('product-rating-detail');
    productRatingDetail.innerHTML = `${generateRatingStars(product.rating)} (${product.reviews} avaliações)`;
    productRatingDetail.setAttribute('aria-label', `Avaliação do produto: ${product.rating} de 5 estrelas baseada em ${product.reviews} avaliações`);

    // Descrição Completa (formato de boas práticas)
    document.getElementById('product-description-full').textContent = product.description;
    
    const productMaterialsCare = document.getElementById('product-materials-care');
    productMaterialsCare.innerHTML = product.materialsAndCare || "Feito com materiais de alta qualidade. Para maior durabilidade, siga as instruções de cuidado na etiqueta.";

    const productFeaturesList = document.getElementById('product-features');
    productFeaturesList.innerHTML = ''; // Limpa antes de adicionar
    const features = product.features || [
        "Feito artesanalmente com carinho e atenção aos detalhes",
        "Design exclusivo e único, perfeito para presentear",
        "Materiais de alta qualidade e durabilidade",
        "Disponível para personalização (entre em contato!)"
    ];
    features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        productFeaturesList.appendChild(li);
    });


    // Galeria de Imagens
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = product.imageUrl;
    mainImage.alt = product.altText;

    const thumbnailGallery = document.getElementById('thumbnail-gallery');
    thumbnailGallery.innerHTML = ''; // Limpa as miniaturas existentes

    // Array de todas as imagens do produto (principal + adicionais)
    const allProductImages = [product.imageUrl, ...(product.additionalImages || [])];
    
    allProductImages.forEach((imgSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        thumb.alt = product.altText + (index > 0 ? ` - Vista ${index + 1}` : ''); // Alt text descritivo para miniaturas
        thumb.classList.add('thumbnail');
        if (index === 0) {
            thumb.classList.add('active'); // Marca a primeira como ativa
        }
        thumb.addEventListener('click', () => {
            mainImage.src = imgSrc;
            mainImage.alt = thumb.alt; // Atualiza o alt da imagem principal
            // Remove a classe 'active' de todas as miniaturas e adiciona na clicada
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
        thumbnailGallery.appendChild(thumb);
    });

    // Botão de Comprar
    const buyNowButton = document.getElementById('buy-now-button');
    // Este é o link para o carrinho/checkout. Você pode adicionar lógicas JS para adicionar ao carrinho aqui.
    // Lembre-se de substituir este link pela URL real do seu sistema de carrinho/compra.
   // buyNowButton.href = `/carrinho?produtoId=${product.id}&quantidade=1`; // Exemplo de link para carrinho
        buyNowButton.href = product.buy; // Exemplo de link para carrinho
        buyNowButton.target = "_blank"; // Abre a página de compra em uma nova janela

    // Dados Estruturados (Schema.org Product)
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": allProductImages, // Array de URLs de imagem
        "description": product.description,
        "sku": product.id, // Use o ID do produto como SKU
        "brand": {
            "@type": "Brand",
            "name": "Sua Loja Online" // Nome da sua marca
        },
        "offers": {
            "@type": "Offer",
            "url": `https://www.sua-loja.com.br/produto-${product.id}.html`, // URL canônica do produto
            "priceCurrency": "BRL",
            "price": product.price,
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock", // ou OutOfStock, PreOrder etc.
            "seller": {
                "@type": "Organization",
                "name": "Sua Loja Online"
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": product.rating,
            "reviewCount": product.reviews
        },
        // Adicione avaliações aqui se você tiver reviews específicos para o produto
    };
    document.getElementById('product-schema').textContent = JSON.stringify(productSchema, null, 2);


    // Carregar Comentários Fictícios
    const customerReviewsContainer = document.getElementById('customer-reviews');
    customerReviewsContainer.innerHTML = ''; // Limpa antes de adicionar

    comments.forEach(comment => {
        const reviewItem = document.createElement('article');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `
            <div class="reviewer-info">
                <img src="${comment.photo}" alt="Foto de perfil de ${comment.name}" width="60" height="60">
                <div class="reviewer-details">
                    <h4>${comment.name}</h4>
                    <div class="review-rating">${generateRatingStars(comment.rating)}</div>
                </div>
            </div>
            <p class="review-text">${comment.text}</p>
            <span class="review-date">${comment.date}</span>
        `;
        customerReviewsContainer.appendChild(reviewItem);
    });

    // Carregar Produtos Relacionados (Exemplo: produtos da mesma categoria, excluindo o atual)
    const relatedProductsContainer = document.getElementById('related-products');
    relatedProductsContainer.innerHTML = '';

    const related = window.products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4); // Acessa window.products

    if (related.length > 0) {
        related.forEach(relatedProduct => {
            const productItem = document.createElement('article');
            productItem.classList.add('product-item'); // Reutiliza estilo de card de produto
            productItem.innerHTML = `
                <a href="product-detail.html?id=${relatedProduct.id}" aria-label="Ver detalhes do produto: ${relatedProduct.name}" class="product-link">
                    <div class="product-image-container">
                        <img src="${relatedProduct.imageUrl}" 
                             alt="${relatedProduct.altText}" 
                             width="300" height="300" loading="lazy">
                    </div>
                    <div class="product-details">
                        <h3>${relatedProduct.name}</h3>
                        <p class="product-description">${relatedProduct.description.substring(0, 80)}...</p>
                        <span class="product-price">${formatCurrency(relatedProduct.price)}</span>
                        <div class="product-rating">${generateRatingStars(relatedProduct.rating)}</div>
                    </div>
                </a>
                <button class="view-product-btn" onclick="window.location.href='product-detail.html?id=${relatedProduct.id}'">Ver Detalhes</button>
            `;
            relatedProductsContainer.appendChild(productItem);
        });
    } else {
        relatedProductsContainer.innerHTML = '<p>Nenhum produto relacionado encontrado.</p>';
    }
}

// Chamar a função ao carregar a página
document.addEventListener('DOMContentLoaded', loadProductDetails);