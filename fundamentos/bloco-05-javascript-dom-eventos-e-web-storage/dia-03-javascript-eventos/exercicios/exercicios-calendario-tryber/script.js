function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  function createDaysCalendar() {
    for (var i = 0; i < dezDaysList.length; i += 1) {
        let parentCalendarDays = document.querySelector("#days");
        let calendarDay = document.createElement("li");
        parentCalendarDays.appendChild(calendarDay);
        calendarDay.className = "day";
        calendarDay.innerText = dezDaysList[i];
    }
    let arrayDays = document.querySelectorAll(".day");
    for (var j = 0; j < arrayDays.length; j += 1) {
        if (j === 25 || j === 26 || j === 32) {
            arrayDays[j].classList.add("holiday");
        }
        if (j === 5 || j === 12 || j === 19 || j === 26)
            arrayDays[j].classList.add("friday");
    }
}
createDaysCalendar();

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"


 function addFeriados (string) {
   let button = document.createElement("button");
   button.innerText = string;
   button.id = "btn-holiday";
   let parentOfButton = document.querySelector("div.buttons-container");
   parentOfButton.appendChild(button);
 }
 addFeriados("Feriados")
 
//  Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .


function addClickEvent(color) {
  let button = document.querySelector("#btn-holiday");
  button.addEventListener("click", function() {
    let holidaysArray = document.querySelectorAll(".holiday");
    for (let i = 0; i < holidaysArray.length; i += 1) {
      if (holidaysArray[i].style.backgroundColor === color) {
        holidaysArray[i].style.backgroundColor = "rgb(238,238,238)";
      }
      else {
        holidaysArray[i].style.backgroundColor = color;
      }
    }
  })
} 
addClickEvent("lightgreen");


// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createButton(string) {
  let buttonFriday = document.createElement("button");
  buttonFriday.innerHTML = string;
  buttonFriday.id = "btn-friday";
  let buttonFridayParent = document.querySelector(".buttons-container");
  buttonFridayParent.appendChild(buttonFriday);

}
createButton("Sexta-feira");

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function addClickFriday() {
  let buttonFriday = document.querySelector("#btn-friday");
  buttonFriday.addEventListener("click", function() {
    let allFridays = document.querySelectorAll(".friday"); 
    for (let j = 0; j < allFridays.length; j += 1) {
      if (allFridays[j].innerText === "sexta-feira") {
        switch (j) {
          case 0:
            allFridays[j].innerText = "4";
            break;
          case 1:
            allFridays[j].innerText = "11";
            break;
          case 2:
            allFridays[j].innerText = "18";
            break;
          case 3:
            allFridays[j].innerText = "25";
            break;
        }
      }
      else {
        allFridays[j].innerText = "sexta-feira";
      }
    }
  })
}
addClickFriday();

// mplemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

function addZoom() {
  days = document.querySelectorAll(".day");
  for (let i = 0; i < days.length; i += 1) {
    days[i].addEventListener("mouseover", function () {
      days[i].style.fontSize = "2em";
    })
    days[i].addEventListener("mouseout", function () {
      days[i].style.fontSize = "1em";
    })
  }
}
addZoom();

// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function addTask(string) {
  let spanTask = document.createElement("span");
  spanTask.innerText = string;
  let spanParent = document.querySelector(".my-tasks");
  spanParent.appendChild(spanTask);
}
addTask("cozinhar");

// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addColor(string) {
  let divTask = document.createElement("div");
  divTask.className = "task";
  divTask.style.backgroundColor = string;
  let divTaskParent = document.querySelector(".my-tasks");
  divTaskParent.appendChild(divTask);
}
addColor("teal");

// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function addClassTask() {
  let divTask = document.querySelector(".task");
  divTask.addEventListener("click", function () {
    if (divTask.classList.contains("task")) {
      divTask.classList = "task-selected";
    }
    else if (divTask.classList.contains("task-selected")) {
      divTask.classList = "task";
    }   
  }) 
}

addClassTask();

// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function addEventColor() {
  let arrayDays = document.querySelectorAll(".day");
  for (let i = 0; i < arrayDays.length; i += 1) {
    arrayDays[i].addEventListener("click", function () {
      let taskSelected = document.querySelector(".task-selected");
      let colorTaskSelected = taskSelected.style.backgroundColor;
      console.log(colorTaskSelected);
      console.log(arrayDays[i].style.backgroundColor);
      if (arrayDays[i].style.backgroundColor !== colorTaskSelected) {
        arrayDays[i].style.backgroundColor = colorTaskSelected;
      }
      else {
        arrayDays[i].style.backgroundColor = "#eee"
      }
    })
  }
}
addEventColor();  

// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: key .

function addCommittment() {
  let buttonAdd = document.querySelector("#btn-add");
  let taskInput = document.querySelector("#task-input");
  buttonAdd.addEventListener("click", function() {
    let taskContent = taskInput.value;
    if (taskContent === "") {
      alert("Erro. Favor digitar um compromisso.")
    }
    let myTasksParent = document.querySelector(".my-tasks");
    let myTask = document.createElement("span");
    myTask.innerHTML = taskContent;
    myTasksParent.appendChild(myTask);
    myTask.style.display = "block"
  })
  taskInput.addEventListener("keypress", function(event) {
    let taskContent = taskInput.value;
    if (taskContent === "") {
      alert("Erro. Favor digitar um compromisso.")
    }
    else if (event.key === "Enter") {
      let myTasksParent = document.querySelector(".my-tasks");
      let myTask = document.createElement("span");
      myTask.innerHTML = taskContent;
      myTasksParent.appendChild(myTask);
      myTask.style.display = "block"
    }
  })
}
addCommittment();