//function normal
var saludar = function (nombre) {
    
    return 'Hola ' + nombre;
  };
  //limpiar pantalla al ejecutar
  console.clear();
  console.log( saludar('zag') ); //Muestra en consola Hola ZAG

  //function arrow
let saludo = nombre => `hola  ${nombre}`;
console.log(saludo("manpower"));
//funcion flecha que muestra la fecha

var mostrarFecha = () => new Date().toLocaleDateString()
console.log(mostrarFecha());
// 3/5/2022

//funcion sumar 
function calcular(operacion, numero1, numero2) {
    return operacion(numero1, numero2);
  }

var c = calcular((numero1, numero2) => numero1 + numero2, 6, 7);
console.log(c);
//suma dos numeros funcion flecha

let suma = (x1,x2)=>x1+x2;
console.log(suma(4,3));