/*EJERCICIO 8: 
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado 
por el usuario */
let num = parseInt(prompt("Ingrese un número: "));

console.log("Tabla de multiplicar del "+ num)
function tabla(num){
    for (let i=1; i <= 10; i++){
        console.log(num + " * "+ i +" = "+ (num*i));
    }
}
tabla(num);