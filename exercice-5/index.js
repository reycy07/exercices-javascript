/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */

let number = 0;
let fibonacci = false;
let primeNumber = true;
let evenNumber = false

const validateNumber = number =>{
    let result = '';

    evenNumber = validateEvenNumber(number);
    fibonacci = validatefibonacci(number);
    primeNumber = validatePrimeNumber(number);

    result = primeNumber ?`${number} es primo, `: `${number} NO es primo, `;
    result += fibonacci ? `es fibonacci ` : `NO es fibonacci `;
    result += evenNumber ? `y es par` : `y es impar`;

    console.log(result);
}

function validatefibonacci(number) {
    let x = 5 * number * number;
    let squareRoot1 = Math.sqrt(x + 4);
    let squareRoot2 = Math.sqrt(x - 4);

    return Number.isInteger(squareRoot1) || Number.isInteger(squareRoot2);
}

function validatePrimeNumber(number) {
    let counter = 2;

    while (counter < number) {

        if(number % counter === 0) return false;
        counter++;
    }

    return true;
}
function validateEvenNumber(number) {return number % 2 === 0}


validateNumber(22);

