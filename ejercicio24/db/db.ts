import * as fs from 'fs'
import Vehiculo from "../vehicles/vehiculo";
import AutoCiudad from '../vehicles/autoCiudad';
import AutoDeportivo from '../vehicles/autoDeportivo';
import Camioneta from '../vehicles/camioneta';
import ErrorOnLineN from '../error/onLineN';

export default class Db {
    private vehiculos: Vehiculo[]

    public constructor(txtRoute: string, separator: string, separator2: string) {
        if (typeof txtRoute != "string" || txtRoute == "")
            throw new ErrorOnLineN("Base de datos ruta incorrecta", "ejercicio24/db/db.ts", 13);
        if (typeof separator != "string")
            throw new ErrorOnLineN("Separador incorrecto", "ejercicio24/db/db.ts", 15);
        if (typeof separator2 != "string")
            throw new ErrorOnLineN("Separador 2 incorrecto", "ejercicio24/db/db.ts", 17);

        this.vehiculos = this.loadFromTxt(txtRoute, separator);
    }

    public addVehicle(type: number, marca: string, modelo: string, capacidadCarga?: number): void {
        this.vehiculos.push(this.newVehicle(type, marca, modelo, capacidadCarga));
    }

    public deleteVehicle(index: number): void {
        if (isNaN(index) || index < 0 || index > this.vehiculos.length)
            throw new ErrorOnLineN("Eliminar vehiculo: indice incorrecto", "ejercicio24/db/db.ts", 28);

        this.vehiculos.splice(index - 1, 1);
    }

    public updateVehicle(index: number, type: number, marca: string, modelo: string, capacidadCarga?: number): void {
        if (isNaN(index) || index < 0 || index > this.vehiculos.length)
            throw new ErrorOnLineN("Actualizar vehiculo: indice incorrecto", "ejercicio24/db/db.ts", 35);

        this.vehiculos.splice(index - 1, 1, this.newVehicle(type, marca, modelo, capacidadCarga));
    }

    public saveData(txtRoute: string): void {
        if (typeof txtRoute != "string" || txtRoute == "")
            throw new ErrorOnLineN("No se puede guardar, base de datos ruta incorrecta", "ejercicio24/db/db.ts", 42);
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

    private loadFromTxt(txtRoute: string, separator: string): Vehiculo[] {
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

    private newVehicle(type: number, marca: string, modelo: string, capacidadCarga?: number): Vehiculo {
        if (isNaN(type) || type != 1 && type != 2 && type != 3)
            throw new ErrorOnLineN("Tipo incorrecto", "ejercicio24/db/db.ts", 75);
        if (typeof marca != "string" || marca == "")
            throw new ErrorOnLineN("Marca incorrecta", "ejercicio24/db/db.ts", 77);
        if (typeof modelo != "string" || modelo == "")
            throw new ErrorOnLineN("Modelo incorrecto", "ejercicio24/db/db.ts", 79);
        if (capacidadCarga && isNaN(capacidadCarga) || capacidadCarga < 0)
            throw new ErrorOnLineN("Capacidad de carga incorrecta", "ejercicio24/db/db.ts", 81);

        let vehicle;
        switch (type) {
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



