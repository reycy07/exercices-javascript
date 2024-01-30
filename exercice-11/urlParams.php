<?php 
/*
 * Dada una URL con parámetros, crea una función que obtenga sus valores.
 * No se pueden usar operaciones del lenguaje que realicen esta tarea directamente.
 *
 * Ejemplo: En la url https://retosdeprogramacion.com?year=2023&challenge=0
 * los parámetros serían ["2023", "0"]
 */
// Declaración de varibles


$URL = 'https://retosdeprogramacion.com?year=2023&challenge=0';

function paramsURL($url){
    $paramsArray = [];
    $paramStrings = '';
    if(!str_contains($url,'?')){
        echo '[]';
        return;
    }

    $paramStrings = explode('?', $url)[1];
    $paramStrings = explode('&', $paramStrings);

    foreach ($paramStrings as  $param) {
        array_push($paramsArray, (explode('=', $param)[1]));
    }

    var_dump($paramsArray);
}

paramsURL($URL);