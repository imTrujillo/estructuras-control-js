/*Se realiza la carga de 10 valores enteros por teclado. Se desea conocer: 
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares. */
let negativos = 0;
let positivos = 0;
let multiplos15 = 0;
let sumatoria = 0;
let valor = [];
function valoresEnteros(){
    for (let i = 0; i < 10; i++){
        valor[i] = parseInt(prompt("Ingresa el número " + (i+1) + " de 10 =>" ));
        if (valor[i]<0){
            negativos++;
        }
        else if (valor[i]>0)
        {
            positivos++;
        }
        if (valor[i]%15==0)
        {
            multiplos15++
        }
        if (valor[i]%2==0)
        {
            sumatoria += valor[i]
        }
    }
}
valoresEnteros();
console.log("Números negativos: "+ negativos);
console.log("Números positivos: " + positivos);
console.log("Múltiplos de 15: " + multiplos15);
console.log("Sumatoria de números pares: " + sumatoria);