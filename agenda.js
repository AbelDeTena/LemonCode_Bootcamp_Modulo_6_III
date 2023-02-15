// Constantes
var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
];

// Datos
var myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true),
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true),
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true),
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true),
  },
];

console.log("1. Generación aleatoria de la disponibilidad");
// Como primer apartado, vamos a generar aleatoriamente la disponibilidad para todos los miembros del equipo. Se trata de recorrer todos los miembros del equipo, y a su vez, para cada miembro, todas las franjas horarias de su disponibilidad, e ir asignando aleatoriamente si está disponible o no en dicha franja.

//1º Para lograr este primer objetivo, se contruye una función que genera de forma pseudo-aleatoria el valor Si o no.
var randomSchedule = () => (Math.round(Math.random()) === 0 ? "No" : "Si");

//2º Se realizan dos ciclos.
//Uno para recorrer todos los profesores.
//Y dentro otro para recorrer todas las horas disponibles y asignarles valor con randomSchedule.
for (const professor of myTeam) {
  console.log("Disponibilidad de ", professor.name);
  for (let i = 0; i < professor.availability.length; i++) {
    professor.availability[i] = randomSchedule();
    console.log(WORK_HOURS[i] + " " + professor.availability[i]);
  }
}

console.log("2. Buscar hueco libre");
//Para buscar el primer hueco libre habrá que comprobar la primera franja horaria en la que todos los miembros del equipo están disponibles.
//Sugerencia
//Muestra por consola la franja horaria encontrada donde hay hueco, si es que lo hay, y en caso de que no exista hueco, infórmalo también. Por ejemplo:
// Ejemplo de hueco disponible
//Hueco encontrado en el horario 15:00 - 16:00
// Ejemplo de hueco no existente
//Lo siento. No hay hueco disponible en el equipo.

//En este caso volvemos a realizar un doble ciclo.
//En el primero vamos a iterar en funcion de las horas.
//Mientras que en el segundo lo haremos según los profesores.
//Se guardan todas las disponibilidades de los distintos profesores en una misma hora en un nuevo array,
//y se comprueba que todos esten disponibles.
function available() {
  for (let i = 1; i < WORK_HOURS.length; i++) {
    disponible = [];
    for (let j = 0; j < myTeam.length; j++) {
      disponible.push(myTeam[j].availability[i]);
    }
    if (disponible.indexOf("No") === -1) {
      return console.log("Hueco encontrado en el horario " + WORK_HOURS[i]);
    }
  }
  console.log("Lo siento. No hay hueco disponible en el equipo.");
}
available();
