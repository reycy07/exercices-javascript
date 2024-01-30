/*
 * Dada una URL con parámetros, crea una función que obtenga sus valores.
 * No se pueden usar operaciones del lenguaje que realicen esta tarea directamente.
 *
 * Ejemplo: En la url https://retosdeprogramacion.com?year=2023&challenge=0
 * los parámetros serían ["2023", "0"]
 */
// Declaración de varibles

const URL = 'https://retosdeprogramacion.com?year=2023&challenge=0';
const URL2 = 'https://retosdeprogramacion.com';
let params = [];

// Declaración de la función

function paramsURL(url) {
    
    if(!url.includes('?')){
        console.log(params);
        return
    }
    let paramsStr = url.split('?')[1].split('&');
    

    // const regex = /[?&]([^=#]+)=([^&#]*)/g;

    // params = url.match(regex);

    params =  paramsStr.map( param =>{
        return param.split('=')[1];
    });
    
    console.log(params);    
}
paramsURL(URL);