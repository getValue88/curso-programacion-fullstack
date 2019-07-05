"use strict";
exports.__esModule = true;
var fs = require("fs");
var Matrix = /** @class */ (function () {
    function Matrix(data) {
        this.data = data;
    }
    Matrix.prototype.getValue = function (x, y) {
        if ((x >= 0 && x < this.data.length) && (y >= 0 && y < this.data[x].length))
            return this.data[x][y];
        else {
            return "Indices invalidos.";
        }
    };
    return Matrix;
}());
var MatrixFromTxt = /** @class */ (function () {
    function MatrixFromTxt(txtRoute, separatorOne, separatorTwo) {
        this.txtRoute = txtRoute;
        this.separatorOne = separatorOne;
        this.separatorTwo = separatorTwo;
    }
    MatrixFromTxt.prototype.getMatrix = function () {
        var string = fs.readFileSync(this.txtRoute, 'utf8'); //extraer datos del txt
        var rows = string.split(this.separatorOne); //separar en filas y guardar en array
        var matrixString = []; //matriz de datos (strings)
        var matrix = new Array(rows.length); //matriz de datos (numeros)
        //convertir cada fila en arreglo y guardarlo en matrizString
        for (var i = 0; i < rows.length; i++) {
            matrixString[i] = rows[i].split(this.separatorTwo);
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
    };
    return MatrixFromTxt;
}());
var matrixFromTxt = new MatrixFromTxt('ejercicio11/matriz.txt', '|', ' ');
var matriz = matrixFromTxt.getMatrix();
var matrix = new Matrix(matriz);
console.log(matrix);
//retornos validos
console.log(matrix.getValue(2, 3));
console.log(matrix.getValue(3, 0));
//retornos invalidos por indices incorrectos
console.log(matrix.getValue(4, 2));
console.log(matrix.getValue(0, 4));
console.log(matrix.getValue(-2, -4));
console.log(matrix.getValue(-2, 4));
console.log(matrix.getValue(4, -2));
