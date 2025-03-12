// 1. Array para armazenar os livros no estoque
let estoque = [];

// 2. Funções para gerenciar o estoque

// Adicionar um novo livro ao estoque
const adicionarLivro = (titulo, autor, quantidade) => {
    // Verifica se o livro já existe no estoque
    const livroExistente = estoque.find(livro => livro.titulo === titulo);
    if (livroExistente) {
        console.log(`Livro "${titulo}" já existe no estoque.`);
    } else {
        estoque.push({ titulo, autor, quantidade });
        console.log(`Livro "${titulo}" adicionado ao estoque.`);
    }
};

// Remover um livro do estoque pelo título
const removerLivro = (titulo) => {
    const indiceLivro = estoque.findIndex(livro => livro.titulo === titulo);
    if (indiceLivro !== -1) {
        estoque.splice(indiceLivro, 1);
        console.log(`Livro "${titulo}" removido do estoque.`);
    } else {
        console.log(`Livro "${titulo}" não encontrado no estoque.`);
    }
};

// Atualizar a quantidade de um livro no estoque
const atualizarQuantidade = (titulo, novaQuantidade) => {
    const livro = estoque.find(livro => livro.titulo === titulo);
    if (livro) {
        livro.quantidade = novaQuantidade;
        console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
    } else {
        console.log(`Livro "${titulo}" não encontrado no estoque.`);
    }
};

// Listar todos os livros no estoque
const listarLivros = () => {
    if (estoque.length === 0) {
        console.log("O estoque está vazio.");
    } else {
        console.log("Livros no estoque:");
        estoque.forEach(livro => {
            console.log(`- Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
        });
    }
};

// 3. Exemplos de uso

// Adicionar livros ao estoque
adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 10);
adicionarLivro("1984", "George Orwell", 5);
adicionarLivro("Dom Quixote", "Miguel de Cervantes", 7);

// Listar livros no estoque
listarLivros();

// Atualizar a quantidade de um livro
atualizarQuantidade("1984", 8);

// Remover um livro do estoque
removerLivro("Dom Quixote");

// Listar livros no estoque após remoção
listarLivros();