
window.onload = homeworkFunction();
function homeworkFunction() {
    let selectTextColor = document.querySelector("#text-color");
    selectTextColor.addEventListener("change", function() {
        let selectedTextColor = selectTextColor.selectedOptions[0]; // HTML collection que contém o elemento <option> que estiver selecionado naquele momento. Pode haver mais de um, mas geralmente há apenas um, por isso o índice 0.
        document.querySelector("#paragraph").style.color = selectedTextColor["value"];
    })

    let select = document.querySelector("#background-color");
    select.addEventListener("change", function() {
       let selected = select.selectedOptions[0];
       document.body.style.backgroundColor = selected["value"];
       localStorage.setItem("backgroundColor-5.4", selected["value"]);
    })

    let inputFontSize = document.querySelector("input[name='input-font-size']");
    inputFontSize.addEventListener("change", function() {
        let paragraphText = document.querySelector("p"); 
        paragraphText.style.fontSize = inputFontSize.value + "px";
        localStorage.setItem("fontSize-5.4", inputFontSize.value + "px");

    })
   let paragraphText = document.querySelector("p");
   let savedBackground = localStorage.getItem("backgroundColor-5.4");
   document.body.style.backgroundColor = savedBackground;
   let savedFontSize = localStorage.getItem("fontSize-5.4");
   paragraphText.style.fontSize = savedFontSize;


}



    