/*
 * Crea un programa que simule el comportamiento del sombrero seleccionador del
 * universo mágico de Harry Potter.
 * - De ser posible realizará 5 preguntas (como mínimo) a través de la terminal.
 * - Cada pregunta tendrá 4 respuestas posibles (también a selecciona una a través de terminal).
 * - En función de las respuestas a las 5 preguntas deberás diseñar un algoritmo que
 *   coloque al alumno en una de las 4 casas de Hogwarts (Gryffindor, Slytherin , Hufflepuff y Ravenclaw)
 * - Ten en cuenta los rasgos de cada casa para hacer las preguntas y crear el algoritmo seleccionador.
 *   Por ejemplo, en Slytherin se premia la ambición y la astucia.
 */
// Importamos la libreria que va hacer las preguntas mediante la terminal
import readline from 'readline';
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });

// Delaramos las contantes y variables que usaremos  houses, asks, answers, house y validateAnsewrs
const houses ={gryffindorHouse: 0, hufflepuffHouse :0,ravenclawHouse :0 , slytherinHouse : 0};

const asks =[
   "¿Cuál es tu enfoque principal en la vida? \n", "¿Cómo sueles enfrentar los desafíos? \n", 
   "¿Qué cualidad valoras más en los demás?\n", "¿Cuál es tu lugar ideal para pasar el tiempo libre?\n",
   "¿Cómo te enfrentas a la toma de decisiones importantes?\n"
]

const answers = [
   `
   1. Busco la emoción y la aventura. 
   2. Valoro la lealtad y la amistad.
   3. Persigo el conocimiento y la sabiduría.
   4. Me esfuerzo por el poder y la influencia.
   `,
   `
   1. Con valentía y determinación.
   2. Con paciencia y perseverancia.
   3. Con anánlisis y reflexión
   4. Con astusioa y estrategia.
   `,
   `
   1. Coraje.
   2. Lealtad.
   3. Inteligencia.
   4. Ambición.
   `, 
   `
   1. En lugares emocionantes y dínamicos.
   2. En ambientes acogedores y familiares.
   3. En bibliotecas o lugares de estudio.
   4. En eventos sociales y estratégicos.
   `, 
   `
   1. Siguiendo mi instinto y tomando riesgos.
   2. Consultando con amigos y considenrando sus opiniones.
   3. Analizando cuidadosamente todas las opciones.
   4. Tomando Decisiones que me benieficien a largo plazo.
   `
];

let house = ''
const validAnswers =[1,2,3,4];

// Declaramos la funcion recursiva makeQuestion

function makeQuestion (index, quetions){
   
   // Verifica si se han hecho todas las preguntas
   if(index === quetions.length){
      rl.close();
      return;
   }
   // Hace una pregunta al usuario y espera la respuesta
   rl.question(quetions[index] + answers[index], answer =>{

      // Verifica si la respuesta no es un número válido y vuelve a preguntar en la misma pregunta
      if (!validAnswers.includes(Number(answer))) {
         console.error('Ingresastes un respuesta no valido - ingrese un numero entre 1-4 \n \n');
         makeQuestion(index, quetions);
         return
      }
      //Obtenemos la casa seleccionada y sumamos 1
      house= Object.keys(houses)[answer-1];
      houses[house]++;

      // Hacemos la siguiente pregunta
      makeQuestion(index + 1, quetions);
   })
}

//Declaramos la funcion Sombrero seleccionador

function sombreroSeleccionador() {
   // llamamos la funcion makeQuestion
   makeQuestion(0 , asks);

   // Cerramos la interfaz de preguntas
   rl.on('close', () => {

      let maxNumber = 0;
      let houseKey="";

      //Obtnemos la casa con mayor respuestas
      Object.keys(houses).forEach(key =>{
         if (houses[key] > maxNumber) {
            maxNumber = houses[key];
            houseKey = key;
         }
      })
      //Mostramos el usuario la casa la cual fue asignado!
      console.log(`La casa a la cuel perteneces es: ${houseKey}`);
    });

}

sombreroSeleccionador();




