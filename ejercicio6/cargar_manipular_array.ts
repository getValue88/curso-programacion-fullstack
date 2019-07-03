/*
    Partir de cero:
        Definir funciones (con todos los tipos necesarios) para hacer lo siguiente:
        •Cargar un listado de palabras (por esta vez, usar el arreglo como variable global)
        •Insertar/eliminar/buscar/actualizar una palabra del listado
        Agregar que la lista de palabras esté ordenada permanentemente (ayudarse con filminas de ordenamiento)
*/

import * as rl from "readline-sync";

let arrayNombres: string[] = [];
cargarNombres(arrayNombres);
mostrarArreglo(arrayNombres);
menu();

//cargar array de strings
function cargarNombres(arr: string[]): string[] {
    let name: string;
    let i = 0;
    while (true) {
        name = rl.question("Introducir nombre (valor vacio para terminar la carga): ");
        if (!name == "") {
            arr[i] = name.trim().toUpperCase();
            i++;
        } else {
            return arr;
        }
    }
}

function mostrarArreglo(arr: string[]): void {
    arr.sort();
    console.log("\n");
    for (let i = 0; i < arr.length; i++) {
        console.log((i + 1) + " - " + arr[i]);
    }
    console.log("\n");
}

//menu
function menu() {
    console.log("OPCIONES:\n1 - Agregar a la lista.\n2 - Eliminar un valor.\n3 - Buscar un valor\n4 - Actualizar un valor.\n0 - Finalizar programa\n");
    let opcion: number = rl.questionInt("Introduzca el numero de opcion: ");

    //agregar a la lista
    if (opcion == 1) {
        let addArr: string[] = [];
        cargarNombres(addArr);
        agregar(arrayNombres, addArr);
        mostrarArreglo(arrayNombres);
        menu();

        //eliminar de la lista
    } else if (opcion == 2) {
        eliminar(arrayNombres);
        mostrarArreglo(arrayNombres);
        menu();

        //buscar
    } else if (opcion == 3) {
        mostrarArreglo(arrayNombres);
        console.log(buscar(arrayNombres));
        menu();

        //actualizar
    } else if (opcion == 4) {
        actualizar(arrayNombres);
        mostrarArreglo(arrayNombres);
        menu();

        //salir
    } else if (opcion == 0) {
        return false;

        //opcion invalida
    } else {
        console.log("\nOpcion invalida.\n");
        menu();
    }
}

//agregar datos al arreglo global
function agregar(arr1: string[], arr2: string[]): string[] {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    return arr1;
}

// eliminar un item del array
function eliminar(arr: string[]): string[] {
    let indice: number = rl.questionInt("Introduzca el numero del indice a eliminar: ");
    if (indice < 1 || indice > arr.length) {
        console.log("\nIndice invalido.");
    } else {
        arr.splice(indice - 1, 1);
    }
    return arr;
}

// buscar en el array
function buscar(arr: string[]): string {
    let name: string = rl.question("Introduzca el nombre que desea buscar: ");
    for (let i = 0; i < arr.length; i++) {
        if (name.trim().toUpperCase() == arr[i]) {
            return "\nEl nombre buscado se encuentra en el indice " + (i + 1) + ".";
        }
    }
    return "\nEl nombre buscado no fue encontrado.\n";
}

//actualizar un indice
function actualizar(arr: string[]): string[] {
    let indice: number = rl.questionInt("Introduzca el numero del indice a modificar: ");
    if (!(indice < 1 || indice > arr.length)) {
        let name: string = rl.question("Introduzca el nuevo nombre: ");
        arr[indice - 1] = name.toUpperCase();
        console.log("\nIndice modificado con exito.");
    } else {
        console.log("\nIndice invalido.")
    }
    return arr;
}