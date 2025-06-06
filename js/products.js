// js/products.js

// ANOTAÇÃO IMPORTANTE:
// Para evitar o erro "Identifier 'products' has already been declared",
// estamos anexando o array de produtos ao objeto 'window'.
// Isso o torna acessível globalmente a todos os outros scripts (main.js, product-detail.js)
// sem a necessidade de declarações 'const' repetidas.
window.products = [
    {
        id: 'Auto Maquiagem Profissional', // ID único para o produto
        buy:'https://go.hotmart.com/S100082295U',
        name: 'Auto Maquiagem Profissional by Bruna Tasca ', // Nome do produto
        description: 'Sabemos o quanto é desafiador olhar para o espelho e sentir que sua beleza não está sendo plenamente expressa. Aquela insegurança que surge ao tentar se maquiar para um evento importante, ou a frustração de não conseguir o olhar desejado para o dia a dia. Você não está sozinha nessa! Mas e se eu te dissesse que existe um caminho simples e divertido para você se tornar a sua própria maquiadora profissional? O curso "Auto Maquiagem Profissional by Bruna Tasca" não é apenas sobre técnicas; é sobre redescobrir sua confiança, iluminar seu sorriso e sentir-se verdadeiramente radiante. Você merece se sentir linda, poderosa e pronta para conquistar o mundo. Este curso é o investimento na mulher incrível que você já é. Não adie mais a sua transformação!', // Descrição resumida
        price: 197.00, // Preço do produto
        imageUrl: 'img/produtos/maquiagem1.jpg', // Imagem principal
        altText: 'Auto Maquiagem Profissional', // Texto alternativo da imagem principal
        additionalImages: [ // NOVAS IMAGENS ADICIONAIS
            'img/produtos/maquiagem2.jpeg',
            'img/produtos/maquiagem3.jpg',
            'img/produtos/maquiagem4.jpg',
            'img/produtos/maquiagem5.jpg'
        ],
        videoUrl: "https://player.vimeo.com/video/840901180?h=96a6d25f00&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", // Use a URL de incorporação do seu vídeo
        category: 'curso', // Categoria do produto (para filtros)
        tags: ['automaquiagem', 'curso', 'renda extra', 'beleza', 'feminina', 'mulher', 'bonita', 'Bruna Tasca'], // Tags para busca interna e SEO
        rating: 4.8, // Avaliação (se aplicável)
        reviews: 25, // Número de avaliações
        isNew: true, // Flag para "Novidade"
        isBestseller: false, // Flag para "Mais Vendido"
        features: [ // NOVOS RECURSOS DETALHADOS PARA PÁGINA DE PRODUTO
            "Curso em video de automaquiagem",
            "Produzido por Bruna Tasca",
            "Aprenda a se automaquiar",
            "Descubra todo o seu potencial",
            "Em videos e apostilas" ],
        materialsAndCare: "* Descobrindo seu Tipo de Pele <br> * Maquiagem LEVE para o Dia a Dia <br> * Pele Resistente para Eventos de Dia <br> * Preparação de Pele - Oleosa e Acneica <br> * Maquiagem PROFISSIONAL Completa <br> * Módulo Especial", // NOVOS MATERIAIS E CUIDADO
    },
    {
        id: 'Escola de Bolo 4.0',
        name: 'Escola de Bolo 4.0 - 4 em 1 by Marrara Bortoloti',
        description: ' mercado de bolos e doces caseiros nunca esteve tão aquecido, e a demanda por produtos de qualidade e com um toque especial é gigantesca. Mas como se destacar? Como garantir que seus bolos sejam lindos, deliciosos e lucrativos? A resposta está em um **método comprovado**, que te ensina desde o zero, desvendando todos os segredos.',
        price: 197.00,
        imageUrl: 'img/marrara/Marrara.jpg',
        altText: 'curso de bolo, escola de bolo, Marrara Bortoloti',
        additionalImages: [], // Sem imagens adicionais para este exemplo
        category: 'Curso',
        tags: ['curso de bolo, escola de bolo, Marrara Bortoloti, bolos perfeitos, decoração de bolo, renda extra, confeitaria, como fazer bolo, bolo para vender, empreender com bolos, curso de doces, receitas de bolo, mini tortas lucrativas, bolos de sucesso, bolos enfeitados'],
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