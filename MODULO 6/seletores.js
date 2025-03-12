// 1. Mudar o texto do título
const titulo = document.getElementById("titulo");
titulo.textContent = "Novo Título";

// 2. Alterar o estilo dos itens da lista
const itensLista = document.querySelectorAll("#lista li");
itensLista.forEach(item => {
    item.style.color = "blue";
    item.style.fontStyle = "italic";
});

// 3. Adicionar uma classe a todos os parágrafos
const paragrafos = document.querySelectorAll("p");
paragrafos.forEach(paragrafo => {
    paragrafo.classList.add("destaque");
});

// 4. Alterar o texto do botão
const botao = document.getElementById("botao");
botao.textContent = "Novo Texto do Botão";