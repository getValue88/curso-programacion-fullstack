/*
    Crear proyecto NPM
    Implementar sistema para cargar una matrices a partir de archivos de texto
*/

import * as fs from 'fs';

//obtener matriz de numeros desde un txt (utiliza fs)
function getMatrixFromTxt(txtRoute: string, separatorOne: string, separatorTwo: string): number[][] {
    let string: string = fs.readFileSync(txtRoute, 'utf8');         //extraer datos del txt
    let rows: string[] = string.split(separatorOne);                //separar en filas y guardar en array
    let matrixString: string[][] = [];                              //matriz de datos (strings)
    let matrix: number[][] = new Array(rows.length);                //matriz de datos (numeros)

    //convertir cada fila en arreglo y guardarlo en matrizString
    for (let i = 0; i < rows.length; i++) {
        matrixString[i] = rows[i].split(separatorTwo);
    }

    //inicializar la matriz de numeros
    for (let i = 0; i < matrixString.length; i++) {
        matrix[i] = new Array(matrixString[i].length);
    }

    //rellenar la matriz de numeros parseando los datos
    for (let j = 0; j < matrixString.length; j++) {
        for (let k = 0; k < matrixString[j].length; k++) {
            matrix[j][k] = parseFloat(matrixString[j][k]);
        }
    }
    return matrix;
}

console.log(getMatrixFromTxt('ejercicio8/matriz.txt', '|', ' '));