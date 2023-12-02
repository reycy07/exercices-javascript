/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "🗿" (piedra), "📄" (papel),
 *   "✂️" (tijera), "🦎" (lagarto) o "🖖" (spock).
 * - Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".
 * - Debes buscar información sobre cómo se juega con estas 5 posibilidades.
 */

const values ={
    tijera: {
      papel: true,
      lagarto: true,  
      piedra: false,
      sponk: false,
    },
    papel: {
        piedra: true,
        sponk: true,
        lagarto: false,  
        tijera: false,
    },
    piedra : {
        lagarto: true,  
        tijera: true,
        sponk: false,
        papel: false,
    },
    lagarto : {
        papel: true,
        sponk: true,
        tijera: false,
        piedra: false,  
    },
    sponk : {
        tijera: true,
        piedra: true,  
        papel: false,
        lagarto: false,
    },
}
let match = '';



function inputPlayers (player1, player2){

    match = player1 === player2 ? 'Tie' : values[player1][player2]  ? 'Player 1 Winner' :  'Player 2 Winner';
    console.log(match);
}


inputPlayers('tijera', 'piedra');
inputPlayers('tijera', 'lagarto');
inputPlayers('sponk', 'lagarto');
inputPlayers('piedra', 'lagarto');
inputPlayers('papel', 'lagarto');
inputPlayers('lagarto', 'sponk');
inputPlayers('papel', 'papel');
