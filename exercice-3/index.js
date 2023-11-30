/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 * 
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.   
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.   
 */
import readline from 'readline';

let player1 = 0;
let player2 = 0;


const point = ['love', 15, 30, 40, 'winner'];

const validateInput = input => input === 'p1' || input === 'p2'; 


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


function playgame() {

    rl.question('Ingrese una cadena de texto: ', (textinput) => {

        const input = textinput.toLowerCase();
    
        if(validateInput(input)){
            if(input === 'p1') {
                player1++;
            }
            if(input === 'p2') {
                player2++;
            }
            if(point[player1] === 'winner' ) {
                console.log('Ha gando el jugador 1');
                rl.close();
                return;
            };
            if(point[player2] === 'winner' ) {
                console.log('Ha gando el jugador 2');
                rl.close();
                return;
            };

            if(point[player1] === 40 && point[player2] === 40){
                console.log('Deuce');
            }else{
               console.log(`player 1: ${point[player1]} - player 2: ${point[player2]}`);
               playgame();
            }
    
        }else{
            console.log('Entrada inválida. Por favor, ingrese "p1" o "p2".');
            playgame();
        }
    
    });
    
}

playgame();




