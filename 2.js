/*EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende 
de lo siguiente: 
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota finañ.*/

let nombre = "Ever Trujillo";
let carnet = "2024011057";
let notaExamenes = 10;
let notaTareas = 10;
let notaAsistencia = 10; 
let notaInvestigacion = 10;

function evaluacion(examen, tareas, asistencia, investigacion)
{
    let notaFinal
    notaExamenes = notaExamenes * 0.2;
    notaTareas = notaTareas * 0.4;
    notaAsistencia = notaAsistencia * 0.1;
    notaInvestigacion = notaInvestigacion * 0.3;
    notaFinal = notaExamenes + notaTareas + notaAsistencia + notaInvestigacion;
    return notaFinal;
}

let mensaje = evaluacion(notaExamenes, notaTareas, notaAsistencia, notaInvestigacion);
console.log("Estudiante: "+ nombre);
console.log("Carnet: " + carnet);
console.log("Nota final: " + mensaje);
