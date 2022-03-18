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
  console.log(days);
  for (let i = 0; i < days.length; i += 1) {
    days[i].addEventListener("mouseover", function () {
      days[i].style.fontSize = "2em";
      console.log(days[i]);
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