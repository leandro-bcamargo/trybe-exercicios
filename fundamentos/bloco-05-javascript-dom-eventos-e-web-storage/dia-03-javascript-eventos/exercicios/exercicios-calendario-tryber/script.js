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
    console.log(arrayDays.length);
    for (var j = 0; j < arrayDays.length; j += 1) {
        if (j === 25 || j === 26 || j === 32) {
            arrayDays[j].classList.add("holiday");
        }
        else if (j === 5 || j === 12 || j === 19 || j === 26)
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
   button.style.width = "80px"
   button.style.height = "40px"
   let parentOfButton = document.querySelector("div.buttons-container");
   console.log(parentOfButton);
   parentOfButton.appendChild(button);
 }
 addFeriados("Feriados")
 



    
  

