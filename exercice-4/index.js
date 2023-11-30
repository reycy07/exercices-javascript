import { alphabet } from "./modules/aphabet.js";
import { symbols } from "./modules/symbols.js"

let password = '';
const size = getRandomNumber(16, 8);
const alphabetSize = alphabet.length - 1;
const symbolstSize = symbols.length - 1;
let numberLoop = 0;

function generatePassword(size) {

    while (password.length <= size) {
        switch (getRandomNumber(2)) {
            case 0:
                numberLoop = getRandomNumber(symbolstSize);
                let symbolCharacter = symbols[numberLoop];
                password+=( symbolCharacter.toString());
                break;
            case 1:
                numberLoop = getRandomNumber(alphabetSize);
                let letter = alphabet[numberLoop];
                password+=letter;
                break;
            case 2:
                let number = getRandomNumber(9).toString();
                password+=(number);
                break;
        
            default:
                break;
        }
        
    }
    console.log(password);
}

function getRandomNumber (max, min = false){

    if(min) return Math.round(Math.random() * (max - min + 1) + min);
    
    return Math.round(Math.random() * max);
}


generatePassword(size);