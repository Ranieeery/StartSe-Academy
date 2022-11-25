```js
> var aba = window.document.getElementById("nomeAba")
undefined

> aba
<title id=​"nomeAba">​Estoque​</title>

> aba.innerHTML
'Estoque'

> aba.innerHTML = 'Itens' 
'Itens'
```
---
```js
> var lista = window.document.getElementsByClassName("consumo")
undefined

> lista
HTMLCollection(3) [li.consumo, li.consumo, li.consumo]

> lista.item(1).innerHTML = 'Folha A4'
'Folha A4'
```
---
```js
> var listaTag = window.document.getElementsByTagName("li")
undefined

> listaTag
HTMLCollection(5) [li.consumo, li.consumo, li, li.consumo, li]

> listaTag.item(0).innerHTML = 'Cola bastão'
'Cola bastão'
```
---
```js
> var clique = window.document.getElementById("textoPagina")
undefined

> clique
<p id=​"textoPagina">​Lista de itens utilizados no local:​</p>​

> clique.addEventListener("click", function() {
    alert('Clicou no texto')
})
undefined
```
![alert js](https://i.imgur.com/K4DUvrS.png)

