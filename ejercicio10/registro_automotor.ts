/*
    - Usando la clase Auto: Implementar la clase RegistroAutomotor con métodos para consultar por un auto en un listado,
    borrar, actualizar y dar de alta.
    - Partir de función ya implementada para leer archivos.
*/

import * as fs from 'fs';

class RegistroAutomotor {
    private baseDatos: Auto[]

    constructor(arrAutos: Auto[]) {
        this.baseDatos = arrAutos;
    }

    getCarsList(): void {
        console.log("\n");
        for (let i = 0; i < this.baseDatos.length; i++) {
            console.log((i + 1) + " - Marca: " + this.baseDatos[i].getMarca() + ", Modelo: " + this.baseDatos[i].getModel() + ", Año: " + this.baseDatos[i].getYear() + ", Color: " + this.baseDatos[i].getColor());
        }
        console.log("\n");
    }

    addCar(marca: string, modelo: string, year: number, color: string): void {
        let newCar: Auto = new Auto(marca, modelo, year, color);
        this.baseDatos.push(newCar);
        console.log("Automovil añadido a la lista.\n");
    }

    getCar(index: number): void {
        if (index > 0 && index <= this.baseDatos.length)
            console.log((index) + " - Marca: " + this.baseDatos[index - 1].getMarca() + ", Modelo: " + this.baseDatos[index - 1].getModel() + ", Año: " + this.baseDatos[index - 1].getYear() + ", Color:" + this.baseDatos[index - 1].getColor() + "\n");
        else {
            console.log("Indice inválido.\n");
        }
    }

    deleteCar(index: number): void {
        if (index > 0 && index <= this.baseDatos.length) {
            this.baseDatos.splice(index - 1, 1);
            console.log("Automovil eliminado de la lista.\n");
        }
        else {
            console.log("Indice inválido.\n");
        }
    }

    updateCar(index: number, marca: string, modelo: string, year: number, color: string): void {
        if (index > 0 && index <= this.baseDatos.length) {
            let newCar: Auto = new Auto(marca, modelo, year, color);
            this.baseDatos.splice(index - 1, 1, newCar);
            console.log("Automovil actualizado.\n");
        } else {
            console.log("Indice inválido.\n");
        }
    }
}

class Auto {
    private estaPrendido: boolean
    private velocidadActual: number
    private color: string
    private marca: string
    private modelo: string
    private year: number
    private kilometraje: number

    constructor(marca: string, modelo: string, year: number, color: string) {
        this.estaPrendido = false;
        this.velocidadActual = 0;
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.kilometraje = 0;
    }

    encenderApagar(): void {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        } else {
            this.estaPrendido = true;
        }
    }

    acelerar(): void {
        this.velocidadActual += 1;
    }

    frenar(): void {
        this.velocidadActual -= 1;
    }

    setKilometraje(n: number) {
        this.kilometraje += n;
    }

    getStatus(): boolean {
        return this.estaPrendido;
    }

    getVelocidadActual(): number {
        return this.velocidadActual;
    }

    getMarca(): string {
        return this.marca;
    }

    getModel(): string {
        return this.modelo;
    }

    getYear(): number {
        return this.year;
    }

    getKilometraje(): number {
        return this.kilometraje;
    }

    getColor(): string {
        return this.color;
    }
}


function getCarsArrFromTxt(txtRoute: string, separatorOne: string, separatorTwo: string): Auto[] {
    let txtCars: string[] = fs.readFileSync(txtRoute, 'utf8').split(separatorOne);
    let carMatrix: string[][] = new Array(txtCars.length);
    let arrAutos: Auto[] = new Array(txtCars.length);

    for (let i = 0; i < txtCars.length; i++) {
        let x = txtCars[i].split(separatorTwo);
        carMatrix[i] = new Array(x.length);

        for (let j = 0; j < x.length; j++) {
            carMatrix[i][j] = x[j];
        }
    }

    for (let i = 0; i < carMatrix.length; i++) {
        arrAutos[i] = new Auto(carMatrix[i][0], carMatrix[i][1], parseInt(carMatrix[i][2]), carMatrix[i][3]);
    }
    return arrAutos;
}


let carsFromTxt: Auto[] = getCarsArrFromTxt('ejercicio10/cars.txt', '\r\n', ',');

let unRegistroAutomor = new RegistroAutomotor(carsFromTxt);

unRegistroAutomor.getCarsList();

//TESTEO DE METODOS

// unRegistroAutomor.addCar('Audi', 'A4', 2019, 'verde');

// unRegistroAutomor.getCar(2);

// unRegistroAutomor.deleteCar(3);

// unRegistroAutomor.updateCar(3,'Mercedez Benz','Clase A',2017,'silver');

unRegistroAutomor.getCarsList();