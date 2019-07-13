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

    public getCarsList(): void {
        console.log("\n");
        for (let i = 0; i < this.baseDatos.length; i++) {
            console.log((i + 1) + " - Marca: " + this.baseDatos[i].getMarca() + ", Modelo: " + this.baseDatos[i].getModel() + ", Año: " + this.baseDatos[i].getYear() + ", Color: " + this.baseDatos[i].getColor());
        }
        console.log("\n");
    }

    public addCar(marca: string, modelo: string, year: number, color: string): void {
        let newCar: Auto = new Auto(marca, modelo, year, color);
        this.baseDatos.push(newCar);
        console.log("Automovil añadido a la lista.\n");
    }

    public getCar(index: number): void {
        if (index > 0 && index <= this.baseDatos.length)
            console.log((index) + " - Marca: " + this.baseDatos[index - 1].getMarca() + ", Modelo: " + this.baseDatos[index - 1].getModel() + ", Año: " + this.baseDatos[index - 1].getYear() + ", Color:" + this.baseDatos[index - 1].getColor() + "\n");
        else {
            console.log("Indice inválido.\n");
        }
    }

    public deleteCar(index: number): void {
        if (index > 0 && index <= this.baseDatos.length) {
            this.baseDatos.splice(index - 1, 1);
            console.log("Automovil eliminado de la lista.\n");
        }
        else {
            console.log("Indice inválido.\n");
        }
    }

    public updateCar(index: number, marca: string, modelo: string, year: number, color: string): void {
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

    public encenderApagar(): void {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        } else {
            this.estaPrendido = true;
        }
    }

    public acelerar(): void {
        this.velocidadActual += 1;
    }

    public frenar(): void {
        this.velocidadActual -= 1;
    }

    public setKilometraje(n: number) {
        this.kilometraje += n;
    }

    public getStatus(): boolean {
        return this.estaPrendido;
    }

    public getVelocidadActual(): number {
        return this.velocidadActual;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getModel(): string {
        return this.modelo;
    }

    public getYear(): number {
        return this.year;
    }

    public getKilometraje(): number {
        return this.kilometraje;
    }

    public getColor(): string {
        return this.color;
    }
}

//utiliza fs en el método generateCarsArr();
class CarsArrFromTxt {
    private txtRoute: string
    private separatorOne: string
    private separatorTwo: string

    constructor(txtRoute: string, separatorOne: string, separatorTwo: string) {
        this.txtRoute = txtRoute;
        this.separatorOne = separatorOne;
        this.separatorTwo = separatorTwo;
    }

    public generateCarsArr(): Auto[] {
        let txtCars: string[] = fs.readFileSync(this.txtRoute, 'utf8').split(this.separatorOne);
        let carMatrix: string[][] = new Array(txtCars.length);
        let arrAutos: Auto[] = new Array(txtCars.length);

        for (let i = 0; i < txtCars.length; i++) {
            let x = txtCars[i].split(this.separatorTwo);
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
}


let carsFromTxt: CarsArrFromTxt = new CarsArrFromTxt('ejercicio10/cars.txt', '\r\n', ',');
let arrCars: Auto[] = carsFromTxt.generateCarsArr();

let unRegistroAutomor = new RegistroAutomotor(arrCars);

unRegistroAutomor.getCarsList();

//TESTEO DE METODOS

//  unRegistroAutomor.addCar('Audi', 'A4', 2019, 'verde');

//  unRegistroAutomor.getCar(2);

//  unRegistroAutomor.deleteCar(3);

//  unRegistroAutomor.updateCar(3,'Mercedez Benz','Clase A',2017,'silver');

unRegistroAutomor.getCarsList();