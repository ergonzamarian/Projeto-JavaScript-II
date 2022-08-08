const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];


itens.forEach(element => {
    console.log(element.nome, element.quantidade);
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    criaElemento(nome.value, quantidade.value);
    nome.value = "";
    quantidade.value = "";
    
})

function criaElemento(nome, quantidade) {

    console.log(nome);
    console.log(quantidade);

    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);

    const itemAtual = {
        "nome": nome, 
        "quantidade": quantidade
    };

    itens.push(itemAtual);

    localStorage.setItem("item", JSON.stringify(itens));

}
