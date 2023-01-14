// Description: Exemplos de manipulação do DOM
var aba = window.document.getElementById("nomeAba");

aba.innerHTML;
aba.innerHTML = "Itens";

// Manipulação do DOM 2
var lista = window.document.getElementsByClassName("consumo");
HTMLCollection(3)[(li.consumo, li.consumo, li.consumo)];
lista.item(1).innerHTML = "Folha A4";

// Manipulação do DOM 3
var listaTag = window.document.getElementsByTagName("li");
HTMLCollection(5)[(li.consumo, li.consumo, li, li.consumo, li)];
listaTag.item(0).innerHTML = "Cola bastão";


// Manipulação do DOM 4
var clique = window.document.getElementById("textoPagina");
clique.addEventListener("click", function () {
    alert("Clicou no texto");
});

// Manipulação do DOM 5
var titulo = window.document.getElementById("tituloPagina");
titulo.addEventListener("click", function () {
    titulo.innerText = "Título clique";
});

// Manipulação do DOM 6
window.document.addEventListener("keydown", (event) => {
    if (event.key === 13) {
        titulo.innerText = "Título enter";
    }
});

// Manipulação do DOM 7 com comandos adicionais
var ulDom = window.document.getElementById("listaItens");
undefined;

ulDom.firstElementChild;

ulDom.lastElementChild;

ulDom.appendChild;

ulDom.parentElement;
