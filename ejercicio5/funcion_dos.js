"use strict";
/*
    Partir de los ejercicios de NPM:
        •Adaptar la forma de importar librerías a TS
        •Agregar tipos a las variables y funciones
*/
exports.__esModule = true;
var rl = require("../node_modules/readline-sync");
console.log("***** Probando funcion 2 *****");
var nombre = rl.question("Introduzca su nombre: ");
console.log("Hola " + nombre + "!!!");
