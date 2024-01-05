/*
 * Llamar a una API es una de las tareas más comunes en programación.
 *
 * Implementa una llamada HTTP a una API (la que tú quieras) y muestra su
 * resultado a través de la terminal. Por ejemplo: Pokémon, Marvel...
 *
 * Aquí tienes un listado de posibles APIs: 
 * https://github.com/public-apis/public-apis
 */

// api endpoint
const key ='AiThQpSqt0CbC6YSi_V8zmvoLDmMha6mB3f2TPNHu2g';
const URL = `https://api.unsplash.com/photos/random/?client_id=${key}`

// fetch(URL)
//     .then(responsive => responsive.json())
//     .then( result => console.log(typeof result))
//     .catch( error => console.log(error));

// obtner informacion de la api
getData();
async function getData() {
    try{
        // llamdo y conversion de json format a un objeto
        const responsive = await fetch(URL);
        const  data = await responsive.json();
        // mostramos los resultados
        showResponsive(data);

    }catch(error){
        // si un error ocurre mostrar cual fue 
        console.error(error);
    }
}

function showResponsive(result) {
    // destructuramos los datos que necesitamos
    const {id, created_at, likes, user, links}= result;
    const {download} = links;

    //mostramos los resultados en consola
    console.log(`

        id: ${id}
        Fecha de creación: ${created_at}
        Usuario = ${user.username}
        numero de likes: ${likes}
        links: ${download}
    
    `);
}
