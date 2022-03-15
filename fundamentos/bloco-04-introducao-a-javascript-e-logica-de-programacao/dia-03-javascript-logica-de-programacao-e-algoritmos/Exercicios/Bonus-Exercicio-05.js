
let indexLastCharacter = 6;
let numberLines = (indexLastCharacter + 1) / 2;
let symbol = "*";
let centralIndex = indexLastCharacter / 2;
let indexLeftmost = centralIndex;
let indexRightmost = centralIndex;
let string = "";

for (let i = 0; i < numberLines; i+= 1) {
    for (let j = 0; j <= indexLastCharacter; j += 1) {
        if (i < numberLines - 1) {
            if (j === indexLeftmost || j === indexRightmost) {
                string += symbol;
            }
            else {
                string += " ";
            }
        }
        else {
            string += symbol;
        }
        
    }
    console.log(string);
    string = "";
    indexLeftmost -= 1;
    indexRightmost += 1;
}

