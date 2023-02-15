console.log("EJERCICIO 2 Calculadora de cambio óptimo de billetes y monedas");

var caja = [
  { cantidad: 200, stock: 0, tipo: "billete" },
  { cantidad: 100, stock: 0, tipo: "billete" },
  { cantidad: 50, stock: 0, tipo: "billete" },
  { cantidad: 20, stock: 0, tipo: "billete" },
  { cantidad: 10, stock: 0, tipo: "billete" },
  { cantidad: 5, stock: 0, tipo: "billete" },
  { cantidad: 2, stock: 0, tipo: "moneda" },
  { cantidad: 1, stock: 0, tipo: "moneda" },
  { cantidad: 0.5, stock: 0, tipo: "moneda" },
  { cantidad: 0.2, stock: 0, tipo: "moneda" },
  { cantidad: 0.1, stock: 0, tipo: "moneda" },
  { cantidad: 0.05, stock: 0, tipo: "moneda" },
  { cantidad: 0.02, stock: 0, tipo: "moneda" },
  { cantidad: 0.01, stock: 0, tipo: "moneda" },
];
//DESAFIO EXTRA.
//Se generan las cantidades disponibles en caja de forma aleatoria.
for (let i = 0; i < caja.length; i++) {
  caja[i].stock = Math.floor(Math.random() * 10) + 0;
}
//DATOS DE ENTRADA
var precio = () => document.getElementById("precio").value;
var entrega = () => document.getElementById("entrega").value;
//LLAMADA A LA FUNCION
document.getElementById("calcular").addEventListener("click", calcular);

//FUNCION
function calcular() {
  var cambio = Number(entrega() - precio()).toFixed(2); //Calcula el importe a devolver
  console.log("El Cambio a entregar es de :", cambio, "€.");
  for (let i = 0; cambio > 0; i++) {
    var entero = Math.floor(cambio / caja[i].cantidad);//Calcula la cantidad maxima de monedas o billetes completos que se pueden devolver.
    var disponible = Number(
      caja[i].stock > entero ? entero : caja[i].stock
    ).toFixed(2); //DESAFIO EXTRA. Limita la devolución en funcion de las cantidades disponibles en stock. 
    var resta = Number(disponible * caja[i].cantidad).toFixed(2);//Cantidad que se devuelve. 
    if (disponible >= 1) {
      console.log(
        "Se entregan ",
        disponible,
        disponible > 1 ? caja[i].tipo + "s" : caja[i].tipo,
        " de ",
        caja[i].cantidad,
        "€."
      );
      cambio = Number((cambio -= resta)).toFixed(2);
      console.log("Faltan por entregar ", cambio, "€.");
    }
  }
}
