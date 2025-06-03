// js/products.js

// ANOTAÇÃO IMPORTANTE:
// Para evitar o erro "Identifier 'products' has already been declared",
// estamos anexando o array de produtos ao objeto 'window'.
// Isso o torna acessível globalmente a todos os outros scripts (main.js, product-detail.js)
// sem a necessidade de declarações 'const' repetidas.
window.products = [
    {
        id: 'almofada-bordada-jardim', // ID único para o produto
        name: 'Almofada Bordada Exclusiva - Coleção Jardim Secreto', // Nome do produto
        description: 'Almofada feita à mão com bordado detalhado de flores e borboletas em tons pastel. Traz charme e elegância para qualquer ambiente. Perfeita para presentear!', // Descrição resumida
        price: 89.90, // Preço do produto
        imageUrl: 'img/produtos/almofada-bordada-jardim-main.jpg', // Imagem principal
        altText: 'Almofada bordada à mão com design floral delicado para decoração de interiores.', // Texto alternativo da imagem principal
        additionalImages: [ // NOVAS IMAGENS ADICIONAIS
            'img/produtos/almofada-bordada-jardim-detalhe.jpg',
            'img/produtos/almofada-bordada-jardim-ambiente.jpg',
            'img/produtos/almofada-bordada-jardim-fechamento.jpg'
        ],
        category: 'decoracao', // Categoria do produto (para filtros)
        tags: ['almofada', 'bordado', 'flor', 'borboleta', 'decoracao', 'presente', 'sala', 'quarto', 'jardim secreto', 'arte em tecido'], // Tags para busca interna e SEO
        rating: 4.8, // Avaliação (se aplicável)
        reviews: 25, // Número de avaliações
        isNew: true, // Flag para "Novidade"
        isBestseller: false, // Flag para "Mais Vendido"
        features: [ // NOVOS RECURSOS DETALHADOS PARA PÁGINA DE PRODUTO
            "Bordado artesanal exclusivo em fio de seda",
            "Tecido de linho 100% natural, hipoalergênico",
            "Enchimento macio e removível de fibra siliconada",
            "Capa com zíper invisível para fácil lavagem",
            "Dimensões: 45x45cm"
        ],
        materialsAndCare: "Material: Capa de linho e bordado em seda. Enchimento: fibra siliconada. Cuidado: Lavar a capa à mão com sabão neutro. Não usar alvejante. Secar à sombra. Não passar ferro diretamente sobre o bordado." // NOVOS MATERIAIS E CUIDADO
    },
    {
        id: 'caneca-ceramica-personalizada',
        name: 'Caneca de Cerâmica Artesanal - Frase Motivacional',
        description: 'Caneca de cerâmica feita artesanalmente, com design rústico e frase motivacional gravada em alto-relevo. Ideal para seu café ou chá da manhã, trazendo inspiração ao seu dia.',
        price: 45.00,
        imageUrl: 'img/produtos/caneca-ceramica-motivacional.jpg',
        altText: 'Caneca de cerâmica artesanal na cor creme com a frase "Acredite nos seus sonhos" em relevo e detalhes de pintura rústica.',
        additionalImages: [], // Sem imagens adicionais para este exemplo
        category: 'presentes',
        tags: ['caneca', 'ceramica', 'artesanal', 'motivacional', 'cafe', 'cha', 'presente', 'escritorio', 'cozinha', 'feito a mão'],
        rating: 5.0,
        reviews: 12,
        isNew: false,
        isBestseller: true,
        features: [
            "Cerâmica de alta resistência e durabilidade",
            "Capacidade: 300ml",
            "Design ergonômico para melhor manuseio",
            "Gravação em alto-relevo para durabilidade da frase"
        ],
        materialsAndCare: "Material: Cerâmica de alta temperatura. Cuidado: Pode ir ao micro-ondas e lava-louças. Evitar choque térmico."
    },
    {
        id: 'chaveiro-macrame-folha',
        name: 'Chaveiro de Macramê em Formato de Folha',
        description: 'Lindo chaveiro feito em macramê, com design de folha delicado, perfeito para dar um toque boho às suas chaves, bolsas ou mochilas. Feito à mão com fios de algodão sustentáveis.',
        price: 25.50,
        imageUrl: 'img/produtos/chaveiro-macrame-folha.jpg',
        altText: 'Chaveiro artesanal de macramê em formato de folha na cor verde água, pendurado em um gancho e mostrando sua textura.',
        additionalImages: [
            'img/produtos/chaveiro-macrame-folha-outras-cores.jpg' // Exemplo de outra cor/vista
        ],
        category: 'acessorios',
        tags: ['chaveiro', 'macrame', 'folha', 'boho', 'artesanal', 'acessorios', 'bolsa', 'presente', 'fio de algodão', 'feito a mão'],
        rating: 4.5,
        reviews: 30,
        isNew: true,
        isBestseller: false,
        features: [
            "Fio 100% algodão natural",
            "Argola de metal resistente",
            "Leve e compacto, fácil de transportar",
            "Dimensões: 15cm (total com argola)"
        ],
        materialsAndCare: "Material: Fio de algodão. Cuidado: Lavar à mão com água fria e sabão neutro. Secar à sombra. Não torcer."
    },
    {
        id: 'quadro-madeira-personalizado',
        name: 'Quadro Decorativo em Madeira MDF - Personalizável',
        description: 'Quadro rústico em madeira MDF, ideal para decorar a casa com frases, nomes ou datas especiais. Personalize o seu e crie uma peça única que reflete sua identidade!',
        price: 120.00,
        imageUrl: 'img/produtos/quadro-madeira-personalizado.jpg',
        altText: 'Quadro decorativo retangular em madeira MDF com bordas rústicas e texto "Família é onde a vida começa e o amor nunca termina" em preto, pendurado em parede branca.',
        additionalImages: [
            'img/produtos/quadro-madeira-personalizado-variacoes.jpg',
            'img/produtos/quadro-madeira-personalizado-detalhe.jpg'
        ],
        category: 'decoracao',
        tags: ['quadro', 'madeira', 'MDF', 'decoracao', 'personalizado', 'frase', 'familia', 'casa', 'presente personalizado', 'rustico'],
        rating: 4.9,
        reviews: 18,
        isNew: false,
        isBestseller: true,
        features: [
            "Madeira MDF de reflorestamento, sustentável",
            "Impressão de alta qualidade e durabilidade",
            "Inclui gancho para fixação na parede",
            "Opções de tamanho: 20x30cm, 30x40cm, 40x60cm",
            "Totalmente personalizável (texto, fonte, cor)"
        ],
        materialsAndCare: "Material: MDF pintado. Cuidado: Limpar com pano seco ou levemente úmido. Não expor diretamente ao sol ou umidade excessiva."
    },
    {
        id: 'sabonete-artesanal-lavanda',
        name: 'Kit de Sabonetes Artesanais - Essência de Lavanda',
        description: 'Kit com três sabonetes artesanais feitos com óleos essenciais de lavanda, proporcionando relaxamento e cuidado com a pele. Embalagem presenteável e sustentável.',
        price: 55.00,
        imageUrl: 'img/produtos/sabonete-artesanal-lavanda.jpg',
        altText: 'Três sabonetes artesanais redondos na cor lilás, com raminhos de lavanda e uma textura suave, em uma caixa de papel kraft.',
        additionalImages: [
            'img/produtos/sabonete-artesanal-lavanda-caixa.jpg'
        ],
        category: 'presentes',
        tags: ['sabonete', 'artesanal', 'lavanda', 'kit', 'presente', 'bem-estar', 'cuidados-pessoais', 'aroma terapia', 'natural'],
        rating: 4.7,
        reviews: 40,
        isNew: false,
        isBestseller: false,
        features: [
            "Fórmula 100% natural com óleos essenciais puros",
            "Hidrata e suaviza a pele, deixando um perfume duradouro",
            "Livre de parabenos e sulfatos",
            "Embalagem reciclável",
            "Peso por sabonete: 80g"
        ],
        materialsAndCare: "Material: Glicerina vegetal, óleos essenciais de lavanda. Cuidado: Manter em local seco após o uso para maior durabilidade."
    }
    // Adicione mais produtos aqui seguindo a mesma estrutura!
    // Lembre-se de criar as imagens correspondentes na pasta 'img/produtos/'
];