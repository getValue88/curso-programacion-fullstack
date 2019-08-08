import * as fs from 'fs'
import Vehiculo from "./vehiculo";
import AutoCiudad from './autoCiudad';
import AutoDeportivo from './autoDeportivo';
import Camioneta from './camioneta';

export default class Db {
    private vehiculos: Vehiculo[]

    public constructor(txtRoute: string, separator: string, separator2: string) {
        if (typeof txtRoute != "string" || txtRoute == "")
            throw new Error("La ruta de la base de datos debe ser un texto y no puede ser vacía.");
        if (typeof separator != "string")
            throw new Error("El separador 1 debe ser texto.");
        if (typeof separator2 != "string")
            throw new Error("El separador 2 debe ser un texto.");

        this.vehiculos = this.loadFromTxt(txtRoute, separator);
    }

    public addVehicle(type: number, marca: string, modelo: string, capacidadCarga?: number): void {
        this.vehiculos.push(this.newVehicle(type, marca, modelo, capacidadCarga));
    }

    public deleteVehicle(index: number): void {
        if (isNaN(index) || index < 0 || index > this.vehiculos.length)
            throw new Error("Eliminar vehiculo: indice inválido.");

        this.vehiculos.splice(index - 1, 1);
    }

    public updateVehicle(index: number, type: number, marca: string, modelo: string, capacidadCarga?: number): void {
        if (isNaN(index) || index < 0 || index > this.vehiculos.length)
            throw new Error("Actualizar vehiculo: indice inválido.");

        this.vehiculos.splice(index - 1, 1, this.newVehicle(type, marca, modelo, capacidadCarga));
    }

    public saveData(txtRoute: string): void {
        if (typeof txtRoute != "string" || txtRoute == "")
            throw new Error("La ruta de la base de datos debe ser un texto y no puede ser vacía.");
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
            throw new Error("Tipo de vehiculo invalido. (1 = auto de calle, 2 = camioneta, 3 = auto deportivo.");
        if (typeof marca != "string" || marca == "")
            throw new Error("Marca debe ser un texto y no puede ser vacío.");
        if (typeof modelo != "string" || modelo == "")
            throw new Error("Modelo debe ser un texto y no puede ser vacío.");
        if (capacidadCarga && isNaN(capacidadCarga) || capacidadCarga < 0)
            throw new Error("Capacidad de carga debe ser un valor numerico mayor a 0.");

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



