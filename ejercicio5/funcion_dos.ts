/*
    Partir de los ejercicios de NPM:
        •Adaptar la forma de importar librerías a TS
        •Agregar tipos a las variables y funciones
*/

import * as rl from "../node_modules/readline-sync";

console.log("***** Probando funcion 2 *****");
let nombre: string = rl.question("Introduzca su nombre: ");

console.log("Hola " + nombre + "!!!");