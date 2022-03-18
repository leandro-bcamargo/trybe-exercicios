
window.onload = homeworkFunction();
function homeworkFunction() {
    let selectTextColor = document.querySelector("#text-color");
    selectTextColor.addEventListener("change", function() {
        let selectedTextColor = selectTextColor.selectedOptions[0];
        document.querySelector("#paragraph").style.color = selectedTextColor["value"];
    })

    let select = document.querySelector("#background-color");
    select.addEventListener("change", function() {
       let selected = select.selectedOptions[0];
       document.body.style.backgroundColor = selected["value"];
    })

    let inputFontSize = document.querySelector("input[name='input-font-size']");
    inputFontSize.addEventListener("change", function() {
        let paragraphText = document.querySelector("p"); 
        paragraphText.style.fontSize = inputFontSize.value + "px";
    })


}



    