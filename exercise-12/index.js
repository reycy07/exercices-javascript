/*
 * Crea una función que sea capaz de detectar si existe un viernes 13 en el mes y el año indicados.
 * - La función recibirá el mes y el año y retornará verdadero o falso.
*/

function getDay(year, month,day = 13) {

    const dateUser = new Date(year, month, day).getDay();

    return dateUser === 5 ;
}

const date = new Date();
console.log(getDay(date.getFullYear(), date.getMonth()));
console.log(getDay(date.getFullYear(), 8));