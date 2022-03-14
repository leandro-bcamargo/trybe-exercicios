let urgente = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < urgente.length; i += 1) {
    urgente[i].style.backgroundColor = "purple";
}

let naoUrgente = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < naoUrgente.length; i += 1) {
    naoUrgente[i].style.backgroundColor = "black";
}

let urgenteDiv = document.querySelectorAll(".emergency-tasks");
for (let i = 0; i < urgenteDiv.length; i += 1) {
    urgenteDiv[i].style.backgroundColor = "salmon";
}

let naoUrgenteDiv = document.querySelectorAll(".no-emergency-tasks");
for (let i = 0; i < naoUrgenteDiv.length; i += 1) {
    naoUrgenteDiv[i].style.backgroundColor = "yellow";
}

console.log(naoUrgenteDiv);