/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */
import readline from 'readline';
import { alphabet } from './modules/alphabet.js';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese una cadena de texto: ', (textinput) => {
    const newText = changeText(textinput);
    console.log(newText);
  rl.close();
});

const changeText = text => text.split('').map(changedLetter).join('');

const changedLetter = letter => alphabet[letter.toLowerCase()];