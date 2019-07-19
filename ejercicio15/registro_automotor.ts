import * as fs from 'fs'; //utiliza fs en el método generateCarsArr();
import Auto from './auto'
import Moto from './moto';
import Camion from './camion';
import Vehiculo from './vehiculo'

export default class RegistroAutomotor {
    private baseDatos: Vehiculo[]

    constructor(txtRoute, separatorOne, separatorTwo) {
        this.baseDatos = this.loadDb(txtRoute, separatorOne, separatorTwo);
    }

    public getVehicleList(): void {
        console.log("\n");
        for (let i = 0; i < this.baseDatos.length; i++) {
            console.log((i + 1) + " - Marca: " + this.baseDatos[i].getMarca() + ", Modelo: " + this.baseDatos[i].getModelo() + ", Año: " + this.baseDatos[i].getAño() + ", Color: " + this.baseDatos[i].getColor());
        }
        console.log("\n");
    }

    public getDb() {
        return this.baseDatos;
    }

    public getVehicle(dominio: string): Vehiculo {
        for (let i = 0; i < this.baseDatos.length; i++) {
            if (dominio == this.baseDatos[i].getDominio()) {
                console.log(`\n-Dominio: ${this.baseDatos[i].getDominio()} \n-Titular: ${this.baseDatos[i].getTitular()} \n-Marca: ${this.baseDatos[i].getMarca()} \n-Modelo: ${this.baseDatos[i].getModelo()} \n-Año: ${this.baseDatos[i].getAño()}`)
                return this.baseDatos[i];
            }
        }
        console.log("\nVehiculo no encontrado");
        return null;
    }

    public addVehicle(type: string, dominio: string, titular: string, marca: string, modelo: string, año: number, color: string, puertas?: number, peso?: number): void {
        let newItem: Vehiculo = this.newVehicle(type, dominio, titular, marca, modelo, año, color, puertas, peso);
        this.baseDatos.push(newItem);
        console.log("\nAutomovil añadido a la lista.");
    }

    public deleteVehicle(dominio: string): boolean {
        for (let i = 0; i < this.baseDatos.length; i++) {
            if (dominio == this.baseDatos[i].getDominio()) {
                this.baseDatos.splice(i, 1);
                console.log("\nVehiculo eliminado");
                return true;
            }
        }
        console.log("\nVehiculo no encontrado");
        return false;
    }

    public updateVehicle(dominio: string, type: string, newDominio: string, titular: string, marca: string, modelo: string, año: number, color: string, puertas?: number, peso?: number): Boolean {
        for (let i = 0; i < this.baseDatos.length; i++) {
            if (dominio == this.baseDatos[i].getDominio()) {
                let newItem: Vehiculo = this.newVehicle(type, marca, newDominio, titular, modelo, año, color, puertas, peso);
                this.baseDatos.splice(i, 1, newItem);
                console.log("\nAutomovil actualizado.");
                return true;
            }
        }
        console.log("Vehiculo no encontrado");
        return false;
    }

    private loadDb(txtRoute, separatorOne, separatorTwo): Vehiculo[] {
        let txtCars: string[] = fs.readFileSync(txtRoute, 'utf8').split(separatorOne);
        let carMatrix: string[][] = new Array(txtCars.length);
        let arrAutos: Vehiculo[] = new Array(txtCars.length);

        for (let i = 0; i < txtCars.length; i++) {
            let x = txtCars[i].split(separatorTwo);
            carMatrix[i] = new Array(x.length);

            for (let j = 0; j < x.length; j++) {
                carMatrix[i][j] = x[j];
            }
        }

        for (let i = 0; i < carMatrix.length; i++) {
            switch (carMatrix[i][0]) {
                case "auto": {
                    arrAutos[i] = new Auto(carMatrix[i][1], carMatrix[i][2], carMatrix[i][3], carMatrix[i][4], parseInt(carMatrix[i][5]), carMatrix[i][6], parseInt(carMatrix[i][7]));
                    break;
                }
                case "moto": {
                    arrAutos[i] = new Moto(carMatrix[i][1], carMatrix[i][2], carMatrix[i][3], carMatrix[i][4], parseInt(carMatrix[i][5]), carMatrix[i][6]);
                    break;
                }
                case "camion": {
                    arrAutos[i] = new Camion(carMatrix[i][1], carMatrix[i][2], carMatrix[i][3], carMatrix[i][4], parseInt(carMatrix[i][5]), carMatrix[i][6], parseInt(carMatrix[i][7]));
                    break;
                }
            }
        }
        return arrAutos;
    }

    private newVehicle(type: string, dominio: string, titular: string, marca: string, modelo: string, año: number, color: string, puertas?: number, peso?: number): Vehiculo {
        let newCar: Vehiculo
        switch (type) {
            case "auto": {
                newCar = new Auto(dominio, titular, marca, modelo, año, color, puertas);
                break;
            }
            case "moto": {
                newCar = new Moto(dominio, titular, marca, modelo, año, color);
                break;
            }
            case "camion": {
                newCar = new Camion(dominio, titular, marca, modelo, año, color, peso);
            }
        }
        return newCar;
    }
}


