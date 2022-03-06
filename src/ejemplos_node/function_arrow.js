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
// 1/5/2019
