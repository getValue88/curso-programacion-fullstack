"use strict";
/*
    - Usando la clase Auto: Implementar la clase RegistroAutomotor con métodos para consultar por un auto en un listado,
    borrar, actualizar y dar de alta.
    - Partir de función ya implementada para leer archivos.
*/
exports.__esModule = true;
var fs = require("fs");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(arrAutos) {
        this.baseDatos = arrAutos;
    }
    RegistroAutomotor.prototype.getCarsList = function () {
        console.log("\n");
        for (var i = 0; i < this.baseDatos.length; i++) {
            console.log((i + 1) + " - Marca: " + this.baseDatos[i].getMarca() + ", Modelo: " + this.baseDatos[i].getModel() + ", Año: " + this.baseDatos[i].getYear() + ", Color: " + this.baseDatos[i].getColor());
        }
        console.log("\n");
    };
    RegistroAutomotor.prototype.addCar = function (marca, modelo, year, color) {
        var newCar = new Auto(marca, modelo, year, color);
        this.baseDatos.push(newCar);
        console.log("Automovil añadido a la lista.\n");
    };
    RegistroAutomotor.prototype.getCar = function (index) {
        if (index > 0 && index <= this.baseDatos.length)
            console.log((index) + " - Marca: " + this.baseDatos[index - 1].getMarca() + ", Modelo: " + this.baseDatos[index - 1].getModel() + ", Año: " + this.baseDatos[index - 1].getYear() + ", Color:" + this.baseDatos[index - 1].getColor() + "\n");
        else {
            console.log("Indice inválido.\n");
        }
    };
    RegistroAutomotor.prototype.deleteCar = function (index) {
        if (index > 0 && index <= this.baseDatos.length) {
            this.baseDatos.splice(index - 1, 1);
            console.log("Automovil eliminado de la lista.\n");
        }
        else {
            console.log("Indice inválido.\n");
        }
    };
    RegistroAutomotor.prototype.updateCar = function (index, marca, modelo, year, color) {
        if (index > 0 && index <= this.baseDatos.length) {
            var newCar = new Auto(marca, modelo, year, color);
            this.baseDatos.splice(index - 1, 1, newCar);
            console.log("Automovil actualizado.\n");
        }
        else {
            console.log("Indice inválido.\n");
        }
    };
    return RegistroAutomotor;
}());
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, year, color) {
        this.estaPrendido = false;
        this.velocidadActual = 0;
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.kilometraje = 0;
    }
    Auto.prototype.encenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Auto.prototype.acelerar = function () {
        this.velocidadActual += 1;
    };
    Auto.prototype.frenar = function () {
        this.velocidadActual -= 1;
    };
    Auto.prototype.setKilometraje = function (n) {
        this.kilometraje += n;
    };
    Auto.prototype.getStatus = function () {
        return this.estaPrendido;
    };
    Auto.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModel = function () {
        return this.modelo;
    };
    Auto.prototype.getYear = function () {
        return this.year;
    };
    Auto.prototype.getKilometraje = function () {
        return this.kilometraje;
    };
    Auto.prototype.getColor = function () {
        return this.color;
    };
    return Auto;
}());
//utiliza fs en el método getArr();
var CarsArrFromTxt = /** @class */ (function () {
    function CarsArrFromTxt(txtRoute, separatorOne, separatorTwo) {
        this.txtRoute = txtRoute;
        this.separatorOne = separatorOne;
        this.separatorTwo = separatorTwo;
    }
    CarsArrFromTxt.prototype.getArr = function () {
        var txtCars = fs.readFileSync(this.txtRoute, 'utf8').split(this.separatorOne);
        var carMatrix = new Array(txtCars.length);
        var arrAutos = new Array(txtCars.length);
        for (var i = 0; i < txtCars.length; i++) {
            var x = txtCars[i].split(this.separatorTwo);
            carMatrix[i] = new Array(x.length);
            for (var j = 0; j < x.length; j++) {
                carMatrix[i][j] = x[j];
            }
        }
        for (var i = 0; i < carMatrix.length; i++) {
            arrAutos[i] = new Auto(carMatrix[i][0], carMatrix[i][1], parseInt(carMatrix[i][2]), carMatrix[i][3]);
        }
        return arrAutos;
    };
    return CarsArrFromTxt;
}());
var carsFromTxt = new CarsArrFromTxt('ejercicio10/cars.txt', '\r\n', ',');
var arrCars = carsFromTxt.getArr();
var unRegistroAutomor = new RegistroAutomotor(arrCars);
unRegistroAutomor.getCarsList();
//TESTEO DE METODOS
//  unRegistroAutomor.addCar('Audi', 'A4', 2019, 'verde');
//  unRegistroAutomor.getCar(2);
//  unRegistroAutomor.deleteCar(3);
//  unRegistroAutomor.updateCar(3,'Mercedez Benz','Clase A',2017,'silver');
unRegistroAutomor.getCarsList();
