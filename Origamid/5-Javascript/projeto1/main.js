const animais = document.getElementById("animais")
console.log(animais)// retorna toda a tag, de html a contéudo

const gridS = document.getElementsByClassName("grid-section") // pode tambem retornar um array de comandos

console.log(gridS[0]) // seleciona o 1º

//const ani = document.querySelector("") //retorna o primeiro elemento que combina com o seletor CSS

const linkCSS = document.querySelector('[href^="https://"]'); // todo hrefe que começa com https

const LinkInt = document.querySelector('[href^="#"]')
console.log(LinkInt) // retorna justamente os links internos

const listas = document.querySelectorAll("li")//Retorna uma node list

/*
Html Collection vs NodeList:
-Html Collection possui menos metodos(e não tem o forEach), já o NodeList é mais viavel
-HtmlCollection = getElementByClassList (Atualiza se eu adicionar a classe)
-NodeList = querySelectorAll (se mantém estastico, se adicionar ou remover um elemento em produção ele não atualiza,)
-Ambos são Array-Like(parece array mas não é) 

NodeList.forEach(function(item,index){
	item = elemento
	index = numeração/ordem do elemento
})...pop() = remove e retorna o ultimo item
*/

//Retorne todas as images
const imgs = document.querySelectorAll("img")
console.log(imgs.forEach(function(item,index){
    console.log(item.currentSrc)
}))

//Retorne no console apenas as imagens que começam com a palavra imagem
const imgsImagem = document.querySelectorAll("img[src^='img/imagem']")
console.log(imgsImagem)

//Retorne todos os links internos do site no console
const linksInternos = document.querySelectorAll("[href^='#']")
console.log(linksInternos.forEach(function(item,index){
    console.log(item.href)
}))


//Selecione o 1º h2 dentro de .animais-descricao
const H2Query = document.querySelector(".animais-descricao h2")
console.log(H2Query)

//Selecione o ultimo do site
const parag = document.querySelectorAll("p")
console.log(parag[parag.length -1]) // ou --parag.length