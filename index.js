// Reto 3
// Ya sabes lo que son los Loops, ya puedes construir un objeto y una función constructora.
// Genera una función constructora y hacer un loop para poder generar una lista de 20 autos que se construyan solos. 
// Usa el loop para poder generar nuevas instancias de la función constructora


//***********Solucion 1 ***************/

// Creamos la función constructora.
function auto(marca, modelo, annio, color){
       	this.marca = marca,
    	this.modelo = modelo,
    	this.annio = annio,
    	this.color = color
};
// Ahora generamos arrays con los datos necesarios de: Marca, Modelo, Año, Color. Además de un array que almacene los objetos nuevos.
var marcaAuto = ['Toyota', 'Tesla', 'Audi', 'Renault', 'Volkswagen', 'BMW'];
var modeloAuto = ['Z', 'X', 'Y', 'W', 'V', 'H'];
var annioAuto = [2020, 2018, 2017, 2019, 2021];
var colorAuto = ['Negro', 'Rojo', 'Plateado', 'Blanco'];
var listaAutos = [];
// Creamos una iteración que añada 30 nuevos objetos a nuestro array 'listaAutos[]' Además de asignar parámetros aleatorios a cada registro nuevo.
// Y por último imprimimos el resultado en consola. 
function generarAutos(cant){
    for (i = 0; i < cant; i++){
        var marca = marcaAuto[Math.floor(Math.random() * marcaAuto.length)];
        var modelo = modeloAuto[Math.floor(Math.random() * modeloAuto.length)];
        var annio = annioAuto[Math.floor(Math.random() * annioAuto.length)];
        var color = colorAuto[Math.floor(Math.random() * colorAuto.length)];
        listaAutos.push(new auto(marca, modelo, annio, color));
        //var resultado = `Auto [${i+1}] ${listaAutos}`
        
        console.log(listaAutos[i]);
    }
}

generarAutos(4);


