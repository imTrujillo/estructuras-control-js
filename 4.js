/*EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario, 
calcular cual número es el mayor y devolverlo. */
let num1= parseInt(prompt("Ingresa un número: "));
let num2= parseInt(prompt("Ingresa otro número: "));

function numeroMayor(num1, num2){
    let numMayor;

    if (num1 > num2){
        numMayor = num1;
    }
    else {
        numMayor = num2;
    }
    return numMayor;
}

let respuesta = numeroMayor(num1, num2);
console.log("El mayor es: " + respuesta);