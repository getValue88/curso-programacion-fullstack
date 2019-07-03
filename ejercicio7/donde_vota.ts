/*
    Iniciar proyecto NPM en carpeta nueva
    Descargar las librerías necesarias
    Cargar un listado de nombres a partir de un archivo de texto
    Cargar un listado de colegios a partir de otro archivo de texto
    A partir de ambos listados, saber en qué colegio va a votar una determinada persona
*/

import * as fs from 'fs';
import * as rl from '../node_modules/readline-sync';

let personas: string = fs.readFileSync('ejercicio7/nombres.txt', 'utf8');
let escuelas: string = fs.readFileSync('ejercicio7/escuelas.txt', 'utf8');

let arrPersonas: string[] = personas.split(',').sort();
let arrEscuelas: string[] = escuelas.split('-').sort();

menu();

function menu(): boolean {
    console.log("\nOPCIONES:\n\t1 - Buscar por nombre.\n\t2 - Buscar por indice.\n\t0 - Salir.");
    let opcion: number = rl.questionInt("Introduzca el numero de opcion: ");
    if (opcion == 1) {
        buscarPorNombre(arrPersonas, arrEscuelas);
    } else if (opcion == 2) {
        buscarPorIndice(arrPersonas, arrEscuelas);
    } else if (opcion == 0) {
        return false;
    } else {
        console.log("\nOpcion invalida\n");
        menu();
    }
}

function buscarPorNombre(personas: string[], escuelas: string[]): boolean {
    let encontrado: boolean = false;
    let busqueda: string = rl.question("Ingresar apellido y nombres de la persona que desea buscar: ");
    for (let i = 0; i < personas.length; i++) {
        if (busqueda.toLowerCase().trim() == personas[i].toLowerCase().trim()) {
            encontrado = true;
            encontrarLugar(personas, escuelas, i);
        }
    }
    if (encontrado == true) {
        return false;
    } else{
        console.log("\nPersona no encontrada.\n");
        menu();
    }
}

function buscarPorIndice(personas: string[], escuelas: string[]): void {
    mostrarArreglo(arrPersonas);
    let indice: number = rl.questionInt("Introduzca el indice que desea buscar: ");
    if (!(indice < 1 || indice > personas.length)) {
        encontrarLugar(personas, escuelas, indice - 1);
    } else {
        console.log("\nIndice invalido.");
        menu();
    }
}

function mostrarArreglo(arr: string[]): void {
    console.log("\n");
    for (let i = 0; i < arr.length; i++) {
        console.log((i + 1) + " - " + arr[i]);
    }
    console.log("\n");
}

function encontrarLugar(personas: string[], escuelas: string[], indice: number): void {
    switch (personas[indice].charAt(0)) {
        case "A":
        case "B":
        case "C": {
            console.log("\n" + personas[indice] + " vota en: " + escuelas[0] + "\n");
            break;
        }
        case "D":
        case "E":
        case "F": {
            console.log("\n" + personas[indice] + " vota en: " + escuelas[1] + "\n");
            break;
        }
        case "G":
        case "H":
        case "I": {
            console.log("\n" + personas[indice] + " vota en: " + escuelas[2] + "\n");
            break;
        }
        case "J":
        case "K":
        case "L": {
            console.log("\n" + personas[indice] + " vota en: " + escuelas[3] + "\n");
            break;
        }
        case "M":
        case "N":
        case "O": {
            console.log("\n" + personas[indice] + " vota en: " + escuelas[4] + "\n");
            break;
        }
        case "P":
        case "Q":
        case "R": {
            console.log("\n" + personas[indice] + " vota en: " + escuelas[5] + "\n");
            break;
        }
        case "S":
        case "T":
        case "U": {
            console.log("\n" + personas[indice] + " vota en: " + escuelas[6] + "\n");
            break;
        }
        case "V":
        case "W":
        case "X": {
            console.log("\n" + personas[indice] + " vota en: " + escuelas[7] + "\n");
            break;
        }
        case "Y":
        case "Z": {
            console.log("\n" + personas[indice] + " vota en: " + escuelas[8] + "\n");
            break;
        }
        default:
            console.log("\nPersona no encontrada.\n");
            menu();
    }
}
