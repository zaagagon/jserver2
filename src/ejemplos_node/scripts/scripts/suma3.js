//codigo js

function sumar(n1,n2) {
    return n1+n2;

}
console.clear();
console.log("Prueba zag");

//llamdo funcion suma
console.log("Resultado suma : " + sumar(4,5));
var prueba = (n1,n2)=>sumar(7,7);
console.log(parseInt (prueba));
//function arrow
var add =(x,y)=>x+y;
console.log(add(7,7));
//scope global
const nombre = true;
//scope local
//
function scope_local() {
	//const nombre = true;
	console.log(nombre);
}

scope_local(); // true
console.log(nombre); // soyEstudiante is not defined
//solucion
//Declarar la variable de manera global

//arreglo unidimiensional
const nombres = ["lio","lolo","pizza","roca"];
//posicion 
console.log(nombres[0]);
//mostrar tamaño del arreglo
console.log(nombres.length);
console.log("lelmentos lista :");
for(a=1;a<nombres.length;a++){
    console.log( '\n'+nombres[a]);
}