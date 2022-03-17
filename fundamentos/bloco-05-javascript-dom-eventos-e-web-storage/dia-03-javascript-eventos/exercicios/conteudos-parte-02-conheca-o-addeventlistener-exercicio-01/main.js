const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');






// 1. Copie esse arquivo e edite apenas ele;

// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.

// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Por causa da classe tech.

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
  

// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

let allLis = document.querySelectorAll("li");
for (let i = 0; i < allLis.length; i += 1) {
    allLis[i].addEventListener("click", addClassTech);
  
}

function addClassTech(event) {
    event.target.className = "tech";
    for (let i = 0; i < allLis.length; i += 1) {
        if (allLis[i] !== event.target) {
            allLis[i].classList.remove("tech");
        }
    }
}   

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
let inputBox = document.querySelector("#input");
inputBox.addEventListener("input",changeTechText);

function changeTechText() {
    let textToBeAltered = document.querySelector(".tech");
    textToBeAltered.innerHTML = inputBox.value;

}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
 

// 4.1. Que tal redirecionar para seu portfólio?
let spotrybefy = document.querySelector("h1");
    spotrybefy.addEventListener("dblclick", redirect);

function redirect() {
    window.open("https://github.com/leandro-bcamargo/trybe-exercicios", "_blank");
}
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
let meuTop3 = document.querySelector("#my-spotrybefy");
meuTop3.addEventListener("mouseover", changeColour);


function changeColour() {
    console.log("Passou")
    meuTop3.style.color = "purple";
}
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.