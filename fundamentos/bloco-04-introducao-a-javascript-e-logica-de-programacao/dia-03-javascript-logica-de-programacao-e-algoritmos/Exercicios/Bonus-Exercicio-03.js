let numberLines = 5;
let indexLastCharacter = 4;
let symbol = "*";
let indexAfterAddStar = 4;
let string = "";

for (let i = 0; i < numberLines; i+= 1) {
    for (let j = 0; j <= indexLastCharacter; j += 1) {
        if (j >= indexAfterAddStar) {
            string += symbol;
        }
        else {
            string += " ";
        }
    }
    console.log(string);
    string = "";
    indexAfterAddStar -= 1;
}














// let size = 5;
// let symbol = "*";
// let inputLine = "";
// let inputPosition = size - 1;
// for (let lineIndex = 0; lineIndex < size; lineIndex += 1) {
//     for (let columnIndex = 0; columnIndex < size; columnIndex += 1) {
//         if (columnIndex < inputPosition) {
//             inputLine += " ";
//         }
//         else {
//             inputLine += symbol;
//         }
//     }
//     console.log(inputLine);
//     inputLine = "";
//     inputPosition -= 1;
// }


        
        
        
