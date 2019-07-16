import * as fs from 'fs'; //utiliza fs en el método generateCarsArr();
import Auto from './auto'
import Moto from './moto';
import Camion from './camion';

export default class RegistroAutomotor {
    private txtRoute: string
    private separatorOne: string
    private separatorTwo: string
    private baseDatos: Auto[]

    constructor(txtRoute, separatorOne, separatorTwo) {
        this.txtRoute = txtRoute;
        this.separatorOne = separatorOne;
        this.separatorTwo = separatorTwo;
        this.baseDatos = this.generateCarsArr();
    }

    public getCarsList(): void {
        console.log("\n");
        for (let i = 0; i < this.baseDatos.length; i++) {
            console.log((i + 1) + " - Marca: " + this.baseDatos[i].getMarca() + ", Modelo: " + this.baseDatos[i].getModel() + ", Año: " + this.baseDatos[i].getYear() + ", Color: " + this.baseDatos[i].getColor());
        }
        console.log("\n");
    }

    public getDb() {
        return this.baseDatos;
    }

    public addCar(type: string, marca: string, modelo: string, year: number, color: string, ruedas?: number, capacidadCarga?: number, camaraFrigorifica?: string): void {
        let newItem: Auto = this.newCar(type, marca, modelo, year, color, ruedas, capacidadCarga, camaraFrigorifica);
        this.baseDatos.push(newItem);
        console.log("\nAutomovil añadido a la lista.");
    }

    public getCar(index: number): void {
        if (index > 0 && index <= this.baseDatos.length)
            console.log((index) + " - Marca: " + this.baseDatos[index - 1].getMarca() + ", Modelo: " + this.baseDatos[index - 1].getModel() + ", Año: " + this.baseDatos[index - 1].getYear() + ", Color:" + this.baseDatos[index - 1].getColor() + "\n");
        else {
            console.log("\nIndice inválido.");
        }
    }

    public deleteCar(index: number): void {
        if (index > 0 && index <= this.baseDatos.length) {
            this.baseDatos.splice(index - 1, 1);
            console.log("\nAutomovil eliminado de la lista.");
        }
        else {
            console.log("\nIndice inválido.");
        }
    }

    public updateCar(index: number, type: string, marca: string, modelo: string, year: number, color: string, ruedas?: number, capacidadCarga?: number, camaraFrigorifica?: string): void {
        if (index > 0 && index <= this.baseDatos.length) {
            let newItem: Auto = this.newCar(type, marca, modelo, year, color, ruedas, capacidadCarga, camaraFrigorifica);
            this.baseDatos.splice(index - 1, 1, newItem);
            console.log("\nAutomovil actualizado.");
        } else {
            console.log("\nIndice inválido.");
        }
    }

    private generateCarsArr(): Auto[] {
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
            switch (carMatrix[i][0]) {
                case "auto": {
                    arrAutos[i] = new Auto(carMatrix[i][1], carMatrix[i][2], parseInt(carMatrix[i][3]), carMatrix[i][4]);
                    break;
                }
                case "moto": {
                    arrAutos[i] = new Moto(carMatrix[i][1], carMatrix[i][2], parseInt(carMatrix[i][3]), carMatrix[i][4]);
                    break;
                }
                case "camion": {
                    arrAutos[i] = new Camion(carMatrix[i][1], carMatrix[i][2], parseInt(carMatrix[i][3]), carMatrix[i][4], parseInt(carMatrix[i][5]), parseFloat(carMatrix[i][6]), carMatrix[i][7]);
                    break;
                }
            }
        }
        return arrAutos;
    }

    private newCar(type: string, marca: string, modelo: string, year: number, color: string, ruedas?: number, capacidadCarga?: number, camaraFrigorifica?: string): Auto {
        let newCar: Auto
        switch (type) {
            case "auto": {
                newCar = new Auto(marca, modelo, year, color);
                break;
            }
            case "moto": {
                newCar = new Moto(marca, modelo, year, color);
                break;
            }
            case "camion": {
                newCar = new Camion(marca, modelo, year, color, ruedas, capacidadCarga, camaraFrigorifica);
            }
        }
        return newCar;
    }
}


