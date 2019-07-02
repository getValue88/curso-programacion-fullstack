"use strict";
exports.__esModule = true;
var fs = require("fs");
var rl = require("../node_modules/readline-sync");
var personas = fs.readFileSync('ejercicio7/nombres.txt', 'utf8');
var escuelas = fs.readFileSync('ejercicio7/escuelas.txt', 'utf8');
var arrPersonas = personas.split(',').sort();
var arrEscuelas = escuelas.split('-').sort();
menu();
function menu() {
    console.log("\nOPCIONES:\n\t1 - Buscar por nombre.\n\t2 - Buscar por indice.\n\t0 - Salir.");
    var opcion = rl.questionInt("Introduzca el numero de opcion: ");
    if (opcion == 1) {
        buscarPorNombre(arrPersonas, arrEscuelas);
    }
    else if (opcion == 2) {
        buscarPorIndice(arrPersonas, arrEscuelas);
    }
    else if (opcion == 0) {
        return false;
    }
    else {
        console.log("\nOpcion invalida\n");
        menu();
    }
}
function buscarPorNombre(personas, escuelas) {
    var encontrado = false;
    var busqueda = rl.question("Ingresar apellido y nombres de la persona que desea buscar: ");
    for (var i = 0; i < personas.length; i++) {
        if (busqueda.toLowerCase().trim() == personas[i].toLowerCase().trim()) {
            encontrado = true;
            encontrarLugar(personas, escuelas, i);
        }
    }
    if (encontrado == true) {
        return false;
    }
    else {
        console.log("\nPersona no encontrada.\n");
        menu();
    }
}
function buscarPorIndice(personas, escuelas) {
    mostrarArreglo(arrPersonas);
    var indice = rl.questionInt("Introduzca el indice que desea buscar: ");
    if (!(indice < 1 || indice > personas.length)) {
        encontrarLugar(personas, escuelas, indice - 1);
    }
    else {
        console.log("\nIndice invalido.");
        menu();
    }
}
function mostrarArreglo(arr) {
    console.log("\n");
    for (var i = 0; i < arr.length; i++) {
        console.log((i + 1) + " - " + arr[i]);
    }
    console.log("\n");
}
function encontrarLugar(personas, escuelas, indice) {
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
