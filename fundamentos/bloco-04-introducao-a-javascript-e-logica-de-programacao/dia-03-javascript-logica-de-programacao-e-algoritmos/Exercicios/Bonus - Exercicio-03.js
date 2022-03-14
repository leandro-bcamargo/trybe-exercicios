let size = 5;
let symbol = "*";
let inputLine = "";
let inputPosition = size - 1;
for (let lineIndex = 0; lineIndex < size; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex < size; columnIndex += 1) {
        if (columnIndex < inputPosition) {
            inputLine += " ";
        }
        else {
            inputLine += symbol;
        }
    }
    console.log(inputLine);
    inputLine = "";
    inputPosition -= 1;
}


// let n = 5;
// let string = "";
// for (let i = 1; i < n + 1; i += 1) {
//     for (let j = 0; j < n - i; j += 1) {
//         string += " ";
//     }
//     for (let k = 0; k < i; k += 1) {
//         string += "*";
//     }
//     console.log(string);
//     string = "";
// }
        
        
        
