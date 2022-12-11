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
<div align='center'><img src='https://i.imgur.com/K4DUvrS.png'/><div align='left'>

---
```js
> var titulo = window.document.getElementById("tituloPagina")
undefined

> titulo.addEventListener("click", function() {
    titulo.innerText = 'Título clique'
})
undefined
```

```js
//Old
window.document.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    titulo.innerText = 'Título enter';
  }
})
//New !!!
window.document.addEventListener("keydown", (event) => {
  if (event.key === 'Enter') {
    titulo.innerText = 'Título enter';
  }
});
```
<div align='center'>
<a href='https://www.toptal.com/developers/keycode'><img src='https://custom-icon-badges.demolab.com/badge/keycodes javascript-323330.svg?logo=GoogleDomains&logoColor=white&style=for-the-badge&labelColor=F7951E'/></a>
<a href='https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event'><img src='https://custom-icon-badges.demolab.com/badge/mozilla%20reference-323330.svg?logo=mozilla&logoColor=white&style=for-the-badge&labelColor=9933CC'/></a>
</div><br>

```js
> var ulDom = window.document.getElementById("listaItens")
undefined
> ulDom
<ul id="listaItens">

> ulDom.firstElementChild
<li class="consumo">

> ulDom.lastElementChild
<li>

> ulDom.appendChild
function appendChild()

> ulDom.parentElement
<div>
```


