//Se le da la bienvenida al usuario
alert("Bienvenido/a a veterinaria Rolipolioli")

//Se le pregunta al usuario cuantos animales quiere ingresar
let numeroAnimal = prompt("Cuantos animales va a ingresar?")

//Se crea una lista donde guardar los nombres de las mascotas
let listaNombres = [];

//Se declara una funcion para guardar los nombres y la especie de la mascota
function mascota(tipoAnimal, nombreAnimal) {
    listaNombres.push(nombreAnimal + " -" + tipoAnimal)
}

//Si el usuario ingresa una cantidad distinta de 0 se lee el codigo
if (numeroAnimal > 0) {

    //Se crea un while donde el ciclo se cumple según los animales que el usuario coloco
    let animales = 1;
    while (animales <= numeroAnimal) {
        let tipoAnimal = prompt("Ingrese que tipo de animal es")
        let nombreAnimal = prompt("Ingrese el nombre del animal")
        mascota(tipoAnimal, nombreAnimal)
        animales++
    }

    //Se crea un mensaje para con una lista de las mascotas ingresadas
    if (listaNombres.length > 0) {
        let mensaje = "Nombres y especies de los animales ingresados:\n";
        for (let i = 0; i < listaNombres.length; i++) {
            mensaje += listaNombres[i] + "\n";
        }
        console.log(mensaje)
        alert(mensaje);
    } else {
        console.log(mensaje);
        alert("No se ingresaron nombres de animales.");
    }

} else {
    alert("Debe ingresar una cantidad")
}


