/*EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando 
en cuenta lo siguiente: 
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el 
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino 
es Puerto el Triunfo el descuento será del 15%. */
let lugarInicial = prompt("Elija un destino turístico inicial: \nCiudad de Palma \nLa costa del Sol \nPanchimalco \nPuerto el Triunfo \n")
lugarInicial = lugarInicial.toLowerCase();
let lugarFinal = prompt("Elija un destino turístico final: \nCiudad de Palma \nLa costa del Sol \nPanchimalco \nPuerto el Triunfo \n")
lugarFinal = lugarFinal.toLowerCase();
var precio = 100;
console.log("El precio de todo el viaje será $" + precio)
var descuento = 0;


function destinoTuristico(lugarInicial, lugarFinal,descuento){
    if(lugarInicial == "ciudad de palma" && lugarFinal== "la costa del sol")
    {
        descuento = 0.05;
    }
    else if (lugarFinal=="panchimalco")
    {
        descuento = 0.1;
    }
    else if(lugarFinal =="puerto el triunfo")
    {
        descuento = 0.15;
    }
    precio = precio - (precio * descuento);

console.log("Primer destino turístico: " + lugarInicial + "\nDestino turístico final: " + lugarFinal + "\nPrecio con descuento: $" + precio);
}

destinoTuristico(lugarInicial, lugarFinal,descuento);