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