// Eventos no JS podem ser disparados por uma ação visível do usuário ou pelo próprio navegador (ex. carregamento da página). -->
// DOM on-event handlers -> Eventos disparados pelo próprio navegador. Ex:

// window.onload = jsCarregado; Invoca a função jsCarregado(); quando a página termina de ser carregada.

// Inline event handlers -> Eventos disparados por uma ação visível do usuário escritos no próprio código html

/* <button onClick="maisInfos();">Mais Informações</button> Invoca a função maisInfos() quando se clica no botão. */

    window.onload = pizzaPronta;

    function pizzaPronta(); // Função é invocada somente após a página terminar de carregar.
    alert("Tocou a campainha");
    alert("Recebi a pizza");

    alert("Pedido da pizza") // Alerta é exibido antes de a página terminar de carregar

// Você viu que pode usar o onload , que é um event listener que vem no objeto window do browser, e viu também que pode utilizar o atributo onclick para esperar por eventos de clique em um elemento. -->

// No entanto, utilizar atributos HTML de escutadores de eventos não é uma prática recomendada, por alguns motivos. Um deles é que o ideal é não misturar o seu código HTML com o código JavaScript. Outro motivo é que, se você precisar adicionar events listeners em muitos elementos, ou mesmo precisar mudar qual função é adicionada como resposta a esses eventos nesses elementos depois, fica complicado ter de adicionar manualmente a propriedade em cada um dos elementos. Por essas razões, utilizar eventos inline (como são chamados eventos adicionados diretamente no HTML) é considerada uma má prática.

// Mas então, como utilizar um evento de clique em um elemento? Bem, é para esse e outros que utilizamos o addEventListener. -->

// O código mais comum para criar um escutador de eventos em um elemento é através de uma função nativa do JavaScript , chamada addEventListener . Funções nativas são funções que já existem prontas dentro da linguagem e, como toda função, podem receber parâmetros.

// No seu uso mais comum, addEventListener recebe dois parâmetros:
// O evento que estamos esperando escutar: Exemplos: click , change , mouseover etc;
// A função (criada por você) que será executada quando o evento acontecer.


// addEventListener(tipoEvento, funcao)

// Alguns eventos:

// click
// dblclick
// change
// scroll
// keydown
// mouseleave
// mouseover

// <p id="clicar">Parágrafo a ser clicado</p>

let clickP = document.getElementById("clicar");
clickP.addEventListener("click", recebeClick); // Note que a função não tem parâmetros, uma vez que não está sendo

function recebeClick(eventoDeOrigem) {
    // Objeto evento -> é um objeto que é parâmetro nativo do addEventListener.
    // As duas principais propriedades:
    // Target: o elemento que disparou esse evento que invocou a função
    // Type: o tipo de evento que originou o click - Mouse, keyboard, Screen...
    console.log(eventoDeOrigem.target);
    console.log(eventoDeOrigem.type);
}

// <div>
    // <button id="mouse-over-leave">Botão para ter o mouse passado em cima e removido</button>

let mouseOverLeaveButton = document.getElementById("mouse-over-leave");
mouseOverLeaveButton.addEventListener("mouseover", mouseEmCima);

mouseLeaveButton.addEventListener("mouseleave", mouseSaiuDoElemento)

function mouseEmCima(evento) {
    console.log("Mouse passou por cima");
    console.log(evento.target)
}

function mouseSaiuDoElemento() {
    console.log("Mouse saiu do elemento");
}

clickP.addEventListener("mouseover", mouseEmCima);


// Os mais comuns são: click , change , mouseover e keyup .

// Outra coisa de que vale a pena se lembrar sempre é que todos os elementos podem receber eventos. Tudo depende apenas de sua necessidade. Você pode usar eventos em caixas de texto, botões e até mesmo elementos estáticos, como div e p.

// Você pode colocar quantos event listeners quiser em um mesmo elemento;
// O navegador passa para a função chamada no addEventListener o evento como um parâmetro, podendo ser acessado pela função.

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


// .children[n] -> seleciona o n-ésimo filho
// Todo elemento html é representado no dom por um objeto.
