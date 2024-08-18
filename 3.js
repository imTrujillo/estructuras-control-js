/*CATEGORIA AUMENTO
A 15%
B 30%
C 10%
D 20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. 
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y 
aumento. Deberá demostrar los datos del empleado y el aumento salarial.*/

let nombre = "Mario Luna";
let salario = 400; 

function categorizar(salario) 
{
    let categoria;
    let aumento;

    if (salario == 360) {
        categoria = "C";
        aumento = 0.1;
    } else if (salario > 360 && salario <= 500) {
        categoria = "A";
        aumento = 0.15;
    } else if (salario > 500 && salario <= 800) {
        categoria = "D";
        aumento = 0.2;
    } else if (salario > 800) {
        categoria = "B";
        aumento = 0.3;
    }

    salario = salario + (salario * aumento); 
    return { salario, categoria, aumento }; 
}

let respuesta = categorizar(salario); 
console.log("Empleado: " + nombre);
console.log("Salario: " + respuesta.salario);
console.log("Categoría: " + respuesta.categoria);
console.log("Aumento salarial: " + (respuesta.aumento*100) + "%");

