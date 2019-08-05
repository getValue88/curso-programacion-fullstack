import * as fs from 'fs'
import Vehiculo from "./vehiculo";
import AutoCiudad from './autoCiudad';
import AutoDeportivo from './autoDeportivo';
import Camioneta from './camioneta';

export default class Db {
    private vehiculos: Vehiculo[]

    public constructor(txtRoute: string, separator: string, separator2: string) {
        this.vehiculos = this.loadFromTxt(txtRoute, separator, separator2);
    }

    public addVehicle(type: number, marca: string, modelo: string, capacidadCarga?: number): void {
        this.vehiculos.push(this.newVehicle(type, marca, modelo, capacidadCarga));
    }

    public deleteVehicle(index: number): void {
        this.vehiculos.splice(index - 1, 1);
    }

    public updateVehicle(index: number, tipo: number, marca: string, modelo: string, capacidadCarga?: number): void {
        this.vehiculos.splice(index - 1, 1, this.newVehicle(tipo, marca, modelo, capacidadCarga));
    }
    
    public saveData(txtRoute: string): void {
        fs.writeFileSync(txtRoute, this.vehiclesToString());
    }

    public vehiclesToString(): string {
        let string: string = "";
        this.vehiculos.map(veh => {
            if (veh.getTipo() == 2)
                string += `${veh.getTipo()},${veh.getMarca()},${veh.getModelo()},${(<Camioneta>veh).getCapacidadCarga()}\r\n`;
            else
                string += `${veh.getTipo()},${veh.getMarca()},${veh.getModelo()}\r\n`;
        })
        string = string.slice(0, string.length - 2);
        return string;
    }

    private loadFromTxt(txtRoute: string, separator: string, separator2: string): Vehiculo[] {
        let arr: string[] = fs.readFileSync(txtRoute, "utf8").split(separator);
        return this.txtToObj(arr);
    }

    private txtToObj(arr: string[]): Vehiculo[] {
        let mat: string[][] = arr.map(i => i.split(","));
        let vehiculos: Vehiculo[] = [];

        mat.map(obj => {
            vehiculos.push(this.newVehicle(parseInt(obj[0]), obj[1], obj[2], parseInt(obj[3])));
        })
        return this.vehiculos = vehiculos;
    }

    private newVehicle(tipo: number, marca: string, modelo: string, capacidadCarga?: number): Vehiculo {
        let vehicle;
        switch (tipo) {
            case 1: {
                vehicle = new AutoCiudad(marca, modelo);
                break;
            }
            case 2: {
                vehicle = new Camioneta(marca, modelo, capacidadCarga);
                break;
            }
            case 3: {
                vehicle = new AutoDeportivo(marca, modelo);
                break;
            }
        }
        return vehicle;
    }
}



