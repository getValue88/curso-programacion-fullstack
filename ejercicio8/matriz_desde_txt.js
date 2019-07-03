"use strict";
/*
    Crear proyecto NPM
    Implementar sistema para cargar una matrices a partir de archivos de texto
*/
exports.__esModule = true;
var fs = require("fs");
console.log(getMatrixFromTxt('ejercicio8/matriz.txt', '|', ' '));
//obtener matriz de numeros desde un txt (utiliza fs)
function getMatrixFromTxt(txtRoute, separatorOne, separatorTwo) {
    var string = fs.readFileSync(txtRoute, 'utf8'); //extraer datos del txt
    var rows = string.split(separatorOne); //separar en filas y guardar en array
    var matrixString = []; //matriz de datos (strings)
    var matrix = new Array(rows.length); //matriz de datos (numeros)
    //convertir cada fila en arreglo y guardarlo en matrizString
    for (var i = 0; i < rows.length; i++) {
        matrixString[i] = rows[i].split(separatorTwo);
    }
    //inicializar la matriz de numeros
    for (var i = 0; i < matrixString.length; i++) {
        matrix[i] = new Array(matrixString[i].length);
    }
    //rellenar la matriz de numeros parseando los datos
    for (var j = 0; j < matrixString.length; j++) {
        for (var k = 0; k < matrixString[j].length; k++) {
            matrix[j][k] = parseFloat(matrixString[j][k]);
        }
    }
    return matrix;
}
