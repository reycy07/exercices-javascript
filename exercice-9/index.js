/*
 * Crea 3 funciones, cada una encargada de detectar si una cadena de
 * texto es un heterograma, un isograma o un pangrama.
 * - Debes buscar la definición de cada uno de estos términos.
 */

const aphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

const deletedSpaces = (word)=>{
    let arrayWord = [...word].filter( letter => letter !== ' ');
    return arrayWord;
}

const isHeto = (word)=>{
    return (new Set(word).size === word.length)? 'Es heterogena' : 'Es un Isogrma'; 
}

const isIsog = (word) =>{
    let currentLetter = '';
    let max = 0
    let mayorLetter = '';
    
    for (let i = 0; i < word.length; i++) {
        let count = 0; 
        currentLetter = word[i];

        for (let j = 0; j < word.length; j++) {

            if(currentLetter === word[j]) {
                count++;
            }

            if (count > max ) {
                mayorLetter = currentLetter;
                max = count;
            }
        }
        
    }

    return `La Frese es un Isograma y la letra que mas se repite es: ${mayorLetter} con un cantidad de repeticiones de ${max}`;
    
}

const isPana = (word) =>{
    return !aphabet.some( letter =>{
        return !word.includes(letter);
    })
}

// console.log(isHeto(deletedSpaces('hola demu')))
// console.log(isPana(deletedSpaces('freight to me sixty dozen quart jars and twelve black pans')));
console.log(isIsog(deletedSpaces('todo esto es una farza cartun')));